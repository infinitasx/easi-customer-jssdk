import json from '@rollup/plugin-json';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import esbuild from 'rollup-plugin-esbuild';
import ts from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'lib/index.js',
      name: 'named',
      format: 'cjs',
    },
    {
      file: 'es/index.js',
      name: 'easi',
      format: 'es',
    },
  ],
  plugins: [
    json(),
    nodeResolve(),
    terser(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      tsconfig: 'tsconfig.json',
    }),
    ts(),
  ],
};
