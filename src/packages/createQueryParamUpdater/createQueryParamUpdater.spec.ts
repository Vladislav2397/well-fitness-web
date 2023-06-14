import { createQueryParamUpdater, getParams } from './createQueryParamUpdater'

const { parseQueryParams, updateQueryParams } = createQueryParamUpdater({
    creators: 'array',
    categories: 'array',
    price: 'string',
})

describe('getParams spec', () => {
    test('default', () => {
        expect(getParams('')).toStrictEqual([])
    })
    test('custom', () => {
        expect(getParams('categories=1')).toStrictEqual(['categories=1'])
    })
    test('complex', () => {
        expect(getParams('categories=1&creators=1,2,3')).toStrictEqual([
            'categories=1',
            'creators=1,2,3',
        ])
    })
    test('incorrect', () => {
        expect(getParams('categories')).toStrictEqual([])
    })
    test('custom incorrect', () => {
        expect(getParams('price=1000-&categories')).toStrictEqual([
            'price=1000-',
        ])
    })
})

describe('parseQueryParams spec', () => {
    test('default', () => {
        expect(parseQueryParams('')).toStrictEqual({
            creators: [],
            categories: [],
            price: '',
        })
    })
    test('custom', () => {
        expect(parseQueryParams('creators=1')).toStrictEqual({
            creators: ['1'],
            categories: [],
            price: '',
        })
    })
    test('complex', () => {
        expect(
            parseQueryParams('categories=1,2&creators=1&price=1000-2000')
        ).toStrictEqual({
            creators: ['1', '2'],
            categories: ['1'],
            price: '1000-2000',
        })
    })
    test('incorrect', () => {
        expect(parseQueryParams('categories')).toStrictEqual({
            creators: [],
            categories: [],
            price: '',
        })
    })
    test('non exists', () => {
        expect(parseQueryParams('tested=query')).toStrictEqual({
            creators: [],
            categories: [],
            price: '',
        })
    })
})

type ParsedQuery = ReturnType<typeof parseQueryParams>

describe('updateQueryParam spec', () => {
    test('default', () => {
        const parsedQuery: ParsedQuery = {
            creators: [],
            categories: [],
            price: '',
        }

        expect(updateQueryParams(parsedQuery, {})).toStrictEqual('')
    })
    test('custom', () => {
        const parsedQuery: ParsedQuery = {
            creators: ['1'],
            categories: [],
            price: '1000-',
        }

        expect(
            updateQueryParams(parsedQuery, {
                categories: '1',
            })
        ).toStrictEqual('categories=1&creators=1&price=1000-')
    })
})
