/**
 * Utility to resolve asset paths with Vite's BASE_URL.
 * Useful for resolving absolute paths (e.g., "/image.png") placed in the public directory
 * when the app is deployed in a subdirectory like GitHub Pages (e.g., /NorthStar/).
 */
export const resolveAsset = (path) => {
  if (!path) return '';
  // Return external URLs as is
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
};
