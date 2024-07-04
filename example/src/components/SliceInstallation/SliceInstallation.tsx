import { PanelCode } from "../PanelCode";
import { SliceWrapper } from "../SliceWrapper";
import {
  sliceInstallConfig,
  sliceInstallCustom,
  sliceInstallTerminal,
} from "./SliceInstallation.content";

export function SliceInstallation() {
  return (
    <SliceWrapper title="INSTALLATION" innerClassName="gap-y-12 py-4">
      <div className="grid grid-cols-subgrid col-span-full">
        <div className="col-span-2 xl:col-span-2 max-w-[20rem]">
          <p>
            Install the jsr package with your package manager of choice. Then
            import the plugin in your Tailwind CSS configuration file.
          </p>
        </div>
        <div className="xl:col-start-5 md:col-start-4 col-span-4 xl:col-span-3 md:col-span-4 grid grid-cols-subgrid gap-y-8">
          <PanelCode panelContent={sliceInstallTerminal} />
          <PanelCode panelContent={sliceInstallConfig} />
        </div>
      </div>
      <div className="grid grid-cols-subgrid col-span-full">
        <div className="col-span-2 xl:col-span-2 max-w-[20rem]">
          <p>
            Customize the plugin with your own type definitions for{" "}
            <code>customHeadlines</code> and
            <code>customTexts</code> styles. You can also create{" "}
            <code>classAlias</code>es for custom class names.
          </p>
        </div>
        <div className="xl:col-start-5 md:col-start-4 col-span-4 xl:col-span-3 md:col-span-4 grid grid-cols-subgrid gap-y-8">
          <PanelCode panelContent={sliceInstallCustom} />
        </div>
      </div>
    </SliceWrapper>
  );
}
