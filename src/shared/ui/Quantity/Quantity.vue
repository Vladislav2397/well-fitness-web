<template lang="pug">

.b-quantity(
    :class="`quantity--${state.class}`"
)
    | {{ state.label }}
    .__list
        .__dot(
            v-for="i in 3"
            :key="i"
            :class="{ 'quantity__dot--fill' : i <= count }"
        )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export type QuantityProps = Pick<Quantity, 'count'>

@Component
export default class Quantity extends Vue {
    @Prop() readonly count!: 0 | 1 | 2 | 3

    get state(): { label: string; class: string } {
        switch (this.count) {
            case 0:
                return {
                    label: 'Нет в наличии',
                    class: 'error',
                }
            case 1:
                return {
                    label: 'Осталось мало',
                    class: 'warning',
                }
            default:
                return {
                    label: 'В наличии',
                    class: 'success',
                }
        }
    }
}
</script>

<!--<style lang="scss" src="./Quantity.critical.scss"/>-->
<!--<style lang="scss" src="./Quantity.main.scss"/>-->
