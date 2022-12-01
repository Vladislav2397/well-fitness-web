const path = require('path')

module.exports = {
    stories: [
        '../src/shared/**/*.stories.mdx',
        '../src/shared/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/preset-scss',
    ],
    webpackFinal: config => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, '../src')
        }

        config.module.rules.push({
            test: /\.pug$/,
            use: [
                {
                    loader: 'pug-bem-plain-loader',
                    options: {
                        b: true,
                    }
                },
            ]
        })
        return config
    },
    framework: '@storybook/vue',
    core: {
        builder: '@storybook/builder-webpack5',
    },
}
