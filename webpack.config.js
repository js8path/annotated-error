// Webpack configuration to build distribution files
// webpack.config.js
// globalObject is from https://github.com/webpack/webpack/issues/6784
const path = require('path')
const entryApp = './src/main.js'
const outputDist = {
  path: path.resolve(__dirname, 'dist'),
  globalObject: 'typeof self !== \'undefined\' ? self : this',
  libraryTarget: 'umd',
  library: '@js8path/annotated-error',
  filename: 'overwrite-this.js'
}
const babelRule = {
  test: /\.js$/,
  // exclude: /(node_modules)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
}

module.exports = [
  // distribution versions
  {
    mode: 'production',
    entry: entryApp,
    output: Object.assign(
      {},
      outputDist,
      {filename: 'annotated-error-min.js'}
    ),
    externals: {},
    module: {
      rules: [
        babelRule
      ]
    },
    plugins: [
    ]
  },
  {
    mode: 'development',
    entry: entryApp,
    output: Object.assign(
      {},
      outputDist,
      {filename: 'annotated-error.js'}
    ),
    externals: {},
    module: {
      rules: [
        babelRule
      ]
    },
    plugins: [
    ]
  }
]
