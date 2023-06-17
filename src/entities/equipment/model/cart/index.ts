import type { Module } from 'vuex'
import type { Equipment, EquipmentId } from '@/shared-kernel'

type CartState = {
    equipments: EquipmentId[]
}

const array = {
    push<T>(array: T[], item: T): T[] {
        return [...array, item]
    },
}

export const cartModule: Module<CartState, any> = {
    namespaced: true,
    state: () => ({
        equipments: ['1'],
    }),
    mutations: {
        addEquipmentToCart(state, equipment: Equipment) {
            state.equipments = array.push(state.equipments, equipment.id)
        },
    },
    getters: {
        list({ equipments }, getters, rootState, rootGetters) {
            const getById = rootGetters['equipment/getById']

            return equipments.map(id => getById(id))
        },
    },
}
