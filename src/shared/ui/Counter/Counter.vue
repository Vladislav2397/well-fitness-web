<template lang="pug">

.b-counter
    button.-_button(
        v-on:click="decrement"
    ) -
    span.__digit {{ count }}
    button.__button(
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

<!--<style lang="scss" src="./Counter.critical.scss"/>-->
<!--<style lang="scss" src="./Counter.main.scss"/>-->
