import { createBuenTypePlugin } from "@muybuen/type";
import { customTexts } from "./src/config/type";

export default createBuenTypePlugin({
  customTexts,
  disableDefaults: false,
  customMinScreenSize: 480,
});
