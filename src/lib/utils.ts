import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// export const ASSETS_BASE_URL = "https://agsdemo.in/smapl/web_images/";
export const ASSETS_BASE_URL = "https://sulitmetals.com/web_images/";

export function getAssetUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  let cleanPath = path;
  if (cleanPath.startsWith("/pdf/") || cleanPath.startsWith("pdf/")) {
    const formatted = cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
    return encodeURI(formatted);
  }
  if (cleanPath.startsWith("/docs/")) {
    cleanPath = cleanPath.slice(6);
  } else if (cleanPath.startsWith("docs/")) {
    cleanPath = cleanPath.slice(5);
  } else {
    let filename = cleanPath;
    if (filename.startsWith("/")) {
      filename = filename.slice(1);
    }
    const lastSlash = filename.lastIndexOf("/");
    if (lastSlash !== -1) {
      filename = filename.slice(lastSlash + 1);
    }
    cleanPath = `images/${filename}`;
  }
  return `${ASSETS_BASE_URL}${cleanPath}`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
