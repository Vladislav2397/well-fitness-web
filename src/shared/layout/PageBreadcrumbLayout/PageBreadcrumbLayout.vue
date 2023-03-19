<template lang="pug">

.b-page-breadcrumb-layout
    .__container.container
        .__breadcrumbs {{ current.breadcrumbs }}
        .__title.typo.typo--size-h1 {{ current.title }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export type PageBreadcrumbLayoutProps = PartialPick<
    PageBreadcrumbLayout,
    'breadcrumbs' | 'title'
>

@Component
export default class PageBreadcrumbLayout extends Vue {
    @Prop() readonly breadcrumbs!: string[]
    @Prop() readonly title!: string

    get current() {
        const breadcrumbs = this.$route.meta?.breadcrumbs ?? []

        return {
            breadcrumbs: (this.breadcrumbs ?? breadcrumbs).join(' / '),
            title: this.title ?? this.$route.meta?.title,
        }
    }
}
</script>

<!-- <style lang="scss" src="./PageBreadcrumbLayout.critical.scss" /> -->
<!-- <style lang="scss" src="./PageBreadcrumbLayout.main.scss" /> -->
