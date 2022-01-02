import { mainPlugins } from "./rollup.common.js";

export default {
  input: "src/clio/compile.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "clioCompiler",
    file: "public/build/compile.js",
  },
  plugins: mainPlugins(),
  watch: {
    clearScreen: false,
  },
};
