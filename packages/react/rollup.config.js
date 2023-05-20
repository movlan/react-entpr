import Ts from 'rollup-plugin-typescript2';

export default {
<<<<<<< HEAD
  input: [
    'src/index.ts',
    'src/atoms/Color/index.ts',
    'src/atoms/Image/index.ts',
    'src/atoms/Text/index.ts',
    'src/atoms/Margin/index.ts',
  ],
=======
  input: ['src/index.ts', 'src/atoms/Color/index.ts'],
>>>>>>> f8ffb93 (finish atom/Color)
  output: {
    dir: 'lib',
    format: 'esm',
    preserveModules: true,
    sourcemap: true,
  },
  plugins: [Ts()],
  external: ['react', '@movlan/foundation'],
};
