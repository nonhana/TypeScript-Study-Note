import path from "path";
import ts from "rollup-plugin-typescript2";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import replace from "rollup-plugin-replace";

export default {
  input: "./src/index.ts",
  output: {
    file: path.resolve(__dirname, "./lib/index.js"),
    format: "umd",
    sourcemap: true,
  },
  plugins: [
    ts(),
    livereload(),
    terser(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    serve({
      open: true,
      port: 1988,
      openPage: "/public/index.html",
    }),
  ],
};
