<template lang="pug">

.b-services
    page-breadcrumb-layout.__breadcrumbs(
        :title="title"
        :breadcrumbs="breadcrumbs"
    )
    navigation-column-layout.__layout(
        :value="active"
        :navigation="navigation"
        @input="changePage"
    )
        router-view

</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { PageBreadcrumbLayout } from '@/shared/layout/PageBreadcrumbLayout'
import { NavigationColumnLayout } from '@/shared/layout/NavigationColumnLayout'
import DeviceProvider from '@/shared/lib/providers/device'

export type ServicesProps = {
    //
}

/* TODO: Part of navigation-column-layout is a duplicate
    simplify realization
*/

@Component({
    components: {
        'navigation-column-layout': NavigationColumnLayout,
        'page-breadcrumb-layout': PageBreadcrumbLayout,
    },
})
export default class Services extends Vue {
    @Inject('$device') $device!: DeviceProvider['device']

    get active(): keyof Services['tabs'] {
        return (this.$route.path.split('/').at(-1) ??
            'order') as keyof Services['tabs']
    }

    changePage(key: string) {
        this.$router.push(`/services/${key}`)
    }

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
