const { resolve } = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/js/main.js',
    output: {
        path: resolve(__dirname, 'build'), 
        filename: 'main.[contenthash].js',
        clean: true,  
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|mp3)$/i,
                loader: 'file-loader',
                options: {
                  publicPath: 'assets',
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(scss)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
           
            { test: /\\.css$/i, 
                use: [MiniCssExtractPlugin.loader, 'css-loader'] 
            },
            { test: /\\.s[ac]ss$/i,
                use: [
                        MiniCssExtractPlugin.loader, 
                        'css-loader', 
                        'sass-loader'
                ]
            },
            {
                test: /\.mp3$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: resolve(__dirname, 'index.html')}),
        new MiniCssExtractPlugin({ 
            filename: '[name].[contenthash].css' 
        }),

    ]


};
