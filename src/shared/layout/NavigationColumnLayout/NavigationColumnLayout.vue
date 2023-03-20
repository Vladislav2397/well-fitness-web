<template lang="pug">

.b-navigation-column-layout
    nav.__navigate
        .__scroller(
            v-if="!$device.size.desktop"
        )
            c-button.__link(
                v-for="navigate in navigation"
                :theme="getButtonTheme(navigate)"
                @click="setActive(navigate)"
            ) {{ navigate.text }}
        template(
            v-else
        )
            .__link.typo.typo--size-h5(
                v-for="navigate in navigation"
                :class="{ 'active': isActive(navigate) }"
                @click="setActive(navigate)"
            ) {{ navigate.text }}
    .__content
        keep-alive
            .__container.container(
                v-if="!$device.size.desktop"
            )
                slot(
                    :name="active"
                )
            template(
                v-else
            )
                slot(
                    :name="active"
                )

</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator'
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
    @Prop(navigationPropsOption) readonly navigation!: NavigationItem[]

    @Inject('$device') $device!: DeviceProvider['device']

    getButtonTheme(navigation: NavigationItem): Button['theme'] {
        return this.isActive(navigation) ? 'brand' : 'secondary'
    }

    isActive({ key }: NavigationItem) {
        return key === this.active
    }

    setActive({ key }: NavigationItem) {
        this.active = key
    }

    active = null as unknown as string

    created() {
        this.setActive(this.navigation[0])
    }
}
</script>

<!-- <style lang="scss" src="./NavigationColumnLayout.critical.scss" /> -->
<!-- <style lang="scss" src="./NavigationColumnLayout.main.scss" /> -->
