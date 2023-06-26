import Ts from 'rollup-plugin-typescript2';

export default {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> bc863ae (lesson 31)
  input: [
    'src/index.ts',
    'src/atoms/Color/index.ts',
    'src/atoms/Image/index.ts',
    'src/atoms/Text/index.ts',
    'src/atoms/Margin/index.ts',
  ],
<<<<<<< HEAD
=======
  input: ['src/index.ts', 'src/atoms/Color/index.ts'],
>>>>>>> f8ffb93 (finish atom/Color)
=======
  input: ['src/index.ts', 'src/atoms/Color/index.ts', 'src/atoms/Image/index.ts'],
>>>>>>> fe5ba66 (finish foundation package)
=======
>>>>>>> bc863ae (lesson 31)
  output: {
    dir: 'lib',
    format: 'esm',
    preserveModules: true,
    sourcemap: true,
  },
  plugins: [Ts()],
  external: ['react', '@movlan/foundation'],
};
