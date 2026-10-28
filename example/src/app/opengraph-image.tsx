import { logotypeLines } from "@/components/SvgHeader/logotype";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Bueno Type";
export const size = { width: 2400, height: 1260 };
export const contentType = "image/png";

// Matches --color-primary-hex in globals.css; Satori can't read CSS variables.
const ACCENT = "#00ff0a";
const MARGIN = 40;
const CAP_HEIGHT_PX = 490;
// Keeps "Bueno" clear of the top-right labels.
const LINE_1_MAX_RIGHT_PX = 1760;
// Leaves room for the bottom-left labels under the second line.
const LINE_2_BOTTOM_PX = 1160;

// Bounds of each logotype line in path units.
const CAP_HEIGHT = 33.52;
const LINE_1 = { left: 0.5, capTop: 0.12, right: 133.91 };
const LINE_2 = { left: 0.99, right: 125.58, bottom: 78.53 };

function wordmarkSvg() {
  const { width, height } = size;
  const scale = Math.min(
    CAP_HEIGHT_PX / CAP_HEIGHT,
    (LINE_1_MAX_RIGHT_PX - MARGIN) / (LINE_1.right - LINE_1.left),
    (width - MARGIN * 2) / (LINE_2.right - LINE_2.left),
  );
  // "Bueno" sits top left, the second line bottom right.
  const placements = [
    {
      d: logotypeLines[0],
      x: MARGIN - LINE_1.left * scale,
      y: MARGIN - LINE_1.capTop * scale,
    },
    {
      d: logotypeLines[1],
      x: width - MARGIN - LINE_2.right * scale,
      y: LINE_2_BOTTOM_PX - LINE_2.bottom * scale,
    },
  ];

  const lines = placements.map(({ d, x, y }, i) => {
    // One gradient across the whole image, mapped into this line's local space.
    const toLocal = (px: number, py: number) => [
      (px - x) / scale,
      (py - y) / scale,
    ];
    const [x1, y1] = toLocal(0, 0);
    const [x2, y2] = toLocal(width, height);
    return `
      <linearGradient id="fade${i}" gradientUnits="userSpaceOnUse" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">
        <stop offset="0" stop-color="${ACCENT}" />
        <stop offset="0.8" stop-color="${ACCENT}" stop-opacity="0" />
      </linearGradient>
      <g transform="translate(${x} ${y}) scale(${scale})">
        <path d="${d}" fill="url(#fade${i})" fill-rule="evenodd" stroke="${ACCENT}" stroke-opacity="0.6" stroke-width="${2 / scale}" stroke-dasharray="${6 / scale} ${4 / scale}" />
      </g>`;
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${lines.join("")}</svg>`;
}

export default async function OpengraphImage() {
  const font = await readFile(
    join(process.cwd(), "src/fonts/PPGoshaSans-Regular.subset.woff"),
  );
  const wordmark = `data:image/svg+xml;base64,${Buffer.from(wordmarkSvg()).toString("base64")}`;

  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full bg-black">
        {/* Satori renders <img>; next/image isn't available in an image route. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={wordmark}
          width={size.width}
          height={size.height}
          alt=""
          tw="absolute inset-0"
        />
        <div
          tw={`absolute top-[${MARGIN}px] right-[${MARGIN}px] flex flex-col items-end text-[44px] leading-[1.3] tracking-[0.08em] text-[${ACCENT}]`}
        >
          <span>JOHN.DESIGN</span>
          <span>© 2024 — MIT LICENSED</span>
        </div>
        <div
          tw={`absolute bottom-[${MARGIN}px] left-[${MARGIN}px] flex text-[44px] tracking-[0.08em] text-[${ACCENT}]`}
        >
          <span tw="mr-[56px]">@BUENO-DEV/TYPE</span>
          <span tw="mr-[56px]">—JSR</span>
          <span tw="mr-[56px]">—TSX</span>
          <span>—TAILWIND</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "PP Gosha Sans", data: font, weight: 400 }],
    },
  );
}
