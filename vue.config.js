const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
    transpileDependencies: true,

    css: {
        loaderOptions: {
            scss: {
                //
            },
        },
    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                path.resolve(__dirname, './src/shared/assets/styles/vars.scss'),
            ],
        },
    },

    chainWebpack(config) {
        config.module
            .rule('pug')
            .oneOf('vue-loader')

            .use('pug-bem')
            .loader('pug-bem-plain-loader')
            .options({
                b: true,
            })
            .end()

        config.module
            .rule('pug')
            .oneOf('raw-pug-files')

            .use('pug-bem')
            .loader('pug-bem-plain-loader')
            .options({
                b: true,
            })
            .end()
    },
})
