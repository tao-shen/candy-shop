# Candy Shop — Reddit Marketing Playbook

> **Goal:** Drive organic awareness, star growth, and early adopter sign-ups for Candy Shop — the two-sided AI skills marketplace.
>
> **Core Value Proposition:** An open-source marketplace where AI developers publish reusable skills ("Candy") and users post what they need ("Cravings") — matchmaking supply and demand for the AI agent era.
>
> **Live:** https://candy-shop-three.vercel.app
> **GitHub:** https://github.com/democra-ai/candy-shop

---

## Marketing Principles Applied

<!-- 本文案遵循以下专业营销原则 -->

| Principle | Application |
|-----------|-------------|
| **AIDA Model** (Attention → Interest → Desire → Action) | Every post follows this funnel structure |
| **Social Proof** | Lead with data: 88,360 skills, 11,622 repos, 12.6M installs |
| **Scarcity & Urgency** | "Early contributor" framing, "ground floor" language |
| **Value-First Content** | Give actionable insight before asking for anything |
| **Community-Native Tone** | Each post matches the subreddit's culture and rules |
| **Open Source Credibility** | MIT license, no paywall — removes skepticism |

---

## Campaign #1 — r/ChatGPT (6.8M members)

<!-- 方案一：r/ChatGPT — 面向最大的 AI 用户社区 -->
<!-- 策略：用"痛点共鸣"开头，展示解决方案，强调免费开源 -->

**Subreddit Profile:** Mainstream AI users, many non-technical. High engagement on "tool discovery" and "workflow hack" posts.

**Posting Strategy:** Frame as a community resource, not self-promotion. Lead with the problem everyone has experienced.

---

### Title (English)

> I got mass-organizing 88,000+ AI skills into a free, searchable marketplace — here's what I learned

### Title (Chinese — 中文注释)

> 我把 88,000 多个 AI 技能整理成了一个免费的、可搜索的市场——以下是我学到的东西

### Body

---

**We all have the same problem:** you know AI can do something, but finding the *right* prompt/skill/workflow for it takes longer than just doing it manually.

<!-- 我们都有同样的问题：你知道 AI 能做某件事，但找到*正确的*提示词/技能/工作流所花的时间比手动完成还长。 -->

I spent the past few months building **Candy Shop** — a completely free, open-source marketplace that indexes **88,360 AI skills** across 11,622 repositories.

<!-- 我花了几个月时间构建了 Candy Shop —— 一个完全免费的开源市场，索引了 11,622 个仓库中的 88,360 个 AI 技能。 -->

Think of it like an App Store, but for AI capabilities:

<!-- 你可以把它想象成一个 AI 能力的 App Store： -->

- **Browse by category** — Development, Design, Marketing, Writing, Research, and more
- **Run skills directly in your browser** — zero setup, no API keys needed to try
- **Post what you need** — can't find the right skill? Post a "Craving" and let the community build it

<!-- - 按类别浏览 —— 开发、设计、营销、写作、研究等等 -->
<!-- - 直接在浏览器中运行技能 —— 零配置，无需 API 密钥即可试用 -->
<!-- - 发布你的需求 —— 找不到合适的技能？发布一个"渴求"，让社区来构建它 -->

The two-sided marketplace model means:
- **If you build AI tools** → publish them and get discovered
- **If you need AI tools** → search 88K+ skills or post a request with a bounty

<!-- 双边市场模式意味着： -->
<!-- - 如果你构建 AI 工具 → 发布它们并被发现 -->
<!-- - 如果你需要 AI 工具 → 搜索 88K+ 技能或发布带赏金的请求 -->

It's 100% open source (MIT license), supports English and Chinese, and runs on web, desktop (macOS), and even HuggingFace Spaces.

<!-- 它是 100% 开源的（MIT 许可证），支持英文和中文，可在网页、桌面（macOS）甚至 HuggingFace Spaces 上运行。 -->

**Try it:** https://candy-shop-three.vercel.app
**Star it:** https://github.com/democra-ai/candy-shop

Would love feedback from this community — what categories or skills would you want to see first?

<!-- 希望得到这个社区的反馈——你最想看到哪些类别或技能？ -->

---

## Campaign #2 — r/LocalLLaMA (530K members)

<!-- 方案二：r/LocalLLaMA — 面向技术硬核的 AI 开发者 -->
<!-- 策略：强调技术架构、开源精神、社区贡献机会 -->

