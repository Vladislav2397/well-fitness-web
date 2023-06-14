/**
 * const [parseQueryParams, updateQueryParam] = createQueryParamUpdater({
 *  creators: 'array',
 *  categories: 'array',
 *  price: 'string',
 * })
 *
 * const parsedQuery = parseQueryParams(params) // { creators: [], categories: [], price: '' }
 *
 * const query = updateQueryParam(parsedQuery, {
 *  creators: '1',
 * })
 */

type QueryString = BrandedType<string>
type Definer = Record<string, 'array' | 'string'>
type ParsedQuery = Record<string, unknown>

type ValueOf<T> = T[keyof T]

function getDefaultValue(value: ValueOf<Definer>) {
    switch (value) {
        case 'array':
            return []
        default:
            return ''
    }
}

const updateObjectFields = (
    obj: any,
    updater: (key: string, value: unknown) => [string, unknown]
) => {
    return obj
}

export function getParams(query: QueryString) {
    if (query.includes('=') || query.includes('&')) {
        return query.split('&')
    }
    return []
}

export function createQueryParamUpdater(definer: Definer) {
    function parseQueryParams(query: QueryString): ParsedQuery {
        const params = getParams(query)

        const obj = Object.fromEntries(params.map(pair => pair.split('=')))

        return Object.fromEntries(
            Object.entries(definer).map(([key, value]) => {
                const defaultValue = getDefaultValue(value)

                return [key, obj[key] ?? defaultValue]
            })
        )
    }

    function updateQueryParams(query: ParsedQuery, values: any) {
        const result = new Map()

        Object.entries(query).forEach(([key, value]) => {
            // const type = definer[key]
            // if (type === 'array') {
            //     //
            // } else {
            //     //
            // }

            result.set(key, values[key])
        })

        return ''
    }

    return { parseQueryParams, updateQueryParams }
}
