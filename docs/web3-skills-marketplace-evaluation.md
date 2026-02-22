# Web3 Skills 市场方案可行性评估报告

> 评估日期：2026-02-22
> 项目：candy-shop (AI Skills Marketplace)
> 评估范围：最小 Web3 化 Skills 市场方案

---

## 一、项目现状

| 维度 | 现状 |
|------|------|
| **技术栈** | React 19 + Vite 7 + Tailwind + Tauri v2 |
| **Skills 数量** | 230+ 预置，存储在 `src/data/skillsData.ts` 静态文件中 |
| **Skill 来源** | GitHub Raw URL（`skillMdUrl`）+ 本地创建 |
| **执行引擎** | OpenCode SDK（远程 AI agent）+ WebContainer（浏览器沙箱） |
| **购物车/购买** | 纯 localStorage 模拟，无真实支付 |
| **认证** | Supabase OAuth |
| **部署** | Vercel + HuggingFace Spaces + Tauri Desktop |
| **Web3 集成** | **完全没有** — 无钱包、无合约、无链上交互 |

---

## 二、整体架构框架图

### 系统架构总览

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                          APPLICATION & UI LAYER (Web2)                          │
│                                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌───────────────────┐   │
│  │  Skills 市场  │  │  Skill 详情  │  │ Skill Creator│  │    个人库/钱包    │   │
│  │  浏览/搜索    │  │  描述/评价    │  │ 上传/手动/GH │  │ 查看已拥有 Skill  │   │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘  └───────┬───────────┘   │
│         │                 │                  │                  │               │
│  ┌──────┴─────────────────┴──────────────────┴──────────────────┴───────────┐   │
│  │                     React 前端 (Vite + Tailwind)                         │   │
│  │              + ethers.js/viem + Wallet SDK (钱包连接)                     │   │
│  └─────────────────────────────┬───────────────────────────────────────────┘   │
│                                │                                               │
│  ┌─────────────────────────────┴───────────────────────────────────────────┐   │
│  │                     Web2 Backend (Supabase + API)                        │   │
│  │  · 用户认证 (OAuth)        · 执行日志/统计                               │   │
│  │  · 聚合链上状态 + IPFS 数据  · 排行榜/推荐                               │   │
│  │  · 缓存 Skill 元数据        · Web2 Fallback 存储                         │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
└──────────────────────────────────┬──────────────────────────────────────────────┘
                                   │
            ┌──────────────────────┼──────────────────────┐
            │                      │                      │
            ▼                      ▼                      ▼
┌─────────────────────┐ ┌──────────────────┐ ┌─────────────────────────────────┐
│   EXECUTION LAYER   │ │  STORAGE LAYER   │ │        WEB3 LAYER               │
│      (Web2)         │ │ (Decentralized)  │ │    (最小必要部分)                │
│                     │ │                  │ │                                 │
│ ┌─────────────────┐ │ │ ┌──────────────┐ │ │  ┌───────────────────────────┐  │
│ │ Browser Sandbox │ │ │ │  IPFS 节点   │ │ │  │  Skill NFT 合约          │  │
│ │ · WebWorker     │ │ │ │ (Pinata Pin) │ │ │  │  (ERC-1155)              │  │
│ │ · iframe        │ │ │ │              │ │ │  │  · owner / balanceOf     │  │
│ │ · WASM 沙箱     │ │ │ │ ┌──────────┐ │ │ │  │  · metadataURI → IPFS   │  │
│ │ · WebContainer  │ │ │ │ │Code .js  │ │ │ │  │  · mint / burn          │  │
│ └─────────────────┘ │ │ │ │Code .wasm│ │ │ │  └───────────────────────────┘  │
│                     │ │ │ │Code .py  │ │ │ │                                 │
│ ┌─────────────────┐ │ │ │ └──────────┘ │ │ │  ┌───────────────────────────┐  │
│ │ Server Runtime  │ │ │ │              │ │ │  │  Market 合约              │  │
│ │ · Docker 容器   │ │ │ │ ┌──────────┐ │ │ │  │  · listSkill(id, price) │  │
│ │ · WASM Runtime  │ │ │ │ │metadata  │ │ │ │  │  · buySkill(id)         │  │
│ │ · OpenCode SDK  │ │ │ │ │  .json   │ │ │ │  │  · delistSkill(id)      │  │
│ └─────────────────┘ │ │ │ └──────────┘ │ │ │  │  · 分润逻辑              │  │
│                     │ │ └──────────────┘ │ │  └───────────────────────────┘  │
│ ┌─────────────────┐ │ │                  │ │                                 │
│ │ Agent Runtime   │ │ │ ┌──────────────┐ │ │  ┌───────────────────────────┐  │
│ │ · 查链上授权    │ │ │ │   Pinata     │ │ │  │  (可选) 授权合约          │  │
│ │ · 拉 IPFS 代码  │ │ │ │  Dedicated   │ │ │  │  · isAuthorized(id,addr)│  │
│ │ · 安全沙箱执行  │ │ │ │  Gateway     │ │ │  │  · grantAccess          │  │
│ │ · 返回结果      │ │ │ │  (HTTP CDN)  │ │ │  │  · revokeAccess         │  │
│ └─────────────────┘ │ │ └──────────────┘ │ │  └───────────────────────────┘  │
└─────────────────────┘ └──────────────────┘ └─────────────────────────────────┘
                                                          │
                                                          ▼
                                                ┌──────────────────┐
                                                │  L2 区块链       │
                                                │  (Base 推荐)     │
                                                │  · 低 Gas        │
                                                │  · Coinbase 生态 │
                                                │  · 智能钱包支持  │
                                                └──────────────────┘
