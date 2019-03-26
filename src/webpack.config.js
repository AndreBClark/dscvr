const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

module.exports = {
 	mode: 'development',
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
		// 	{
		// 		test: /\.(gif|png|jpe?g|svg)$/i,
		// 		use: [
		// 			'file-loader',
		// 			{
		// 				options: {
		// 					name: '[name].[ext]',
		// 					outputPath: 'img',
		// 					publicPath: '../img'
		// 				},
		// 				loader: 'image-webpack-loader',
		// 				options: {
		// 					mozjpeg: {
		// 						progressive: true,
		// 						quality: 65
		// 					},
		// 					// optipng.enabled: false will disable optipng
		// 					optipng: {
		// 						enabled: false,
		// 					},
		// 					pngquant: {
		// 						quality: '65-90',
		// 						speed: 4
		// 					},
		// 					gifsicle: {
		// 						interlaced: false,
		// 					},
		// 					// the webp option will enable WEBP
		// 					webp: {
		// 						quality: 75
		// 					}
		// 				}
		// 			},
		// 		],
		// 	}]
		// },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
				options: {
					name: '[name][hash].[ext]',
					outputPath: 'img',
					publicPath: '../img'
				}
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
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
