const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {

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
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader'
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
