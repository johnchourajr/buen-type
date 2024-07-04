import { PanelProps } from "../PanelCode/PanelCode.types";

export const sliceUsageComponent: PanelProps[] = [
  {
    title: "SomeComponent.tsx",
    content: `
  export const SomeComponent = () => (
    <div>
      <h1 className="headline-display-xl">Hello World</h1>
      <p className="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
    `,
  },
];
