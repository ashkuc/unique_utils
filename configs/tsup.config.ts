import {defineConfig} from 'tsup'

export default defineConfig([
  {
    entry: {
      index: "src/index.ts",
      string: "src/StringUtils/index.ts",
      address: "src/Address/index.ts",
    },
    format: [
      "esm",
      "cjs"
    ],
    target: 'es2020',
    dts: true,
    splitting: false,
    sourcemap: true,
    // noExternal: [/^base/, /\^@noble/],
  },
])
