import ts from "rollup-plugin-typescript2";
import path from "path";
import { fileURLToPath } from "url";
const metaUrl = fileURLToPath(import.meta.url);
const dirName = path.dirname(metaUrl);

export default {
  input: "./src/index.ts", // 打包的入口文件
  output: {
    file: path.resolve(dirName, "./dist/index.js"), // 打包后输出到这边
  },
  plugins: [ts()],
};
