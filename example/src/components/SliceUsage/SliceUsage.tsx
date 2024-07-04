import { PanelCode } from "../PanelCode";
import { SliceWrapper } from "../SliceWrapper";
import { sliceUsageComponent } from "./SliceUsage.content";

export function SliceUsage() {
  return (
    <SliceWrapper title="USAGE" innerClassName="gap-y-6 py-4">
      <div className="grid grid-cols-subgrid col-span-full">
        <div className="col-span-2 xl:col-span-2 max-w-[20rem]">
          <p>Use the custom classes in your components to style your text.</p>
        </div>
        <div className="xl:col-start-5 md:col-start-4 col-span-4 xl:col-span-3 md:col-span-4 grid grid-cols-subgrid gap-y-8">
          <PanelCode panelContent={sliceUsageComponent} />
        </div>
      </div>
    </SliceWrapper>
  );
}
