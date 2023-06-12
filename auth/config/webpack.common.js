module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,    //means if we import a file ending in .mjs or .js, use babel
                exclude: /node_modules/,    //means do not use babel on anything in node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}