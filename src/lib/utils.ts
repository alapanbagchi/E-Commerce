import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const tailwindHSLtoHex = (hsl: string) => {
  const [h, s, l] = hsl.split(" ").map((v) => v.replace("%", ""))
  const hex = `#${Number(h).toString(16)}${Number(s).toString(16)}${Number(l).toString(16)}`
  return hex
}