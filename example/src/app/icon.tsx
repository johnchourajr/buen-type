import { SvgFavicon } from "@/svg/SvgFavicon";
import { ImageResponse } from "next/og";

// Route segment config (node runtime for static export)
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
