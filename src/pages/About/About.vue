<template lang="pug">

.b-about
    page-breadcrumb-layout
    .__container.container
        .__banner
        navigation-column-layout.__layout(
            v-model="active"
            :navigation="navigation"
            @input="changePage"
        )
            router-view

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { PageBreadcrumbLayout } from '@/shared/layout/PageBreadcrumbLayout'
import { NavigationColumnLayout } from '@/shared/layout/NavigationColumnLayout'

@Component({
    components: {
        'navigation-column-layout': NavigationColumnLayout,
        'page-breadcrumb-layout': PageBreadcrumbLayout,
    },
})
export default class About extends Vue {
    active = 0

    get breadcrumbs() {
        return {
            breadcrumbs: ['О компании'],
            title: 'О компании',
        }
    }

    get tabs() {
        return {
            us: 'О нас',
            mission: 'Our Mission',
            team: 'Our Team',
        }
    }

    get navigation(): NavigationColumnLayout['navigation'] {
        return [
            {
                key: 'us',
                text: 'О нас',
            },
            {
                key: 'mission',
                text: 'Our Mission',
            },
            {
                key: 'team',
                text: 'Our Team',
            },
        ]
    }

    changePage(key: string) {
        this.$router.push(`/about/${key}`)
    }
}
</script>
