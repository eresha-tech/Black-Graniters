import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Image utility function to get AWS CDN URLs
export function getImageUrl(imagePath: string): string {
  const baseUrl = import.meta.env.VITE_ASSETS_BASE_URL || 'https://assets.airbharath.in/graniters'
  
  // Remove leading slash and /src/assets prefix if present
  const cleanPath = imagePath
    .replace(/^\/src\/assets\/?/, '')
    .replace(/^\//, '')
  
  return `${baseUrl}/${cleanPath}`
}
