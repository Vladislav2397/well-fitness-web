<template lang="pug">

.b-navigation-tabs-layout
    c-button.__link(
        v-for="navigation in navigations"
        tag="router-link"
        :to="navigation.to"
        :theme="isActive(navigation) ? 'brand' : 'secondary'"
        @click="push(navigation)"
    ) {{ navigation.text }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Button } from '@/shared/ui/Button'

export type NavigationTabsLayoutProps = {
    //
}

@Component({
    components: {
        'c-button': Button,
    },
})
export default class NavigationTabsLayout extends Vue {
    @Prop() readonly navigations!: { text: string; to: string }[]

    isActive({ to }: { to: string }) {
        return this.$route.path === to
    }

    push({ to }: { to: string }) {
        this.$router.push(to)
    }
}
</script>

<!-- <style lang="scss" src="./NavigationTabsLayout.critical.scss" /> -->
<!-- <style lang="scss" src="./NavigationTabsLayout.main.scss" /> -->
