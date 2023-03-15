<template lang="pug">

.b-page-breadcrumb-layout
    .__breadcrumbs {{ breadcrumbs }}
    .__title {{ title }}

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

export type PageBreadcrumbLayoutProps = {
    //
}

@Component
export default class PageBreadcrumbLayout extends Vue {
    get breadcrumbs() {
        return this.$route.meta?.breadcrumbs
    }

    get title() {
        return this.$route.meta?.title
    }
}
</script>

<!-- <style lang="scss" src="./PageBreadcrumbLayout.critical.scss" /> -->
<!-- <style lang="scss" src="./PageBreadcrumbLayout.main.scss" /> -->
