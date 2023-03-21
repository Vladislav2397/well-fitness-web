<template lang="pug">

.b-services
    page-breadcrumb-layout.__breadcrumbs(
        :title="title"
        :breadcrumbs="breadcrumbs"
    )
    component(
        v-bind="container"
    )
        navigation-column-layout.__layout(
            :navigation="navigation"
            @change="active = $event"
        )
            template(
                #order
            )
                order-section
            template(
                #service
            )
                service-section

</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { PageBreadcrumbLayout } from '@/shared/layout/PageBreadcrumbLayout'
import { NavigationColumnLayout } from '@/shared/layout/NavigationColumnLayout'
import { Order, Service } from './sections'
import DeviceProvider from '@/shared/lib/providers/device'

/* TODO: Maybe use router-view and different routes
    for different tabs
 */

export type ServicesProps = {
    //
}

@Component({
    components: {
        'order-section': Order,
        'service-section': Service,
        'navigation-column-layout': NavigationColumnLayout,
        'page-breadcrumb-layout': PageBreadcrumbLayout,
    },
})
export default class Services extends Vue {
    @Inject('$device') $device!: DeviceProvider['device']

    get container() {
        return this.$device.size.desktop
            ? {
                  is: 'div',
                  class: ['services__container', 'container'],
              }
            : {
                  is: 'div',
              }
    }

    active = null as unknown as keyof Services['tabs']

    get title() {
        return this.active ? this.tabs[this.active] : this.tabs.order
    }

    get breadcrumbs() {
        return ['Сервис', this.title]
    }

    get tabs() {
        return {
            order: 'Заявка на сервис',
            service: 'Обслуживание фитнес клубов',
            guide: 'Инструкции',
            video: 'Видео-инструкции',
        }
    }

    get navigation(): NavigationColumnLayout['navigation'] {
        return [
            {
                key: 'order',
                text: 'Заявка на сервис',
            },
            {
                key: 'service',
                text: 'Обслуживание фитнес клубов',
            },
            {
                key: 'guide',
                text: 'Инструкции',
            },
            {
                key: 'video',
                text: 'Видео-инструкции',
            },
        ]
    }
}
</script>

<!-- <style lang="scss" src="./Services.critical.scss" /> -->
<!-- <style lang="scss" src="./Services.main.scss" /> -->
