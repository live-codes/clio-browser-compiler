import { compile as clioCompile } from "clio-core";

export const compile = async (src) => {
  try {
    const { code } = clioCompile(src, "main.clio", {
      sourceDir: null,
      config: {},
      rpcPrefix: "playground",
      file: "<Playground>",
    });
    return { code };
  } catch (error) {
    return { error: error.message };
  }
};
