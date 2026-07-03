import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const ASSETS_BASE_URL = "https://agsdemo.in/smapl/web_images/";

export function getAssetUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${ASSETS_BASE_URL}${cleanPath}`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
