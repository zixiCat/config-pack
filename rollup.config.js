import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'lib',
      format: 'cjs',
      sourcemap: process.env.NODE_ENV !== 'prod',
    },
  ],
  plugins: [shebangPlugin(), typescript(), terser()],
  external: ['fs', 'path', 'child_process'],
};

/**
 * add shebang line to top of index
 * @return {string} final code
 */
function shebangPlugin() {
  return {
    name: 'shebangPlugin',
    renderChunk(code, chunk) {
      const id = chunk.fileName;
      if (id !== 'index.js') return null;
      return '#!/usr/bin/env node\n' + code;
    },
  };
}
