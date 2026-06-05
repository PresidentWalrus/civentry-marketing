import Image from "next/image";
import logoHorizontal from "../../public/logo-horizontal.png";

/**
 * Civentry horizontal wordmark (navy). The source is 2508×627 (4:1);
 * we render at a fixed height and let width follow the ratio.
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
      width={height * 4}
      priority={priority}
      className={className}
      style={{ height, width: "auto" }}
    />
  );
}
