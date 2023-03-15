import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "${path.resolve(
                    __dirname,
                    'src/shared/assets/styles/vars.scss'
                )}";`,
            },
        },
    },
})