**Subreddit Profile:** Highly technical AI enthusiasts. Value open-source, self-hosting, privacy. Skeptical of hype. Respect clean architecture.

**Posting Strategy:** Lead with technical substance. Emphasize self-hostable, MIT license, and the SKILL.md standard. Avoid marketing language.

---

### Title (English)

> Open-source AI skills marketplace: 88K skills indexed, browser execution, self-hostable (React + Tauri + Supabase)

### Title (Chinese — 中文注释)

> 开源 AI 技能市场：索引 88K 技能，浏览器内执行，可自部署（React + Tauri + Supabase）

### Body

---

Hey r/LocalLLaMA — sharing a project I've been working on that might be useful for this community.

<!-- 大家好 r/LocalLLaMA —— 分享一个我一直在开发的项目，可能对这个社区有用。 -->

**Candy Shop** is a two-sided marketplace for AI agent skills. The idea is simple: AI skills should be discoverable, shareable, and runnable — like packages, but for prompts and agent behaviors.

<!-- Candy Shop 是一个 AI 代理技能的双边市场。想法很简单：AI 技能应该是可发现的、可分享的、可运行的——就像软件包，但针对提示词和代理行为。 -->

**What's in it:**

- **88,360 skills** indexed from 11,622 repos (12.6M total installs tracked)
- **In-browser execution** via OpenCode SDK — run any skill without leaving the page
- **SKILL.md standard** — each skill is a structured markdown file (system prompt + params + metadata)
- **Two-sided matching** — skill providers publish, skill seekers post bounties ("Cravings")
- **Self-hostable** — Docker image, runs on HuggingFace Spaces, or deploy your own instance

<!-- - 从 11,622 个仓库索引了 88,360 个技能（追踪总安装量 1260 万） -->
<!-- - 通过 OpenCode SDK 的浏览器内执行——无需离开页面即可运行任何技能 -->
<!-- - SKILL.md 标准——每个技能是一个结构化的 markdown 文件 -->
<!-- - 双边匹配——技能提供者发布，技能需求者发布赏金 -->
<!-- - 可自部署——Docker 镜像，可在 HuggingFace Spaces 上运行 -->

**Tech stack:**
- React 19 + TypeScript + Vite 7 + Tailwind
- Tauri v2 for native macOS desktop app
- Supabase for auth
- Anthropic SDK + OpenCode SDK for skill execution

<!-- 技术栈：React 19 + TypeScript + Vite 7 + Tailwind，Tauri v2 桌面应用，Supabase 认证 -->

**Why I built this:** The AI agent ecosystem is producing thousands of reusable skills/prompts, but there's no npm/PyPI equivalent for discovering and running them. This is an attempt at that layer.

<!-- 为什么我构建了这个：AI 代理生态系统正在产生数千个可重用的技能/提示词，但没有类似 npm/PyPI 的东西来发现和运行它们。 -->

MIT licensed, contributions welcome. Particularly interested in:
- Integrating local model backends (ollama, llama.cpp)
- Expanding the skill registry
- Feedback on the SKILL.md format

<!-- MIT 许可证，欢迎贡献。特别感兴趣：集成本地模型后端、扩展技能注册表、SKILL.md 格式反馈 -->

GitHub: https://github.com/democra-ai/candy-shop
Live: https://candy-shop-three.vercel.app

---

## Campaign #3 — r/SideProject (210K members)

<!-- 方案三：r/SideProject — 面向独立开发者和创业者 -->
<!-- 策略：讲建设故事（build-in-public），展示里程碑，引发共鸣 -->

**Subreddit Profile:** Indie hackers, solo devs, founders. Love build-in-public stories, progress milestones, and honest reflections. Upvote authenticity.

**Posting Strategy:** Personal narrative + milestone numbers + honest ask for feedback. Show the journey, not just the product.

---

### Title (English)

> I built a two-sided marketplace for AI skills — 88K skills indexed, runs in the browser, and it's completely free

### Title (Chinese — 中文注释)

> 我构建了一个 AI 技能双边市场——索引了 88K 技能，浏览器内运行，完全免费

### Body

---

Hey everyone! Wanted to share my side project and get some honest feedback.

<!-- 大家好！想分享我的副项目并获得一些真实反馈。 -->

**The problem:** AI can do amazing things, but the ecosystem is fragmented. Skills, prompts, and agent configs are scattered across thousands of GitHub repos with no central way to discover, compare, or run them.

