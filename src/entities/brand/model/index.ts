import { Module } from 'vuex'

const getList = () => {
    return [
        {
            id: 1,
            name: 'name 1',
            image: {
                source: '',
                alt: '',
            },
        },
        {
            id: 2,
            name: 'name 2',
            image: {
                source: '',
                alt: '',
            },
        },
        {
            id: 3,
            name: 'name 3',
            image: {
                source: '',
                alt: '',
            },
        },
        {
            id: 4,
            name: 'name 4',
            image: {
                source: '',
                alt: '',
            },
        },
        {
            id: 5,
            name: 'name 5',
            image: {
                source: '',
                alt: '',
            },
        },
    ]
}

export const brandModule: Module<any, any> = {
    namespaced: true,
    state: () => ({
        list: getList(),
    }),
    getters: {
        list(state) {
            return state.list
        },
    },
}
