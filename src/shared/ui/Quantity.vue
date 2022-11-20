<template lang="pug">

.quantity(
    :class="`quantity--${state.class}`"
)
    | {{ state.label }}
    ._list
        ._dot(
            v-for="i in 3"
            :key="i"
            :class="{ 'quantity__dot--fill' : i <= count }"
        )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Quantity extends Vue {
    @Prop() readonly count!: 0 | 1 | 2 | 3

    get state(): { label: string, class: string } {
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
                class: 'success'
            }
        }
    }
}

</script>

<style lang="scss">
.quantity {
    color: var(--color);

    &--error {
        --color: #f53b49;
    }

    &--warning {
        --color: #f99808; // FIXME: Make a var
    }

    &--success {
        --color: #2fc509;
    }

    &__list {
        display: inline-block;
        margin-left: toRem(6);
    }

    &__dot {
        width: toRem(6);
        height: toRem(6);
        border: 1px solid;
        border-radius: 50%;
        display: inline-block;

        &--fill {
            background-color: var(--color);
        }

        & + & {
            margin-left: toRem(2);
        }
    }
}
</style>
