<template lang="pug">

.b-aside-layout
    .__container.container
        .__content
            slot
        .__aside(
            v-if="$slots.aside"
            :style="styles"
        )
            slot(
                name="aside"
            )

</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import DeviceProvider from '@/shared/lib/providers/device'

export type AsideLayoutProps = {
    //
}

@Component
export default class AsideLayout extends Vue {
    @Inject('$device') $device!: DeviceProvider['device']

    get styles() {
        return (
            !this.$device.size.mobile && {
                'margin-left': '1.66rem',
                'padding-left': '1.66rem',
            }
        )
    }
}
</script>

<!-- <style lang="scss" src="./AsideLayout.critical.scss" /> -->
<!-- <style lang="scss" src="./AsideLayout.main.scss" /> -->
