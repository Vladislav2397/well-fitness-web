function toggle<T>(arr: T[], value: T) {
    if (arr.includes(value)) {
        return arr.filter(item => item !== value)
    }
    return [...arr, value]
}

type ParamType = 'array' | 'primitive'

function parseParams(type: 'array', params: string): string[]
function parseParams(type: 'primitive', params: string): string
function parseParams(type: ParamType, params = '') {
    if (type === 'array') {
        return params.split(',')
    }
    return params
}

type Result = string | number | boolean | unknown[]

type QueryParams = any

export function updateQueryParams<T extends ParamType>(
    query: QueryParams,
    type: T,
    key: string,
    value: string
): Record<string, string> {
    // @ts-ignore
    const currentParam = parseParams(type, query[key])

    let param

    if (type === 'array') {
        param = toggle(currentParam, value).join(',')
    } else {
        param = value
    }

    if (param) {
        return {
            ...query,
            [key]: param,
        }
    }
    const copyQuery = { ...query }
    delete copyQuery[key]

    return {
        ...copyQuery,
    }
}
