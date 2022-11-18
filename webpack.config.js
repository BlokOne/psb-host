const webpack = require('webpack')
const miniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[name]-[hash][ext]'
    },
    devServer: {
        port: 8000,
        static: './public',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',

            },
            {
                test: /\.(s*)css$/, use: [
                    miniCss.loader,

                    'css-loader',
                    'sass-loader']
            },
        ]
    },
    plugins: [
        new miniCss({
            filename: 'styles.css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: "index.html",
            template: 'src/components/index/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'hosting.html',
            title: "/hosting.html",
            template: 'src/components/hosting/hosting.html'
        })
    ]
}