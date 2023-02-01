import nodeResolve from "@rollup/plugin-node-resolve";
import common from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import copy from "rollup-plugin-copy";
import image from 'rollup-plugin-img'
import typescript from "typescript";

import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import typescript2 from 'rollup-plugin-typescript2';


export default [
  {
    input: "src/entry-ssr.jsx",
    output: [
      {
        dir: "ssg/dist/lib",
        exports: "auto",
        format: "esm"
      }
    ],
    external: ["solid-js", "solid-js/web"],
    plugins: [
      nodeResolve({ 
        preferBuiltins: true, exportConditions: ["solid", "node"],
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.svg', '.png']
      }),
      babel({
        babelHelpers: "bundled",
        presets: [["solid", { generate: "ssr", hydratable: true }]]
      }),
      common(),
      typescript2({
        typescript
      }),
      postcss({
          plugins: [autoprefixer()],
          sourceMap: true,
          extract: true,
          minimize: true
      }),
      image()
    ]
  },
  {
    input: "src/hydrate.jsx",
    output: [
      {
        dir: "ssg/dist",
        format: "esm"
      }
    ],
    preserveEntrySignatures: false,
    plugins: [
      nodeResolve({ 
        exportConditions: ["solid"],
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.svg', '.png']
      }),
      babel({
        babelHelpers: "bundled",
        presets: [["solid", { generate: "dom", hydratable: true }]]
      }),
      common(),
      typescript2({
        typescript
      }),
      postcss({
          plugins: [autoprefixer()],
          sourceMap: true,
          extract: true,
          minimize: true
      }),
      image(),
      copy({
        targets: [
          {
            src: ["public"],
            dest: "ssg/dist/"
          }
        ]
      })
    ]
  }
];