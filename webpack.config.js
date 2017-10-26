var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry: __dirname + '/src/main.js', // 入口文件路径文件所在的目录.
	output: {
		path: __dirname + '/build/',	// 存放打包后文件的路径
		filename: '[name]-[hash].js'	// 打包后文件名
	},
	devtool: 'source-map', // 配置生成的source-map
	devServer: {
		port: '9000',
		inline: true,
		historyApiFallback: true,
		open: true,
		hot: true // 热加载
	},
	module: {
		rules: [
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/ // 编译打包时排除node_modules文件夹
			},
			{
				test: /\.css$/,
				// 此处结构需要做一下修改
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader?modules!postcss-loader'
				})
			}
		]
	},
	plugins: [//在这个数组中new一个实例就可以了
		new webpack.BannerPlugin('版权所有，侵权必究！！！'),
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html' // new一个插件的实例，并传入相关的参数
		}),
		new webpack.HotModuleReplacementPlugin(), // 热加载插件
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin('[name]-[hash].css')
	]
};