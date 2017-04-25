import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

const config = {
  entry: 'src/index.js',
  format: 'umd',
  dest: 'umd/curi-react-link.js',
  moduleName: 'CuriReactLink',
  external: [
    'react',
    'prop-types'
  ],
  globals: {
    react: 'React',
    'prop-types': 'PropTypes'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(uglify())
}

export default config;