```

### Skill 发布流程

```
╔══════════════════════════════════════════════════════════════════════╗
║                    SKILL 发布流程 (Creator → Chain)                  ║
╠══════════════════════════════════════════════════════════════════════╣
║                                                                      ║
║  开发者上传 Skill 代码                                               ║
║       │                                                              ║
║       ▼                                                              ║
║  打包代码 → 上传 IPFS (Pinata) → 获得 codeCID                       ║
║       │                                                              ║
║       ▼                                                              ║
║  生成 metadata.json {name, codeCID, runtime, pricing...}             ║
║       │                                                              ║
║       ▼                                                              ║
║  上传 metadata.json → IPFS → 获得 metadataCID                       ║
║       │                                                              ║
║       ▼                                                              ║
║  调用 SkillNFT.mint(metadataCID) → 链上铸造 → 获得 tokenId          ║
║       │                                                              ║
║       ▼                                                              ║
║  Web2 DB 记录映射: tokenId ↔ 内部 skillId                           ║
╚══════════════════════════════════════════════════════════════════════╝
```

### Skill 调用流程

```
╔══════════════════════════════════════════════════════════════════════╗
║                    SKILL 调用流程 (User → Execution)                 ║
╠══════════════════════════════════════════════════════════════════════╣
║                                                                      ║
║  用户点击「运行 Skill」                                              ║
║       │                                                              ║
║       ▼                                                              ║
║  ① 链上查询: ownerOf(tokenId) == msg.sender ?                       ║
║     或 isAuthorized(tokenId, userAddress) ?                          ║
║       │                                                              ║
║       ├── 无权限 → 提示购买                                          ║
║       │                                                              ║
║       ▼ 有权限                                                       ║
║  ② 链上读取: tokenURI(tokenId) → ipfs://metadataCID                 ║
║       │                                                              ║
║       ▼                                                              ║
║  ③ HTTP 请求: Pinata Gateway → 获取 metadata.json                   ║
║       │                                                              ║
║       ▼                                                              ║
║  ④ HTTP 请求: Pinata Gateway → 根据 codeCID 获取 Skill 代码         ║
║       │                                                              ║
║       ▼                                                              ║
║  ⑤ 执行: WebWorker / WebContainer / OpenCode 沙箱执行               ║
║       │                                                              ║
║       ▼                                                              ║
║  ⑥ 返回结果给用户                                                    ║
╚══════════════════════════════════════════════════════════════════════╝
```

---

## 三、方案中的重大问题

| # | 问题 | 严重程度 | 说明 |
|---|------|---------|------|
| 1 | **Cloudflare 公共 IPFS 网关已下线** | **严重** | 方案中多次提到的 `ipfs.cloudflare.com` 已于 **2024 年 8 月停服**。必须改用 Pinata Dedicated Gateway 或 web3.storage |
| 2 | **推荐 ERC-721 不是最优选择** | 中等 | Skill 不是唯一的 1-of-1 资产 — 同一个 Skill 会卖给多个买家。**ERC-1155 更合适**（批量铸造、单合约多资产、Gas 更低） |
| 3 | **NFT 版税不可执行** | 中等 | 方案提到的二级市场分润/创作者版税 — 链上**无法强制执行**，主流市场已转向可选/零版税，不能依赖这个作为收入来源 |
| 4 | **Skill 更新 vs NFT 不可变性矛盾** | 中等 | IPFS CID 是内容寻址的（内容变 → CID 变）。Skill 更新时需要新 CID，链上 metadataURI 需要更新机制，方案未详细说明 |

---

## 四、风险矩阵

```
影响度 ↑
  高 │  ❌ IPFS 可用性       ⚠️ 合约安全
     │     (内容消失=         (处理资金
     │      资产归零)          需要审计)
     │
  中 │  ⚠️ 钱包 UX 摩擦     ⚠️ 经济模型
     │     (非 crypto 用户     (定价难、
     │      流失严重)           收入天花板)
     │
  低 │  ℹ️ 架构复杂度        ℹ️ 代码执行安全
     │     (多平台+Web3        (已有沙箱，
     │      维护成本↑)          风险可控)
     │
     └──────────────────────────────────→ 发生概率
           低         中         高
