const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const _root = {
	dist: './dist'
};

module.exports = {
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
				loader: "eslint-loader",
				include: [path.resolve(__dirname, 'src')], // 指定检查的目录
				options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine 
					formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
				}
      }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',

      options: {
        presets: ['env']
      }
    }, {
      test: /\.(scss|css)$/,

      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    }]
  },

  plugins: [
    new CleanWebpackPlugin(_root.dist),
    // new BundleAnalyzerPlugin(),
		new UglifyJSPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html'
		})
  ],

  entry: './src/index',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, _root.dist),
    libraryTarget: 'window'
  },

  devServer: {
		host: '0.0.0.0'
  },
  
  mode: 'development'
}