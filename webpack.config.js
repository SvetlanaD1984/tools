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
                test: /\.(png|jpe?g|gif|mp3|mp4)$/i,
                loader: 'file-loader',
                options: {
                  publicPath: 'assets',
                },
            },
           
                      
            { test: /\.(scss)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'] 
            },
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: resolve(__dirname, 'index.html')}),
        new MiniCssExtractPlugin({ 
            filename: '[name].[contenthash].css' 
        }),

    ]


};
