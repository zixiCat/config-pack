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
  plugins: [typescript(), terser()],
  external: ['fs', 'path'],
};
