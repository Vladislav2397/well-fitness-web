<template lang="pug">

.b-delivery
    page-breadcrumb-layout.__breadcrumbs(
        :title="title"
        :breadcrumbs="breadcrumbs"
    )
    navigation-column-layout.__layout(
        v-model="active"
        :navigation="navigation"
    )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { NavigationColumnLayout } from '@/shared/layout/NavigationColumnLayout'
import { PageBreadcrumbLayout } from '@/shared/layout/PageBreadcrumbLayout'

export type DeliveryProps = {
    //
}

@Component({
    components: {
        'page-breadcrumb-layout': PageBreadcrumbLayout,
        'navigation-column-layout': NavigationColumnLayout,
    },
})
export default class Delivery extends Vue {
    get title() {
        return 'Delivery'
    }

    get breadcrumbs() {
        return ['Поддержка', this.title]
    }

    active = 'delivery'

    get tabs() {
        return {
            delivery: 'Заявка на сервис',
        }
    }

    get navigation(): NavigationColumnLayout['navigation'] {
        const keys = ['delivery'] as const

        return keys.map(key => ({ key, text: this.tabs[key] }))
    }
}
</script>

<!-- <style lang="scss" src="./Delivery.critical.scss" /> -->
<!-- <style lang="scss" src="./Delivery.main.scss" /> -->
