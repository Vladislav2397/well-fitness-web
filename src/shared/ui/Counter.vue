<template lang="pug">

.counter
    button._button(
        v-on:click="decrement"
    ) -
    span._digit {{ count }}
    button._button(
        v-on:click="increment"
    ) +

</template>

<script lang="ts">
import { Component, Prop, VModel, Vue } from 'vue-property-decorator'

let timeout: ReturnType<typeof setTimeout>

@Component
export default class Counter extends Vue {
    @Prop() readonly max!: number
    @Prop() readonly min!: number

    @VModel() count!: string | number

    beforeDestroy() {
        clearTimeout(timeout)
    }

    increment() {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            this.count = +(this.count) + 1
        }, 50)
    }

    decrement() {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            this.count = +(this.count) - 1
        }, 50)
    }
}

</script>

<style lang="scss">
.counter {
    &__button,
    &__digit {
        display: inline-block;
        vertical-align: middle;
    }

    &__button {
        width: toRem(28);
        height: toRem(28);
        border-radius: 50%;
        border: 1px solid;
    }

    &__digit {
        margin-left: toRem(12);
        margin-right: toRem(12);
        color: #858fa4;
    }
}
</style>
