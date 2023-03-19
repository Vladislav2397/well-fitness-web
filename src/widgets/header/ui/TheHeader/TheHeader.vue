<template lang="pug">

header.b-the-header
    top-section.__top
    middle-section.__middle(
        v-if="device.size.desktop"
    )
    .__bottom
        .__container.container
            link-component.__link(
                v-for="({ text, href }, index) in additionItems"
                :key="index"
                :href="href"
                tag="router-link"
                icon="collapse"
                iconSize="s"
                theme="white"
            ) {{ text }}

</template>

<script setup lang="ts">
import { inject, defineEmits } from 'vue'

const device = inject('$device')

const emit = defineEmits<{
    (e: 'clickBurger'): void
    (e: 'clickCity'): void
    (e: 'clickSearch'): void
}>()

const clickSearchEmit = () => emit('clickSearch')
const clickBurgerEmit = () => emit('clickBurger')
const clickCityEmit = () => emit('clickCity')

const additionItems = [
    {
        text: 'Для дома',
        href: '/equipments/home',
    },
    {
        text: 'Для фитнес клуба',
        href: '/equipments/gym',
    },
]
</script>

<script lang="ts">
import { Logo } from '@/shared/ui/Logo'
import { Icon } from '@/shared/ui/Icon'
import { LoginButton } from '@/features/auth'
import { DropdownWrapper } from '@/shared/ui/DropdownWrapper'
import { Card } from '@/shared/ui/Card'

import { Top } from './sections/Top'
import { Middle } from './sections/Middle'
import { Navigation } from '../Navigation'
import { Dealers } from '../Dealers'
import { RequestCall } from '../RequestCall'
import { Link } from '@/shared/ui/Link'
import { Button } from '@/shared/ui/Button'

export default {
    components: {
        'c-card': Card,
        'c-dropdown': DropdownWrapper,
        'c-logo': Logo,
        'c-dealers': Dealers,
        'c-request-call': RequestCall,
        'c-login-button': LoginButton,
        'c-icon': Icon,
        'c-navigation': Navigation,
        'link-component': Link,
        'button-component': Button,

        'middle-section': Middle,
        'top-section': Top,
    },
}
</script>

<style lang="scss" src="./TheHeader.critical.scss" />
