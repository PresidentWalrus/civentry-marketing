import Image from "next/image";
import logoHorizontal from "../../public/logo-horizontal.png";

// Derive width from the imported file's intrinsic ratio so the wordmark
// renders undistorted whatever its dimensions (the brand assets get swapped).
const RATIO = logoHorizontal.width / logoHorizontal.height;

/**
 * Civentry horizontal wordmark (navy). Rendered at a fixed height with the
 * width following the source's natural aspect ratio.
 */
export function Logo({
  height = 30,
  priority = false,
  className = "",
}: {
  height?: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={logoHorizontal}
      alt="Civentry"
      height={height}
      width={Math.round(height * RATIO)}
      priority={priority}
      className={className}
      // Pin height; width follows the ratio (and stays auto for Tailwind's
      // preflight `img { height: auto }`, avoiding a next/image warning).
      style={{ height, width: "auto" }}
    />
  );
}
