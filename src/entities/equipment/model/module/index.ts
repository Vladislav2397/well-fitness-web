import type { Module } from 'vuex'
import type { Equipment, EquipmentId } from '@/shared-kernel'
import { imageMock as image } from '@/shared/mock'

const getPool = (): Record<EquipmentId, Equipment> => ({
    1: {
        id: 1,
        name: 'name 1',
        description: 'description 1',
        image,
        price: [10000, 12000],
        hasShowRoom: false,
        rating: 4,
        info: [['key', 'value']],
        quantity: 2,
    },
    2: {
        id: 2,
        name: 'name 2',
        description: 'description 2',
        image,
        price: [10000, 12000],
        hasShowRoom: false,
        rating: 4,
        info: [['key', 'value']],
        quantity: 3,
    },
    3: {
        id: 3,
        name: 'name 3',
        description: 'description 3',
        image,
        price: [10000, 15000],
        hasShowRoom: true,
        rating: 1,
        info: [['key', 'value']],
        quantity: 0,
    },
})

export const equipmentModule: Module<
    {
        pool: Record<string, any>
        novelties: number[]
        stocks: number[]
        recommended: number[]
    },
    any
> = {
    namespaced: true,
    state: () => ({
        pool: getPool(),
        novelties: [1],
        stocks: [2],
        recommended: [3],
    }),
    getters: {
        novelties(state) {
            return state.novelties // .map(id => state.pool[id])
        },
        stocks(state) {
            return state.stocks // .map(id => state.pool[id])
        },
        recommended(state) {
            return state.recommended // .map(id => state.pool[id])
        },
        getById(state) {
            return (id: number) => state.pool[id]
        },
    },
}
