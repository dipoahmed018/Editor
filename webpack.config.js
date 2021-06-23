const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
    return {
        mode: env.production ? 'production' : 'development',
        entry: './src/index.ts',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(png|svg|jpg|gif|jpeg)?$/i,
                    loader: 'file-loader',
                    options : {
                        name : '[name].[ext]',
                    }
                },
                {
                    test: /\.css$/i,
                    use : ['style-loader','css-loader'],
                }
            ],
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                title: 'Editor',
            })
        ],
        devServer: {
            contentBase: './bundle',
        },
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, env.production == true ? 'dist' : 'bundle'),
        },
    }
}