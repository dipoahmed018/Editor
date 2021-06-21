const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
    return {
        mode: env.production ? 'production' : 'development',
        entry: './src/index.js',
        plugins: [
            new HtmlWebpackPlugin({
                title: 'First Test'
            })
        ],
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, env.production == true ? 'bundle' : 'dist'),
        },
        devServer: {
            contentBase: path.join(__dirname, 'bundle'),
            compress: true,
            port: 5500,
        }
    }
}