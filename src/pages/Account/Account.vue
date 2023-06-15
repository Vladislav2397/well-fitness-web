<template lang="pug">

.b-account
    page-breadcrumb-layout(
        :breadcrumbs="['В каталог']"
        title="Личный кабинет"
    )
    aside-layout.__layout
        template(
            #aside=""
            v-if="isShowAside"
        )
            c-side-viewer.__viewer(
                :viewer="viewer"
            )
        template(
            v-if="isTabs"
        )
            navigation-tabs-layout.__navigation(
                :navigations="navigations"
            )
            router-view
        template(
            v-else
        )
            router-view

</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { PageBreadcrumbLayout } from '@/shared/layout/PageBreadcrumbLayout'
import { AsideLayout } from '@/shared/layout/AsideLayout'
import { SideViewer } from '@/entities/viewer/ui/SideViewer'
import NavigationTabsLayout from '@/shared/layout/NavigationTabsLayout/NavigationTabsLayout.vue'
import DeviceProvider from '@/shared/lib/providers/device'

// FIXME: Throwing error into any navigation item

export type AccountProps = {
    //
}

@Component({
    components: {
        'navigation-tabs-layout': NavigationTabsLayout,
        'aside-layout': AsideLayout,
        'page-breadcrumb-layout': PageBreadcrumbLayout,
        'c-side-viewer': SideViewer,
    },
})
export default class Account extends Vue {
    @Inject('$device') $device!: DeviceProvider['device']

    get isShowAside() {
        return this.$device.size.desktop || !this.isTabs
    }

    get viewer() {
        return {
            id: 1,
            firstname: 'Андрей',
            lastname: 'Константинопольский',
            email: 'andre@gmail.com',
            phone: '+7 (900) 900-90-90',
        }
    }

    get navigations() {
        return [
            {
                text: 'Главная',
                to: '/account',
            },
            {
                text: 'Доставка',
                to: '/account/delivery',
            },
            {
                text: 'Заказы',
                to: '/account/orders',
            },
            {
                text: 'Скидка',
                to: '/account/discount',
            },
            {
                text: 'Бонусы',
                to: '/account/bonus',
            },
            {
                text: 'Инструкции',
                to: '/account/instruction',
            },
            {
                text: 'Ваши обращения',
                to: '/account/feedback',
            },
        ]
    }

    get isTabs() {
        return this.$route.path.split('/').at(-1) !== 'account'
    }
}
</script>

<!-- <style lang="scss" src="./Account.critical.scss" /> -->
<!-- <style lang="scss" src="./Account.main.scss" /> -->
