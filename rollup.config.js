import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'lib',
      format: 'cjs',
      sourcemap: process.env.NODE_ENV !== 'prod',
    },
  ],
  plugins: [typescript(), nodeResolve(), terser()],
  external: ['fs'],
};
