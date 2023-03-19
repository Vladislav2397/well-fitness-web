<template lang="pug">

.b-carousel
    .__container.container
        .__swiper
        //c-swiper.__swiper
        //    c-swiper-slide.__slide
        //        .__caption
        //            span.__brand zero runner
        //            h2.__title Бег с нулевой#[br]ударной#[br]нагрузкой#[br]
        //                span на&nbsp;суставы
        //            button-component.__button(
        //                tag="button"
        //                theme="ghost-brand"
        //            ) Узнать больше
        //        .__triangle
        //            img(
        //                src="/images/index/triangle.svg"
        //            )
        //        .__image
        //            img(
        //                src="/images/carousel/1.png"
        //            )
        //    .__controls
        //        c-button-icon.__action.-left
        //        c-button-icon.__action.-right

</template>

<script lang="ts">
// import { directive, Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { ButtonIcon } from '@/shared/ui/ButtonIcon'

export default {
    components: {
        'c-button-icon': ButtonIcon,
        // 'c-swiper': Swiper,
        // 'c-swiper-slide': SwiperSlide
    },
    directives: {
        // swiper: directive
    },
}
</script>

<!--<style lang="scss" src="./Carousel.critical.scss"></style>-->
<!--<style lang="scss" src="./Carousel.main.scss"></style>-->
