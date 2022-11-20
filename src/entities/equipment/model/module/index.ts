import { Module } from 'vuex'

export const equipmentModule: Module<any, any> = {
    namespaced: true,
    state: () => ({
        pool: {},
        novelties: [],
        stocks: [],
        recommended: [],
    }),
}
