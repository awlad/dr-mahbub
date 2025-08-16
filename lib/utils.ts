// lib/utils.ts
// Utility function for conditional classNames (shadcn UI standard)
export function cn(...inputs: Array<string | undefined | null | false>) {
  return inputs.filter(Boolean).join(' ');
}

