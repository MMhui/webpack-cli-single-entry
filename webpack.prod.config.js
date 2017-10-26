var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: __dirname + '/src/main.js', // 入口文件路径文件所在的目录.
	output: {
		path: __dirname + '/build/',	// 存放打包后文件的路径
		filename: 'bundle.js'	// 打包后文件名
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
				use: [
					'style-loader', 'css-loader?modules&importLoaders=1',
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								require('autoprefixer')
							]
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html' // new一个插件的实例，并传入相关的参数
		})
	]
};