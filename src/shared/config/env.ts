/**
 * Модуль инициализации env-переменных
 * @remark Если не найдено значение хоть одной переменной,
 * Приложение сразу выбросит ошибку, при инициализации модуля
 * @module
 */

/**
 * Получение env-переменной
 * @throwable
 */
const getEnvVar = (key: string) => {
    if (process.env?.[key] === undefined) {
        throw new Error(`Env variable ${key} is required`)
    }
    return process.env[key] || ''
}

/** API entrypoint */
// export const GRAPHQL_HOST = getEnvVar("VUE_APP_GRAPHQL_HOST")
// export const MEDIA_HOST = getEnvVar("VUE_APP_MEDIA_HOST")

export {}

/** Режим запуска программы */
/** Режим разработки */
// export const isDevEnv = getEnvVar("DEV") // Vite feature
/** Режим продакшена */
// export const isProdEnv = getEnvVar("PROD") // Vite feature
