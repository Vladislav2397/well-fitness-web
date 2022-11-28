import Vue from 'vue'
import App from './app/App.vue'

// import './shared/assets/styles/main.scss'

import './registerServiceWorker'

import router from './app/providers/router'
import store from './app/providers/store'
import DeviceProvider from '@/shared/lib/providers/device'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    mixins: [DeviceProvider],
    render: h => h(App),
}).$mount('#app')
