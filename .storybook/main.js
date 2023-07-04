const path = require('path')

const generateByEquipment = folderNames => {
    return folderNames.map(
        name =>
            `../src/entities/equipment/ui/${name}/**/*.stories.(js|jsx|ts|tsx)`
    )
}

module.exports = {
    stories: [
        '../src/shared/**/*.stories.(js|jsx|ts|tsx)',
        ...generateByEquipment([
            'EquipmentPreview',
            'EquipmentCard',
            'CardProduct',
            'CardProductStats',
        ]),
        '../src/entities/article/**/*.stories.(js|jsx|ts|tsx)',
        '../src/entities/brand/**/*.stories.(js|jsx|ts|tsx)',
        '../src/entities/work/**/*.stories.(js|jsx|ts|tsx)',
        '../src/entities/idea/**/*.stories.(js|jsx|ts|tsx)',
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
            '@': path.resolve(__dirname, '../src'),
        }

        config.module.rules.push({
            test: /\.tsx$/,
            use: [
                {
                    loader: 'babel-loader',
                },
                {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        happyPackMode: false,
                        appendTsxSuffixTo: ['\\.vue$'],
                    },
                },
            ],
        })

        config.module.rules.push({
            test: /\.pug$/,
            use: [
                {
                    loader: 'pug-bem-plain-loader',
                    options: {
                        b: true,
                    },
                },
            ],
        })
        return config
    },
    framework: '@storybook/vue',
    core: {
        builder: '@storybook/builder-webpack5',
    },
}