<!-- 问题：AI 能做很多了不起的事情，但生态系统是碎片化的。技能、提示词和代理配置散布在数千个 GitHub 仓库中，没有集中的方式来发现、比较或运行它们。 -->

**The solution: Candy Shop** — a two-sided marketplace where:
1. **Candy Makers** (developers) publish AI skills
2. **Sweet Tooths** (users) discover and run them, or post "Cravings" (requests with bounties)

<!-- 解决方案：Candy Shop —— 一个双边市场 -->
<!-- 1. Candy Makers（开发者）发布 AI 技能 -->
<!-- 2. Sweet Tooths（用户）发现和运行它们，或发布带赏金的需求 -->

**Where it's at today:**
- 📊 88,360 skills indexed across 11,622 repositories
- 🖥️ Run any skill directly in the browser (no setup)
- 🍫 12 open "Cravings" with bounties from $50-$500
- 🌐 English + Chinese, 6 color themes, dark/light mode
- 💻 Web + macOS desktop app (Tauri)
- 📦 100% open source, MIT license

<!-- 当前状态：88,360 个技能索引，浏览器直接运行，12 个带赏金的开放需求，双语支持，桌面应用，完全开源 -->

**Tech choices & why:**
- React + Vite for speed (< 2s cold start)
- Tailwind for rapid UI iteration
- Tauri instead of Electron (10x smaller binary)
- Supabase for auth without building it from scratch

<!-- 技术选择：React + Vite（速度快），Tailwind（快速迭代），Tauri 替代 Electron（体积小 10 倍），Supabase 认证 -->

**Biggest challenge:** Building the skill registry. Crawling 11K+ repos, normalizing metadata, and keeping it updated was way harder than the UI work.

<!-- 最大挑战：构建技能注册表。爬取 11K+ 仓库、标准化元数据并保持更新比 UI 工作难得多。 -->

**What's next:**
- User profiles & reputation system
- Skill reviews and ratings
- Revenue sharing for skill creators
- Windows & Linux desktop builds

<!-- 下一步：用户档案和声誉系统、技能评价和评分、创作者收入分成、Windows 和 Linux 桌面构建 -->

Would love your brutally honest feedback — is the marketplace model the right approach for AI skills? What would make you actually use something like this?

<!-- 希望得到你们残酷诚实的反馈——市场模式是 AI 技能的正确方法吗？什么会让你真正使用这样的东西？ -->

🔗 https://candy-shop-three.vercel.app
⭐ https://github.com/democra-ai/candy-shop

---

## Campaign #4 — r/artificial (920K members)

<!-- 方案四：r/artificial — 面向 AI 行业观察者和从业者 -->
<!-- 策略：以行业趋势切入（thought leadership），将产品定位为趋势的基础设施层 -->

**Subreddit Profile:** AI industry watchers, researchers, professionals. Interested in trends, analysis, and implications. Higher bar for content quality.

**Posting Strategy:** Thought leadership angle — frame around the "AI skills economy" trend, position Candy Shop as infrastructure for it. Educational value first.

---

### Title (English)

> The AI agent ecosystem needs its own "package manager" — here's my open-source attempt at building one

### Title (Chinese — 中文注释)

> AI 代理生态系统需要自己的"包管理器"——这是我构建的开源尝试

### Body

---

There's a pattern emerging in the AI space that I think deserves more attention: **the fragmentation of AI skills.**

<!-- AI 领域正在出现一个值得更多关注的模式：AI 技能的碎片化。 -->

Every week, hundreds of new AI agent skills, prompts, and workflows are published across GitHub. They solve real problems — code review, content generation, data analysis, design systems — but discovering the right one is nearly impossible. There's no central registry, no standardized format, no way to run before you install.

<!-- 每周，数百个新的 AI 代理技能、提示词和工作流在 GitHub 上发布。它们解决实际问题，但发现正确的那个几乎是不可能的。没有中央注册表，没有标准化格式，没有安装前试运行的方式。 -->

**This is the same problem the software world solved decades ago with package managers.** npm for JavaScript. PyPI for Python. Homebrew for macOS. AI skills need the same infrastructure layer.

<!-- 这和软件世界几十年前用包管理器解决的是同一个问题。npm 之于 JavaScript，PyPI 之于 Python。AI 技能需要同样的基础设施层。 -->

I've been building **Candy Shop**, an open-source marketplace that attempts to solve this:

