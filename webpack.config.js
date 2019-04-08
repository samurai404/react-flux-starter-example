var htmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
    module:{
        rules : [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader : 'babel-loader'
            },
            {
                test: /\.html$/,
                loader : 'html-loader'
            }
        ]
    },
    resolve:{
        extensions: ['.js','.jsx']
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}