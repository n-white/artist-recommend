const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'client'),
  entry: path.join(__dirname, 'client/entry'),
  build: path.join(__dirname, 'client/build'),
  public: '/assets/',
};

module.exports = {
  entry: PATHS.entry,
  output: {
    path: PATHS.build,
    publicPath: PATHS.public,
    filename: "bundle.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
        include: PATHS.app,
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'autoprefixer', 'sass'],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};


// Why is there a public and a private path?
// Why is the build folder full of random files and not the build.js file?