export default {
  input: './src/index.js',
  plugins: [],
  output: [
    {
      format: 'cjs',
      file: 'lib/bundle.cjs.js',
      sourcemap: true,
    },
    {
      format: 'es',
      file: 'lib/bundle.esm.js',
      sourcemap: true,
    },
  ],
  external: ['react'],
};
