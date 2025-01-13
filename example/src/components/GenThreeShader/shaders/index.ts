import { ShaderVariant } from "./types";
import { wavesShader } from "./wavesShader";

export const genShaders: Record<ShaderVariant, string> = {
  wavesShader,
};

export type { ShaderVariant } from "./types";
