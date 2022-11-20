import { Module } from 'vuex'

export const brandModule: Module<any, any> = {
    namespaced: true,
    state: () => ({
        list: [],
    }),
}
