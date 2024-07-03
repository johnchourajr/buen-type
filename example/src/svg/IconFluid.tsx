import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const IconFluid = (props: Props) => (
  <svg
    width={82}
    height={82}
    viewBox="0 0 82 82"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.10892 50.2726L1 81M1 81L31.7275 80.8911M1 81L81 1M81 1L5.63079 1.26716M81 1L80.7329 76.3692"
      stroke="currentColor"
      strokeWidth={0.513288}
      strokeDasharray="4.11 4.11"
    />
  </svg>
);

export { IconFluid };
