import json from '@rollup/plugin-json';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import MarkdownIt from 'markdown-it';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/iife/index.js',
      name: 'Easi',
      format: 'iife',
    },
    {
      file: 'dist/es/index.js',
      name: 'Easi',
      format: 'es',
    },
    {
      file: 'dist/amd/index.js',
      name: 'Easi',
      format: 'amd',
    },
    {
      file: 'dist/cjs/index.js',
      name: 'Easi',
      format: 'cjs',
    },
    {
      file: 'dist/umd/index.js',
      name: 'Easi',
      format: 'umd',
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
    }),
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
};
