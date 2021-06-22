import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index',
  output: [
    {
      format: 'cjs',
    },
  ],
  plugins: [typescript()],
};
