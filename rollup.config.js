
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import strip from '@rollup/plugin-strip';
import typescript from "rollup-plugin-typescript2";

export default {
  input: ['build/pwa-install.js'],
  output: {
    file: 'dist/pwa-install.js',
    format: 'es',
    sourcemap: false
  },
  plugins: [
    resolve(),
    minifyHTML(),
    terser(),
    strip({
      functions: ['console.log']
    }),
    typescript({
      useTsconfigDeclarationDir: true
    })
  ]
};