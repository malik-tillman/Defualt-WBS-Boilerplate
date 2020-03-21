const path = require('path');

module.exports = {
    mode: 'development',
    entry: './scripts/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.bundle.js'
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        poll: 200
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env"]
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ],
    },
    stats: {
        colors: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules', path.resolve(__dirname, 'scripts')]
    },
    devtool: 'source-map'
};
