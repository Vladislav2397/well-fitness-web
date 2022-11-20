<template lang="pug">

section.b-about
    .__container.container
        section-wrapper-component.__wrapper(
            title="О компании"
            buttonText="Подробнее о компании"
        )
            .__subtitle Надежный партнер с&nbsp;2005&nbsp;года для сотен компаний от Калининграда до&nbsp;Владивостока.
            .__description Оптима Импорт — один из самых крупных импортеров фитнес-оборудования, эксклюзивно представляет на российском рынке ведущих мировых производителей: Sole Fitness, Optima Fitness, Halley, Marcy, SKI Simulator и др. Мы предлагаем широкий спектр самой современной и качественной продукции как для домашнего, так и для коммерческого фитнеса.
            .__image
                img(
                    src=""
                    alt=""
                )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { SectionWrapper } from '../SectionWrapper'

@Component({
    components: {
        'section-wrapper-component': SectionWrapper
    }
})
export default class About extends Vue {}
</script>

<style lang="scss" src="./About.critical.scss" />
<!--<style lang="scss" src="./About.main.scss" />-->