<!-- 我一直在构建 Candy Shop，一个试图解决这个问题的开源市场： -->

**Discovery:**
- 88,360 skills indexed from 11,622 repositories
- Searchable by category, tags, and natural language
- 12.6M total installs tracked to surface what's actually being used

<!-- 发现：88,360 个技能，11,622 个仓库，可按类别、标签和自然语言搜索 -->

**Standardization:**
- SKILL.md format — a structured markdown spec for defining AI skills (system prompt, parameters, metadata)
- Makes skills portable across different AI backends

<!-- 标准化：SKILL.md 格式——定义 AI 技能的结构化 markdown 规范 -->

**Execution:**
- Run any skill directly in the browser via integrated execution environment
- No API keys, no setup — try before you commit

<!-- 执行：通过集成的执行环境在浏览器中直接运行任何技能 -->

**Demand signaling:**
- Users post "Cravings" — specific requests for skills that don't exist yet, with bounties
- Creates a signal for builders on what to build next

<!-- 需求信号：用户发布"渴求"——对尚不存在的技能的具体请求，附带赏金 -->

The interesting thing about the two-sided model is that it creates a feedback loop: demand informs supply, supply satisfies demand, and the registry grows organically.

<!-- 双边模型有趣的地方在于它创造了一个反馈循环：需求引导供给，供给满足需求，注册表有机增长。 -->

It's MIT licensed, fully open source, and I'm looking for collaborators who are thinking about this same problem space.

<!-- MIT 许可证，完全开源，我在寻找思考同一问题空间的合作者。 -->

Curious what this community thinks — is a centralized registry the right model, or should AI skill discovery stay decentralized?

<!-- 好奇这个社区的想法——中心化注册表是正确的模式，还是 AI 技能发现应该保持去中心化？ -->

Project: https://github.com/democra-ai/candy-shop
Live demo: https://candy-shop-three.vercel.app

---

## Campaign #5 — r/webdev (2.3M members)

<!-- 方案五：r/webdev — 面向前端和全栈开发者 -->
<!-- 策略：聚焦技术实现和架构决策，用"Show HN"风格展示 -->

**Subreddit Profile:** Web developers across all levels. Appreciate clean code, good DX, and modern stack choices. Love "Show r/webdev" posts with technical depth.

**Posting Strategy:** Technical showcase — focus on architecture decisions, stack choices, and learnings. Developers respect transparency about tradeoffs.

---

### Title (English)

> [Showoff Saturday] Built a full-stack AI marketplace with React 19 + Tauri v2 + Supabase — lessons from shipping to web, desktop, and Docker

### Title (Chinese — 中文注释)

> [Showoff Saturday] 用 React 19 + Tauri v2 + Supabase 构建了全栈 AI 市场——发布到网页、桌面和 Docker 的经验

### Body

---

Built **Candy Shop**, an AI skills marketplace, and wanted to share some technical decisions and lessons learned — especially around multi-platform deployment.

<!-- 构建了 Candy Shop，一个 AI 技能市场，想分享一些技术决策和经验教训——特别是关于多平台部署。 -->

**What it does:** Two-sided marketplace where developers publish AI skills and users discover/run them in the browser. Think of it as an "npm for AI prompts."

<!-- 它做什么：双边市场，开发者发布 AI 技能，用户在浏览器中发现/运行它们。可以理解为"AI 提示词的 npm"。 -->

**The stack:**

```
Frontend:  React 19 + TypeScript + Vite 7 + Tailwind CSS
Desktop:   Tauri v2 (Rust backend, ~15MB vs Electron's 150MB+)
Auth:      Supabase (email + OAuth)
AI Layer:  Anthropic SDK + OpenCode SDK
Deploy:    Vercel (web) + HuggingFace Spaces (Docker) + DMG (macOS)
```

<!-- 技术栈：React 19 + TypeScript + Vite 7 + Tailwind CSS，Tauri v2 桌面应用，Supabase 认证 -->

**Interesting architecture decisions:**

<!-- 有趣的架构决策： -->

**1. Tauri v2 over Electron**
The same React codebase powers both the website and the desktop app. Tauri v2 made this surprisingly smooth — the macOS .dmg is ~15MB compared to what would have been 150MB+ with Electron. The Rust backend handles native APIs (file system access for local skill execution) while the webview runs the same React app.

<!-- Tauri v2 替代 Electron：同一个 React 代码库同时驱动网站和桌面应用。macOS .dmg 约 15MB，对比 Electron 的 150MB+。 -->

