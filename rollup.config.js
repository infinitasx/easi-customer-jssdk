import json from '@rollup/plugin-json';
import { babel } from '@rollup/plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import esbuild from 'rollup-plugin-esbuild';
import ts from 'rollup-plugin-typescript2';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'lib/index.js',
        format: 'cjs',
        exports: 'named',
      },
      {
        file: 'es/index.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      ts(),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.ts', '.vue', '.js'],
        babelHelpers: 'bundled',
      }),
    ],
  },
  {
    input: 'src/easi/index.ts',
    output: [
      {
        file: 'dist/easi/index.min.js',
        name: 'easi',
        format: 'umd',
      },
    ],
    plugins: [
      json(),
      nodeResolve(),
      commonjs(),
      esbuild(),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.ts', '.vue', '.js'],
        babelHelpers: 'bundled',
      }),
      terser(),
    ],
  },
  {
    input: 'src/delivery/index.ts',
    output: [
      {
        file: 'dist/delivery/index.min.js',
        name: 'delivery',
        format: 'umd',
      },
    ],
    plugins: [
      json(),
      nodeResolve(),
      commonjs(),
      esbuild(),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.ts', '.vue', '.js'],
        babelHelpers: 'bundled',
      }),
      terser(),
    ],
  },
];
