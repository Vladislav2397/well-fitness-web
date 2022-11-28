<template lang="pug">

.b-rating
    span.__label(
        v-if="hasLabel"
        :class="{ 'rating__label--bold': isBold }"
    )
        template(
            v-if="$slots.default"
        ): slot
        template(
            v-else
        ) Рейтинг
    .__list
        .__star(
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

<!--<style lang="scss" src="./Rating.critical.scss"/>-->
<!--<style lang="scss" src="./Rating.main.scss"/>-->