```

---

## 五、各维度详细评估

### 5.1 IPFS 存储层

| 方面 | 方案说法 | 实际情况 | 建议 |
|------|---------|---------|------|
| Gateway | Cloudflare IPFS GW | **已于 2024.8 停服** | 改用 **Pinata Dedicated GW**（$20/月起，有免费层） |
| 持久性 | 未详细说明 | IPFS 不保证持久性，未被 pin 的内容会被 GC | **必须**用 Pinata pinning + web3.storage (Filecoin) 双重备份 |
| 延迟 | 未提及 | 公共网关 200ms-5s+；Pinata 专用网关更快 | Pinata 专用网关 + CDN 缓存 |
| 成本 | "不用自建 IPFS" ✓ | Pinata 免费层: 1GB 存储 / 10GB 带宽 / 500 文件 | 初期够用，但 230+ skill 打包后可能很快超限 |
| **总评** | 方向正确，但具体方案过时 | **需要修正 Gateway 选择** | 保留 GitHub Raw URL 作为 Web2 fallback |

#### IPFS Gateway 选择对比

| 服务 | 定价 | 延迟 | 可靠性 | 适用场景 |
|------|------|------|--------|---------|
| **Pinata (Dedicated GW)** | $20/月起；免费层 1GB | 快（专用 CDN） | 高（企业 SLA） | 生产环境 NFT 元数据 |
| **web3.storage** | 有免费层；Filecoin 支撑 | 中等 | 好（存储证明） | 长期归档 |
| **Cloudflare (自定义域名)** | Cloudflare 按量付费 | ~116ms 缓存后 | 高 | 自有品牌域名 |
| **公共网关 (ipfs.io)** | 免费 | 不稳定 (200ms-5s+) | 不可靠 | 仅开发测试 |

### 5.2 链的选择

| 链 | Gas 成本 | 开发工具 | 钱包 UX | 推荐度 |
|----|---------|---------|--------|--------|
| **Base** | ~$0.01-0.05/tx | 成熟 | **Coinbase Smart Wallet（最佳）** | **首选** |
| Polygon PoS | ~$0.002/tx（最便宜） | 最成熟 | 一般 | 备选 |
| Arbitrum | ~$0.05-0.30/tx | 成熟 | 一般 | 不推荐（Gas 偏高） |

**推荐 Base 的关键理由：**

- **Coinbase Smart Wallet**：支持 Face ID / 指纹 / Google 登录创建钱包 — 无需助记词、无需安装 MetaMask
- **嵌入式钱包 SDK**：可在 Supabase 注册流程中自动创建钱包
- **Gasless 交易**：应用可替用户支付 Gas，用户无需持有 crypto
- **多链支持**：Smart Wallet 支持 8 条链，不锁定单一生态

### 5.3 NFT 标准对比

| 标准 | ERC-721（方案推荐） | ERC-1155（更优选择） |
|------|-------------------|---------------------|
| 适合场景 | 唯一资产（1-of-1） | 多份资产（同一 Skill 卖给多人） |
| 批量操作 | 不支持 | 支持（一次铸造 100 份） |
| Gas 效率 | 较高 | 更低（单合约管理所有 Skill） |
| 灵活性 | NFT only | 同时支持 fungible + non-fungible |
| **适合 candy-shop？** | **不太适合** — Skill 非唯一资产 | **更适合** — 同一 Skill 多人购买 |

### 5.4 经济模型

| 模型 | 可行性 | 问题 | 建议 |
|------|-------|------|------|
| 一次性买断 | 简单可行 | 收入有上限；更新 Skill 如何处理？ | 作为 V1 起步方案 ✓ |
| 使用权授权 | 技术可行 | UX 复杂（过期、续费） | V2 再考虑 |
| 免费 + Premium 混合 | **最推荐** | 需要区分哪些 Skill 收费 | 大部分免费 + 精品收费 |

**推荐混合模型（ERC-1155）：**

1. **免费 Skill** — 社区/开源，无需 NFT，保持现有 GitHub 分发
2. **Premium Skill（一次性购买）** — ERC-1155 NFT，固定价格，不限量。定价 $1-$10
3. **订阅 Skill（使用权授权）** — ERC-1155 + 链上过期逻辑，用于高价值、频繁更新的 Skill

### 5.5 竞品分析

| 项目 | 做法 | 与 candy-shop 的差异 |
|------|------|---------------------|
| **Virtuals Protocol** | AI Agent 代币化（fungible token），pump.fun 模式，Base 链 | 偏投机；candy-shop 是实用工具 NFT |
| **Griffin AI** | No-code AI agent builder for Web3 | 不做 marketplace |
| **Holoworld** | AI agent 平台 | 竞争对手，非 skill marketplace |

**结论**：「Skill NFT 市场」目前是**蓝海**，没有直接竞争者。但也意味着市场需求未被验证。

### 5.6 安全风险

#### 智能合约安全

- 2025 年智能合约漏洞导致 $2.2B+ 损失
- 超过 22% 的 NFT 合约存在多重漏洞（重入攻击、未检查提款、无限铸造）
- **必须**使用 OpenZeppelin 作为合约基础
- **建议**进行专业审计（$25K-$150K）
- 使用 Slither / MythX 自动化分析（可覆盖约 92% 已知漏洞模式）

#### 钱包 UX 风险

- 传统 Web3 Onboarding（MetaMask + 助记词）对非 crypto 用户是灾难
- **方案只提到 "Web3Modal + MetaMask"，这是严重不足的**
- 解决方案：Coinbase Smart Wallet + Account Abstraction (ERC-4337)
- 法币入金：集成 Coinbase Pay / Transak

#### 代码执行安全

- IPFS 获取的代码绕过了当前 GitHub 信任链
- IPFS CID = 内容哈希，篡改可检测（IPFS 的天然优势）
- 现有 WebContainer 沙箱提供隔离
- 建议：增加 Skill 审核/验证机制后再允许铸造 NFT

---

## 六、总体评价

### 方案优点

1. **"最小 Web3 化"的思路完全正确** — 只在所有权+交易环节用链上，执行留在 Web2，避免了过度 Web3 化的陷阱
2. **分阶段路径合理** — 阶段 0→1→2→3 的渐进式方案降低了风险
3. **架构分层清晰** — Web3 层 / 存储层 / 执行层 / 应用层的分离设计良好
4. **与现有架构兼容** — 不需要推倒重来，增量改造

### 方案缺陷

1. **Cloudflare IPFS GW 已停服** — 这是方案的技术盲点，需要全部替换为 Pinata
2. **ERC-721 选择不佳** — 应该用 ERC-1155
3. **钱包 UX 考虑不足** — 方案只提到 "Web3Modal + MetaMask"，这对非 crypto 用户是灾难性的。应该用 Coinbase Smart Wallet 或 Account Abstraction
4. **Skill 更新机制缺失** — 代码更新 → CID 变化 → 链上 URI 需更新，方案未涉及
5. **版税依赖有风险** — 链上版税不可强制执行

---

## 七、可行性评分

```
┌────────────────────────────────────────────────────────┐
│  技术可行性      ████████░░  8/10  (需修正 IPFS 方案)   │
│  经济可行性      ██████░░░░  6/10  (定价和需求未验证)    │
│  用户体验        █████░░░░░  5/10  (Web3 onboarding 摩擦)│
│  与现有架构兼容  █████████░  9/10  (增量改造，影响小)    │
│  竞争优势        ███████░░░  7/10  (蓝海但需求未验证)    │
│  实施复杂度      ██████░░░░  6/10  (合约开发+审计+多链)  │
│                                                        │
│  综合评分        ███████░░░  6.8/10                     │
└────────────────────────────────────────────────────────┘
```

---

## 八、修正后的推荐技术栈

| 层级 | 原方案 | 修正建议 |
|------|-------|---------|
| **链** | Polygon / Base / Arbitrum | **Base**（Coinbase 生态 + Smart Wallet） |
| **NFT 标准** | ERC-721 | **ERC-1155**（多份销售、批量操作、低 Gas） |
| **IPFS Gateway** | Cloudflare Public GW | **Pinata Dedicated GW** + web3.storage 备份 |
| **钱包** | Web3Modal + MetaMask | **Coinbase Smart Wallet** + Account Abstraction |
| **合约框架** | 未指定 | **OpenZeppelin** + Hardhat/Foundry |
| **索引** | 未指定 | **TheGraph** 或 Alchemy Subgraphs |
| **法币入金** | 未提及 | **Coinbase Pay / Transak** |
| **Web2 Fallback** | 未提及 | **保留 GitHub Raw URL + Supabase 存储** |

---

## 九、实施前的关键建议

1. **先验证需求** — 在投入 Web3 开发之前，先通过现有 Web2 版本验证用户是否真的愿意为 Skill 付费
2. **IPFS Gateway 替换** — Cloudflare 已停服，使用 Pinata + Filecoin 双重保障
3. **ERC-1155 替代 ERC-721** — 更适合 Skill 多份销售场景
4. **Coinbase Smart Wallet 优先** — 降低非 crypto 用户的 onboarding 摩擦
5. **保留 Web2 Fallback** — GitHub Raw URL + Supabase 不要删除
6. **合约安全预算** — OpenZeppelin 基础 + 专业审计（$25K-$150K）
7. **渐进式上线** — 严格按阶段 0→1→2→3 推进，每阶段验证后再进入下一阶段

---

## 附录：参考资料

- [Cloudflare IPFS Gateway 文档](https://developers.cloudflare.com/web3/ipfs-gateway/)
- [Cloudflare 公共 IPFS 网关停服公告 (2024.8)](https://blog.cloudflare.com/cloudflares-public-ipfs-gateways-and-supporting-interplanetary-shipyard/)
- [Pinata 定价](https://pinata.cloud/pricing)
- [IPFS 持久性文档](https://docs.ipfs.tech/concepts/persistence/)
- [NFT Gas 费优化策略](https://devel.coinbrain.com/blog/nft-gas-fee-optimization-strategies)
- [L2 对比：Polygon vs Arbitrum vs Optimism](https://pixelplex.io/blog/polygon-vs-arbitrum-vs-optimism-comparison/)
- [Coinbase Smart Wallet](https://www.coinbase.com/en-in/blog/a-new-era-in-crypto-wallets-smart-wallet-is-here)
- [ERC-721 vs ERC-1155 对比](https://www.alchemy.com/blog/comparing-erc-721-to-erc-1155)
- [Virtuals Protocol 分析](https://www.datawallet.com/crypto/what-is-virtuals-protocol)
- [NFT 合约安全审计指南](https://hacken.io/discover/security-audit-for-nft-guide-for-founders-and-managers/)
- [NFT 订阅模型](https://www.airnfts.com/post/nft-subscription-models-future-of-digital-ownership)