**2. Lazy-loading a 4.4MB skill registry**
The full registry (88K skills) is a 4.4MB JSON file. Instead of bundling it, it's lazy-loaded on demand with a loading skeleton. First paint shows the curated 240 skills instantly, then the full registry streams in when users actually search.

<!-- 延迟加载 4.4MB 技能注册表：完整注册表是一个 4.4MB 的 JSON 文件。首次渲染显示精选的 240 个技能，完整注册表在用户搜索时流式加载。 -->

**3. In-browser AI execution**
Users can run any skill directly in the browser using an embedded execution environment powered by OpenCode SDK. It handles streaming responses, tool use, and file attachments — all client-side.

<!-- 浏览器内 AI 执行：用户可以使用 OpenCode SDK 驱动的嵌入式执行环境在浏览器中直接运行任何技能。 -->

**4. Theme system**
6 color themes + dark/light mode, all via Tailwind CSS variables. Theme state persists in localStorage and syncs across tabs. Each theme defines a full color ramp that cascades through every component.

<!-- 主题系统：6 个颜色主题 + 深/浅模式，全部通过 Tailwind CSS 变量实现。 -->

**5. i18n without a framework**
Custom lightweight i18n using React Context instead of i18next or react-intl. Supports English and Chinese with ~200 translation keys. The context provider wraps the entire app and components just call `t('key')`.

<!-- 无框架 i18n：使用 React Context 的自定义轻量级 i18n，而非 i18next 或 react-intl。 -->

**Lessons learned:**
- Tauri v2 is production-ready but documentation is still catching up
- Supabase's auth is great until you need custom flows — then you're writing raw SQL
- Vite 7 HMR with 200+ components stays under 100ms — React 19 compiler helps
- Deploying the same app to Vercel AND HuggingFace Spaces (Docker) requires careful environment variable handling

<!-- 经验教训：Tauri v2 生产就绪但文档还在追赶；Supabase 认证很好直到需要自定义流程；Vite 7 HMR 在 200+ 组件下保持 100ms 以内 -->

**Numbers:**
- 88,360 AI skills indexed
- 11,622 repositories tracked
- 6 themes × 2 modes = 12 visual variations
- ~15MB macOS binary (Tauri) vs ~150MB (Electron equivalent)

<!-- 数据：88,360 个索引技能，11,622 个追踪仓库，~15MB macOS 二进制文件 -->

100% open source, MIT license. Happy to answer questions about any of these architectural decisions.

<!-- 100% 开源，MIT 许可证。很乐意回答关于这些架构决策的任何问题。 -->

Live: https://candy-shop-three.vercel.app
Source: https://github.com/democra-ai/candy-shop

---

## Campaign #6 — r/ClaudeAI (150K+ members)

<!-- 方案六：r/ClaudeAI — 面向 Claude 和 Anthropic 生态用户 -->
<!-- 策略：直接关联 Claude 生态，强调 SKILL.md 和 Claude Code 集成 -->

**Subreddit Profile:** Claude power users, prompt engineers, developers building with Anthropic's API. Highly engaged, share tools and workflows.

**Posting Strategy:** Position as a tool that enhances their existing Claude workflow. Emphasize Claude Code integration and the skills ecosystem.

---

### Title (English)

> I indexed 88,000+ Claude Code skills into a searchable marketplace — find, run, and share skills without leaving your browser

### Title (Chinese — 中文注释)

> 我将 88,000 多个 Claude Code 技能索引到一个可搜索的市场中——在浏览器中查找、运行和分享技能

### Body

---

If you use Claude Code, you've probably seen the growing SKILL.md ecosystem — thousands of reusable skills that give Claude specialized capabilities for code review, writing, data analysis, and more.

<!-- 如果你使用 Claude Code，你可能已经看到了不断增长的 SKILL.md 生态系统——数千个可重用的技能，赋予 Claude 代码审查、写作、数据分析等专门能力。 -->

The problem? They're scattered across thousands of GitHub repos with no easy way to search or compare them.

<!-- 问题是什么？它们散布在数千个 GitHub 仓库中，没有简单的方式来搜索或比较它们。 -->

I built **Candy Shop** to solve this. It's a free, open-source marketplace that:

<!-- 我构建了 Candy Shop 来解决这个问题。它是一个免费的开源市场： -->

