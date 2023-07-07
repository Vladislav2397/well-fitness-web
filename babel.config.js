module.exports = {
    presets: ['@vue/babel-preset-jsx'],
    plugins: [
        [
            'module-resolver',
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
                alias: {
                    // This needs to be mirrored in
                    // tsconfig.json and jsconfig.json
                    '@': './src',
                    '~p': './public',
                },
            },
        ],
    ],
}
