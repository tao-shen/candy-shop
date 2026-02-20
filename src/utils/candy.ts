export const CANDY_EMOJIS = ['🍭', '🍬', '🧁', '🍫', '🍰'];

export function getCandyEmoji(id: string): string {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  return CANDY_EMOJIS[Math.abs(hash) % CANDY_EMOJIS.length];
}
