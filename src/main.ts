import Vue from 'vue'
import App from './app/App.vue'

import './registerServiceWorker'

import router from './app/providers/router'
import store from './app/providers/store'
import DeviceProvider from '@/shared/lib/providers/device'

import './server'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    mixins: [DeviceProvider],
    render: h => h(App),
}).$mount('#app')
