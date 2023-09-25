import pkg from './package.json' assert { type: 'json' }
import json from '@rollup/plugin-json'
import esbuild from 'rollup-plugin-esbuild'

export default [
  {
    input: 'src/index.js',
    output: {
      name: pkg.name,
      file: pkg.main
    },
    plugins: [
      json(),
      esbuild({
        sourceMap: true,
        minify: true
      })

    ]
  }
]
