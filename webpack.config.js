const path = require('path');

module.exports = {
  entry: {
    bundle: './src/all.js',
  },
  output: {
    path: path.join(__dirname, 'public/assets'),
    filename: '[name].js',
  },
  resolve: {
    extensions: [
      '*',
      '.js',
      '.jsx',
    ],
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.js[x]?$/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
};
