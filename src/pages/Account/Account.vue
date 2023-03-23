<template lang="pug">

.b-account
    page-breadcrumb-layout(
        :breadcrumbs="['В каталог']"
        title="Личный кабинет"
    )
    aside-layout
        template(
            #aside
        )
            c-side-viewer(
                :viewer="viewer"
            )
        navigation-tabs-layout(
            v-if="isTabs"
            :navigations="navigations"
        )
            router-view
        template(
            v-else
        )
            router-view

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { PageBreadcrumbLayout } from '@/shared/layout/PageBreadcrumbLayout'
import { AsideLayout } from '@/shared/layout/AsideLayout'
import { SideViewer } from '@/entities/viewer/ui/SideViewer'
import NavigationTabsLayout from '@/shared/layout/NavigationTabsLayout/NavigationTabsLayout.vue'

export type AccountProps = {
    //
}

@Component({
    components: {
        NavigationTabsLayout,
        'aside-layout': AsideLayout,
        'page-breadcrumb-layout': PageBreadcrumbLayout,
        'c-side-viewer': SideViewer,
    },
})
export default class Account extends Vue {
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
