<template lang="pug">

.b-aside-layout
    .__container.container
        .__content
            slot
        .__aside
            slot(
                name="aside"
            )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

export type AsideLayoutProps = {
    //
}

@Component
export default class AsideLayout extends Vue {
    //
}
</script>

<!-- <style lang="scss" src="./AsideLayout.critical.scss" /> -->
<!-- <style lang="scss" src="./AsideLayout.main.scss" /> -->
