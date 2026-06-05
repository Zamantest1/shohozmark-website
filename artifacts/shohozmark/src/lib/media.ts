/**
 * Media utility — Cloudinary-ready.
 *
 * Currently returns local/placeholder paths.
 * To enable Cloudinary: set VITE_CLOUDINARY_CLOUD_NAME in your .env
 * and update getMediaUrl to construct Cloudinary delivery URLs.
 *
 * Cloudinary URL format:
 * https://res.cloudinary.com/{cloud_name}/image/upload/{transformations}/{public_id}
 */

interface MediaOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: "auto" | "webp" | "jpg" | "png";
  crop?: "fill" | "fit" | "scale" | "thumb";
}

const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string | undefined;

export function getMediaUrl(path: string, options: MediaOptions = {}): string {
  if (CLOUDINARY_CLOUD_NAME) {
    const transforms: string[] = [];
    if (options.width) transforms.push(`w_${options.width}`);
    if (options.height) transforms.push(`h_${options.height}`);
    if (options.quality) transforms.push(`q_${options.quality}`);
    if (options.format) transforms.push(`f_${options.format}`);
    if (options.crop) transforms.push(`c_${options.crop}`);
    const transformStr = transforms.length > 0 ? transforms.join(",") + "/" : "";
    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformStr}${path}`;
  }
  return path;
}

export function getAvatarPlaceholder(initials: string, bgColor = "#1A1A1A"): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
    <rect width="200" height="200" fill="${bgColor}"/>
    <text x="100" y="115" font-family="Syne,sans-serif" font-size="72" font-weight="800" fill="#00C853" text-anchor="middle">${initials}</text>
  </svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

export function getPortfolioPlaceholder(label: string, color = "#00C853"): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
    <rect width="600" height="400" fill="#1A1A1A"/>
    <rect x="0" y="0" width="600" height="4" fill="${color}"/>
    <text x="300" y="210" font-family="Syne,sans-serif" font-size="20" font-weight="700" fill="${color}" text-anchor="middle">${label}</text>
  </svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}
