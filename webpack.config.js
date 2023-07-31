const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './scripts/index.js',
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(js)$/, use: 'babel-loader' },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'scripts'),
        filename: 'index_bundle.js',
    },
    //plugins: [new HtmlWebpackPlugin()],
    mode: 'development',
};
