import json from '@rollup/plugin-json';
import { babel } from '@rollup/plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import esbuild from 'rollup-plugin-esbuild';
import MarkdownIt from 'markdown-it';
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
      copy({
        targets: [
          {
            src: 'README.md',
            dest: 'dist',
            rename: 'README.html',
            transform: contents => {
              return [
                '<meta charset="utf-8">',
                '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css" integrity="sha512-Oy18vBnbSJkXTndr2n6lDMO5NN31UljR8e/ICzVPrGpSud4Gkckb8yUpqhKuUNoE+o9gAb4O/rAxxw1ojyUVzg==" crossorigin="anonymous" referrerpolicy="no-referrer" />',
                '<div class="markdown-body">',
                new MarkdownIt().render(contents.toString('utf-8')),
                '</div>',
              ].join('\n');
            },
          },
        ],
      }),
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
      copy({
        targets: [
          {
            src: 'README.md',
            dest: 'dist',
            rename: 'README.html',
            transform: contents => {
              return [
                '<meta charset="utf-8">',
                '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css" integrity="sha512-Oy18vBnbSJkXTndr2n6lDMO5NN31UljR8e/ICzVPrGpSud4Gkckb8yUpqhKuUNoE+o9gAb4O/rAxxw1ojyUVzg==" crossorigin="anonymous" referrerpolicy="no-referrer" />',
                '<div class="markdown-body">',
                new MarkdownIt().render(contents.toString('utf-8')),
                '</div>',
              ].join('\n');
            },
          },
        ],
      }),
    ],
  },
];
