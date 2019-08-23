import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import clear from 'rollup-plugin-clear'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/react-ui-library-boilerplate.js',
    format: 'es',
    sourcemap: 'inline',
  },
  plugins: [
    clear({
      targets: ['./dist'],
      watch: true,
    }),
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs()
  ],
  external: [
    'react',
    'react-dom',
    'prop-types'
  ]
};