<template lang="pug">

.b-top
    .__container.container
        .__logo
            c-logo.__image
            link-component.__city(
                v-if="!device.size.mobile"
                icon="collapse"
                iconSize="s"
            ) Москва
        .__user-actions(
            v-if="device.size.desktop"
        )
            c-dealers.__info
            c-request-call.__info
            c-login-button.__info
        .__user-actions(
            v-else
        )
            .__search
                c-icon.__action.-search(
                    name="search"
                )
            template(
                v-if="device.size.tablet/* || device.size.tabletLate*/"
            )
                c-icon.__action(
                    name="stats"
                )
                c-icon.__action(
                    name="heart"
                )
            c-icon.__action(
                name="cart"
            )
            c-icon.__action(
                name="burger"
            )

</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'

import { Logo } from '@/shared/ui/Logo'
import { Icon } from '@/shared/ui/Icon'
import { LoginButton } from '@/features/auth'
import { Dealers } from '../../../Dealers'
import { RequestCall } from '../../../RequestCall'
import { Link } from '@/shared/ui/Link'

import DeviceProvider from '@/shared/lib/providers/device'

@Component({
    components: {
        'c-logo': Logo,
        'c-dealers': Dealers,
        'c-request-call': RequestCall,
        'c-login-button': LoginButton,
        'c-icon': Icon,
        'link-component': Link,
    },
})
export default class Top extends Vue {
    @Inject('$device') device!: DeviceProvider['device']
}
</script>

<style lang="scss" src="./Top.critical.scss" />
<style lang="scss" src="./Top.main.scss" />
