<template lang="pug">

.rating
    span._label(
        v-if="hasLabel"
        :class="{ 'rating__label--bold': isBold }"
    )
        template(
            v-if="$slots.default"
        ): slot
        template(
            v-else
        ) Рейтинг
    ._list
        ._star(
            v-for="i in 5"
            :key="i"
            :class="{ 'rating__star--fill' : i <= count }"
        )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Rating extends Vue {
    @Prop({ default: 0 }) readonly count?: 0 | 1 | 2 | 3 | 4 | 5

    @Prop({ default: true }) readonly hasLabel!: boolean

    @Prop() readonly isBold!: boolean
}

</script>

<style lang="scss">
.rating {
    font-size: toRem(14);
    line-height: toRem(20);

    vertical-align: middle;
    color: $secondary;

    &__list {
        display: inline-block;
        vertical-align: middle;
        color: #f99808;
    }

    &__label {
        &--bold {
            font-weight: 600;
        }
    }

    &__label + &__list {
        margin-left: toRem(6);
    }

    &__star {
        width: toRem(10);
        height: toRem(10);
        display: inline-block;
        border: 1px solid;

        &--fill {
            background-color: #f99808; // FIXME: make a var
        }

        & + & {
            margin-left: toRem(2);
        }
    }
}
</style>