**For finding skills:**
- 🔍 Search across **88,360 indexed skills** from 11,622 repos
- 📂 Filter by category: Development, Design, Marketing, Writing, Research, etc.
- 📊 Sort by popularity (12.6M total installs tracked)
- ⚡ Run any skill **directly in the browser** — try before you install

<!-- 查找技能：搜索 88,360 个索引技能，按类别过滤，按热度排序，浏览器内直接运行 -->

**For sharing skills:**
- 🛠️ Visual skill creator — define system prompts, parameters, and metadata
- 📄 Auto-generates SKILL.md files in the standard format
- 🌐 Publish to the marketplace for community discovery

<!-- 分享技能：可视化技能创建器，自动生成 SKILL.md 文件，发布到市场 -->

**For requesting skills:**
- 😋 Post a "Craving" — describe what you need, set a bounty
- 🔗 Smart matching connects your request to existing skills
- 📋 12 open cravings right now, bounties from $50-$500

<!-- 请求技能：发布"渴求"，描述你的需求，设置赏金，智能匹配连接到现有技能 -->

Built with the Anthropic SDK, so skills execute natively with Claude. The execution environment supports streaming, tool use, and file attachments.

<!-- 使用 Anthropic SDK 构建，因此技能可以原生地与 Claude 一起执行。 -->

It runs on web, macOS desktop (via Tauri), and Docker. MIT license, fully open source.

<!-- 可在网页、macOS 桌面（通过 Tauri）和 Docker 上运行。MIT 许可证，完全开源。 -->

**What skills are you using or wish existed?** I'm building out the registry and want to make sure the most useful skills are easy to find.

<!-- 你正在使用或希望存在哪些技能？我正在完善注册表，想确保最有用的技能容易被找到。 -->

Try it: https://candy-shop-three.vercel.app
GitHub: https://github.com/democra-ai/candy-shop

---

## Campaign #7 — r/MachineLearning (2.9M members)

<!-- 方案七：r/MachineLearning — 面向 ML 研究者和工程师 -->
<!-- 策略：以研究和工程视角切入，聚焦可复现性和工具标准化问题 -->

**Subreddit Profile:** ML researchers, engineers, PhD students. Very high bar for content. Respect novel ideas, open-source contributions, and rigorous thinking. Use [Project] tag.

**Posting Strategy:** Frame as an infrastructure contribution to the ML tooling ecosystem. Emphasize the standardization problem and the demand-signaling mechanism.

---

### Title (English)

> [P] Candy Shop: An open-source two-sided marketplace for AI agent skills (88K skills indexed, in-browser execution, demand-side bounties)

### Title (Chinese — 中文注释)

> [P] Candy Shop：AI 代理技能的开源双边市场（88K 技能索引，浏览器内执行，需求端赏金）

### Body

---

**TL;DR:** Open-source marketplace connecting AI skill creators with skill seekers. 88,360 skills indexed from 11,622 repos, in-browser execution, and a demand-side bounty system. MIT license.

<!-- 简述：连接 AI 技能创作者和技能寻求者的开源市场。88,360 个技能，浏览器内执行，需求端赏金系统。 -->

**Motivation:**

The proliferation of LLM-based tools has created a discoverability problem that mirrors early software package management. Thousands of useful AI skills (specialized prompts, agent configurations, and workflows) exist across GitHub, but there's no standardized way to:

1. **Discover** what's available across repositories
2. **Evaluate** quality before committing to integration
3. **Signal demand** for capabilities that don't yet exist

<!-- 动机：基于 LLM 的工具激增造成了一个可发现性问题。数千个有用的 AI 技能存在于 GitHub 上，但没有标准化的方式来发现、评估和发出需求信号。 -->

**Approach:**

Candy Shop implements a two-sided marketplace model:

**Supply side (Candy):**
- Automated indexing of 88,360 skills from 11,622 repositories
- Standardized SKILL.md format (system prompt + typed parameters + metadata)
- In-browser execution environment for try-before-install evaluation
- Installation tracking (12.6M cumulative installs across the registry)

<!-- 供给侧：自动索引 88,360 个技能，标准化 SKILL.md 格式，浏览器内执行环境，安装追踪 -->

**Demand side (Cravings):**
- Users post structured requests for skills that don't exist
- Requests include category tags, urgency levels, and bounty amounts
- Matching algorithm connects requests to existing skills when overlap is detected

