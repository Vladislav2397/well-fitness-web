<template lang="pug">

.b-account-value-card
    .__top
        .__title.typo.typo--size-h4 {{ title }}
        .__value(
            :class="['typo', `typo--size-${$device.size.mobile ? 'h3' : 'h1'}`]"
        ) {{ value }}
    .__description.typo.typo--size-p4 {{ description }}

</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator'
import DeviceProvider from '@/shared/lib/providers/device'

export type AccountValueCardProps = Pick<
    AccountValueCard,
    'title' | 'description' | 'value'
>

const options = { required: true }

@Component
export default class AccountValueCard extends Vue {
    @Inject('$device') $device!: DeviceProvider['device']

    @Prop(options) readonly title!: string
    @Prop(options) readonly description!: string
    @Prop(options) readonly value!: string
}
</script>

<!-- <style lang="scss" src="./AccountValueCard.critical.scss" /> -->
<!-- <style lang="scss" src="./AccountValueCard.main.scss" /> -->
