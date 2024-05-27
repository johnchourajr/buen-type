import React, { type CSSProperties } from "react";
import { DefaultHeadlineTypes, DefaultTextTypes } from "../types";
import { generateStyles } from "../utils/generateStyles";

type BuenTypeProps = {
  type: "headline" | "text";
  variant: DefaultHeadlineTypes | DefaultTextTypes | string;
  children: React.ReactNode;
};

export function BuenType({ type, variant, children }: BuenTypeProps) {
  const styles = generateStyles(type, variant) as CSSProperties;

  return <div style={styles}>{children}</div>;
}
