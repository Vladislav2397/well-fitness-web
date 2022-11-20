<template lang="pug">

.b-range
    .__top
        input-component.__start(
            v-model="slider.value[0]"
            size="inherit"
        )
        .__divider
        input-component.__end(
            v-model="slider.value[1]"
            size="inherit"
        )

    .__bar
        //slider-component(
        //    v-model="slider.value"
        //    :max="10000"
        //    :min="0"
        //    :lazy="true"
        //    :height="2"
        //)

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import { Input } from '@/shared/ui/Input'
// import VueSlider from 'vue-slider-component'

@Component({
    components: {
        'input-component': Input,
        // 'slider-component': VueSlider
    }
})
export default class Range extends Vue {
    @Prop() readonly range!: [start: number, end: number]

    slider = {
        value: [] as number[]
    }

    mounted(): void {
        this.slider.value = [this.range[0], this.range[1]]
    }
}

</script>

<style lang="scss" src="./Range.critical.scss" />
