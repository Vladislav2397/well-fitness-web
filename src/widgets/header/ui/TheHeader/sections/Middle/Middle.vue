<template lang="pug">

.b-middle
    .__container.container
        .__navbar
            button-component.__catalog(
                :iconLeft="true"
                icon="bento"
                size="m"
                theme="brand"
            ) Каталог
            .__search
                c-icon(
                    name="search"
                )
            c-navigation.__navigation(
                align="horizontal"
            )
        .__icons
            c-icon.__action(
                size="m"
                name="stats"
            )
            c-icon.__action(
                size="m"
                name="heart"
            )
            cart-header-icon.__action

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Button } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import { Navigation } from '../../../Navigation'
import { CartHeaderIcon } from '@/widgets/cart'

@Component({
    components: {
        'cart-header-icon': CartHeaderIcon,
        'button-component': Button,
        'c-icon': Icon,
        'c-navigation': Navigation,
    },
})
export default class Middle extends Vue {
    toRoute(route: string) {
        this.$router.push(route)
    }
}
</script>

<style lang="scss" src="./Middle.critical.scss" />
