import json from "@rollup/plugin-json";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/iife/index.js",
      name: "easiCustomerJssdk",
      format: "iife",
    },
    {
      file: "dist/es/index.js",
      name: "easiCustomerJssdk",
      format: "es",
    },
    {
      file: "dist/amd/index.js",
      name: "easiCustomerJssdk",
      format: "amd",
    },
    {
      file: "dist/cjs/index.js",
      name: "easiCustomerJssdk",
      format: "cjs",
    },
    {
      file: "dist/umd/index.js",
      name: "easiCustomerJssdk",
      format: "umd",
    },
  ],
  plugins: [
    json(),
    nodeResolve(),
    terser(),
    commonjs(),
    babel({
      exclude: "node_modules/**",
    }),
  ],
};
