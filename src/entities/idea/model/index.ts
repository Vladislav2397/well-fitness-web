import { Module } from 'vuex'

type Image = {
    // file?: File
    source: string
    alt: string
}

type Idea = {
    id: number
    name: string
    image: Image
}

export const ideaModule: Module<{ list: Idea[] }, any> = {
    namespaced: true,
    state: () => ({
        list: [
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
        ],
    }),
    getters: {
        list(state) {
            return state.list
        },
    },
}
