<template lang="pug">

.b-office
    page-breadcrumb-layout.__breadcrumbs(
        :title="title"
        :breadcrumbs="breadcrumbs"
    )
    navigation-column-layout(
        :value="active"
        :navigation="navigation"
        @input="onChange"
    )
        router-view

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PageBreadcrumbLayout from '@/shared/layout/PageBreadcrumbLayout/PageBreadcrumbLayout.vue'
import NavigationColumnLayout from '@/shared/layout/NavigationColumnLayout/NavigationColumnLayout.vue'

export type OfficeProps = {
    //
}

@Component({
    components: {
        'navigation-column-layout': NavigationColumnLayout,
        'page-breadcrumb-layout': PageBreadcrumbLayout,
    },
})
export default class Office extends Vue {
    onChange(key: string) {
        this.$router.push(`/offices/${key}`)
    }

    get tabs() {
        return {
            project: '3D проект',
            installment: 'Рассрочка',
        }
    }

    get active() {
        return this.$route.path.split('/').at(-1)
    }

    get navigation() {
        const keys = ['project', 'installment'] as const

        return keys.map(key => ({
            key,
            text: this.tabs[key],
        }))
    }

    get title() {
        const routesMap: Record<string, string> = {
            '/offices/project': '3D проект',
            '/offices/installment': 'Рассрочка',
        }

        return routesMap[this.$route.path]
    }

    get breadcrumbs() {
        return ['Услуги', this.title]
    }
}
</script>

<!-- <style lang="scss" src="./Office.critical.scss" /> -->
<!-- <style lang="scss" src="./Office.main.scss" /> -->
