import { updateQueryParams } from './updateQueryParams'

type Result = Record<string, string | string[]>
type Params = [Result, 'array' | 'primitive', string, string, Result]

describe('updateQueryParams spec', () => {
    const map: Params[] = [
        [{ res: '1' }, 'primitive', 'res', '2', { res: '2' }],
        [{ res: ['1'] }, 'array', 'res', '2', { res: ['1', '2'] }],
        [{ res: ['1', '2'] }, 'array', 'res', '2', { res: ['1'] }],
        [{ res: '1' }, 'array', 'res', '2', { res: ['1', '2'] }],
        [{ res: ['1', '2'] }, 'primitive', 'res', '2', { res: '2' }],
        [{}, 'primitive', 'res', '1', { res: '1' }],
        [{}, 'array', 'res', '1', { res: '1' }],
    ]

    test.each(map)(
        'enter %s with args %s %s %s must be %s',
        (enter, type, key, value, result) => {
            expect(updateQueryParams(enter, type, key, value)).toStrictEqual(
                result
            )
        }
    )
})

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
