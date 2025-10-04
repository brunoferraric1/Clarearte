import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Custom function for button classes that preserves text colors
export function buttonCn(...inputs: ClassValue[]) {
  const classes = clsx(inputs)
  // Don't use twMerge for buttons to preserve custom text colors
  return classes
}
