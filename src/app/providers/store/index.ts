import Vue from 'vue'
import Vuex from 'vuex'

import { ideaModel } from '@/entities/idea'
import { brandModel } from '@/entities/brand'
import { equipmentModel } from '@/entities/equipment'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        idea: ideaModel.ideaModule,
        brand: brandModel.brandModule,
        equipment: equipmentModel.equipmentModule,
    },
})
