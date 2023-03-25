<template lang="pug">

.b-navigation-column-layout(
    :class="{ 'container': $device.size.desktop }"
)
    nav.__navigate
        .__scroller(
            v-if="!$device.size.desktop"
        )
            c-button.__link(
                v-for="navigate in navigation"
                :key="navigate.key"
                :theme="getButtonTheme(navigate)"
                @click="setActive(navigate)"
            ) {{ navigate.text }}
        template(
            v-else
        )
            .__link.typo.typo--size-h5(
                v-for="navigate in navigation"
                :key="navigate.key"
                :class="{ 'active': isActive(navigate) }"
                @click="setActive(navigate)"
            ) {{ navigate.text }}
    .__content
        .__container.container(
            v-if="!$device.size.desktop"
        )
            slot
            slot(
                :name="valueModel"
            )
        template(
            v-else
        )
            slot
            slot(
                :name="valueModel"
            )

</template>

<script lang="ts">
import { Component, Inject, Prop, VModel, Vue } from 'vue-property-decorator'
import { PropOptions } from 'vue'
import { Button } from '@/shared/ui/Button'
import DeviceProvider from '@/shared/lib/providers/device'

export type NavigationColumnLayoutProps = Pick<
    NavigationColumnLayout,
    'navigation'
>

type NavigationItem = {
    key: string
    text: string
}

const navigationPropsOption: PropOptions = {
    required: true,
    validator(value: NavigationItem[]) {
        return Boolean(value.length)
    },
}

@Component({
    components: {
        'c-button': Button,
    },
})
export default class NavigationColumnLayout extends Vue {
    @VModel() valueModel!: string
    @Prop(navigationPropsOption) readonly navigation!: NavigationItem[]

    @Inject('$device') $device!: DeviceProvider['device']

    getButtonTheme(navigation: NavigationItem): Button['theme'] {
        return this.isActive(navigation) ? 'brand' : 'secondary'
    }

    isActive({ key }: NavigationItem) {
        return key === this.valueModel
    }

    setActive({ key }: Pick<NavigationItem, 'key'>) {
        this.valueModel = key
    }
}
</script>

<!-- <style lang="scss" src="./NavigationColumnLayout.critical.scss" /> -->
<!-- <style lang="scss" src="./NavigationColumnLayout.main.scss" /> -->
