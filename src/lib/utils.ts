import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const ASSETS_BASE_URL = "https://agsdemo.in/smapl/web_images/";

export function getAssetUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  let cleanPath = path;
  if (cleanPath.startsWith("/docs/")) {
    cleanPath = cleanPath.slice(6);
  } else if (cleanPath.startsWith("docs/")) {
    cleanPath = cleanPath.slice(5);
  } else {
    if (cleanPath.startsWith("/images/")) {
      cleanPath = cleanPath.slice(8);
    } else if (cleanPath.startsWith("images/")) {
      cleanPath = cleanPath.slice(7);
    } else if (cleanPath.startsWith("/")) {
      cleanPath = cleanPath.slice(1);
    }
    const lastSlash = cleanPath.lastIndexOf("/");
    if (lastSlash !== -1) {
      cleanPath = cleanPath.slice(lastSlash + 1);
    }
  }
  return `${ASSETS_BASE_URL}${cleanPath}`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
