import clsx from "clsx";
import { IframeWrapper } from "../IframeWrapper";
import { PanelCode } from "../PanelCode";
import { SliceWrapper } from "../SliceWrapper";
import { slicePanelContent } from "./SliceTypeScale.content";

export function SliceTypeScale() {
  return (
    <SliceWrapper title="FLUID TYPOGRAPHY IS BUEN">
      <IframeWrapper
        src="/scale"
        className={clsx(
          "relative w-full col-span-full min-h-[50vw] z-10",
          "max-w-full  md:w-[66%]",
          "after:content-[''] after:absolute after:w-[10%] after:bg-gradient-to-r after:from-black after:to-transparent after:right-[-10%] after:top-0 after:h-full after:z-10 after:pointer-events-none",
        )}
      />
      <PanelCode
        panelContent={slicePanelContent}
        className="md:w-[33%] md:absolute"
      />
    </SliceWrapper>
  );
}
