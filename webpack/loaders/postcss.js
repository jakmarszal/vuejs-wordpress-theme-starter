const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    test: /\.css$/i,
    use: [
        {
            loader: MiniCssExtractPlugin.loader
        },
        'css-loader'
    ]
};