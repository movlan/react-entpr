import Ts from 'rollup-plugin-typescript2';

export default {
  input: ['src/index.ts', 'src/atoms/Color/index.ts'],
  output: {
    dir: 'lib',
    format: 'esm',
    preserveModules: true,
    sourcemap: true,
  },
  plugins: [Ts()],
  external: ['react'],
};
