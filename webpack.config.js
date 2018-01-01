const path = require('path');

module.exports = {
  entry: './src/App.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss?$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  }
};