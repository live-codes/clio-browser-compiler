import { mainPlugins } from "./rollup.common.js";

export default {
  input: "src/clio/exec.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "clio",
    file: "public/build/exec.js",
  },
  plugins: mainPlugins(),
  watch: {
    clearScreen: false,
  },
};
