import Ts from '@rollup/plugin-typescript';

export default {
  input: [
    'src/index.ts',
    'src/atoms/Color/index.ts',
    'src/atoms/Image/index.ts',
    'src/atoms/Text/index.ts',
    'src/atoms/Margin/index.ts',
    'src/molecules/Select/index.ts',
  ],
  output: {
    dir: 'lib',
    format: 'esm',
    preserveModules: true,
    sourcemap: true,
  },
  plugins: [Ts()],
  external: ['react', '@mvln/foundation', 'clsx'],
};
