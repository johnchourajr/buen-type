import { SvgFavicon } from "@/svg/SvgFavicon";
import { ImageResponse } from "next/og";

// Route segment config.
// `output: "export"` means this icon is generated once at build time, so the
// route has to be statically rendered. Next 15 makes that explicit and fails
// the build without it. The edge runtime is incompatible with static export
// and is not needed for a build-time image.
export const dynamic = "force-static";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(<SvgFavicon />, {
    ...size,
  });
}