<!-- 需求侧：用户发布结构化请求，包含类别标签、紧急程度和赏金金额，匹配算法检测重叠 -->

**Implementation:** React 19 + TypeScript, Vite, Tailwind CSS. Desktop via Tauri v2. Auth via Supabase. Execution via Anthropic SDK + OpenCode SDK. Deployed on Vercel + HuggingFace Spaces.

<!-- 实现：React 19 + TypeScript，Vite，Tailwind CSS。桌面通过 Tauri v2。认证通过 Supabase。 -->

**What I'd like feedback on:**
- Is the SKILL.md format expressive enough for complex agent behaviors?
- Should the registry be centralized or federated?
- Interest in integrating local model backends (ollama, vLLM) for execution?

<!-- 希望获得反馈：SKILL.md 格式是否足够表达复杂的代理行为？注册表应该集中式还是联邦式？对集成本地模型后端有兴趣吗？ -->

GitHub: https://github.com/democra-ai/candy-shop
Demo: https://candy-shop-three.vercel.app

---

## Posting Schedule & Best Practices

<!-- 发布时间表和最佳实践 -->

| Subreddit | Best Posting Time (UTC) | Day | Notes |
|-----------|------------------------|-----|-------|
| r/ChatGPT | 14:00-16:00 | Tue/Wed | Peak engagement mid-week |
| r/LocalLLaMA | 15:00-17:00 | Any day | Technical crowd, less time-sensitive |
| r/SideProject | 14:00-16:00 | Sat | "Showoff Saturday" tradition |
| r/artificial | 13:00-15:00 | Mon/Tue | News cycle start |
| r/webdev | 14:00-16:00 | Sat | "Showoff Saturday" required for promos |
| r/ClaudeAI | 15:00-17:00 | Any day | Smaller community, less competitive |
| r/MachineLearning | 14:00-16:00 | Mon-Thu | Use [P] tag for projects |

<!-- 发布时间：大多数在 UTC 14:00-16:00，对应北美早间高峰 -->

### Engagement Rules

<!-- 参与规则 -->

1. **Reply to every comment** within the first 2 hours — Reddit's algorithm weights early engagement heavily
2. **Never be defensive** — thank critical feedback, acknowledge limitations
3. **Upvote good questions** from others in the thread
4. **Cross-link** between posts after a few days (e.g., "I also shared this on r/webdev where the discussion focused on...")
5. **Follow each subreddit's self-promotion rules** — most limit to 10% self-promotional content
6. **Use a consistent account** with genuine community participation history

<!-- 1. 前 2 小时内回复每条评论 2. 不要防御性回复 3. 给好问题点赞 4. 几天后交叉链接 5. 遵循各社区的自我推广规则 6. 使用有真实参与历史的一致账户 -->

### Key Metrics to Track

<!-- 跟踪的关键指标 -->

| Metric | Target (per post) | Why it matters |
|--------|-------------------|----------------|
| Upvotes | 100+ | Visibility in subreddit |
| Comments | 20+ | Algorithm boost + community signal |
| GitHub stars | 50+ per campaign | Long-term credibility |
| Site visits | 500+ | Conversion funnel top |
| Skill executions | 50+ | Product engagement |

---

## Appendix: Title A/B Testing Variants

<!-- 附录：标题 A/B 测试变体 -->

For each subreddit, consider testing these title variations:

<!-- 对于每个社区，考虑测试这些标题变体： -->

**Pattern A — Number-led (data hook):**
> "88,000+ AI skills in one searchable place — free and open source"
> "88,000+ AI 技能集中在一个可搜索的地方——免费开源"

**Pattern B — Question-led (curiosity hook):**
> "Why isn't there an App Store for AI skills yet?"
> "为什么还没有一个 AI 技能的 App Store？"

**Pattern C — Story-led (narrative hook):**
> "I spent 3 months indexing every AI skill on GitHub — here's what I found"
> "我花了 3 个月索引 GitHub 上的每一个 AI 技能——以下是我的发现"

**Pattern D — Contrarian (debate hook):**
> "The AI agent ecosystem has a discovery problem nobody is talking about"
> "AI 代理生态系统有一个没人在谈论的发现问题"

**Pattern E — Utility-led (value hook):**
> "Free tool: search and run 88K+ AI skills directly in your browser"
> "免费工具：在浏览器中直接搜索和运行 88K+ AI 技能"

---

*Generated for Candy Shop by Claude — professional marketing strategy for Reddit community launch.*
