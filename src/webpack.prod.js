const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const imagemin = require('imagemin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const merge = require('webpack-merge');
// const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	entry: {
		"app": "./js/_entry.js",
		// "app.min": "./js/_entry.js",  // no need for second min file when using production build
	},
	output: {
		path: path.resolve(__dirname, '../assets'),
		filename: 'js/[name].js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
				]
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader?-url",
					"sass-loader",
					'import-glob-loader',
				],
			},
			{
				test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts',    // where the fonts will go
						publicPath: '../fonts'  // override the default path
					}
				}]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'img',
					publicPath: '../img'
				}
			}
		]
	},
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        }),
		new HtmlWebpackPlugin(),
		new CopyWebpackPlugin([{
  			from: 'img/**/**',
  			to: path.resolve(__dirname, '../assets')
		}]),
		new ImageminPlugin({
		pngquant: ({quality: 60-80}),
  		plugins: [imageminMozjpeg({quality: 50})]
		})
    ],

    optimization: {
        sideEffects: false,  // Solves weird issue: Foundation CSS missing in webpack production mode
        minimizer: [
            new UglifyJSPlugin({
                //test: /\.min\.js$/,
                uglifyOptions: {
                    output: {
                        comments: false
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({
                //assetNameRegExp: /\.min\.css$/g,
                cssProcessorOptions: {
                    discardComments: { removeAll: true }
                }
            })
        ]
    }
};
