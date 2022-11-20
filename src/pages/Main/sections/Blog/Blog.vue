<template lang="pug">

section.b-blog
    .__container.container
        section-wrapper-component.__wrapper(
            buttonText="Все новости"
        )
            template(
                v-slot:title
            )
                tab-list-component.__tabs.scroll-row(
                    v-model="activeTabIndex"
                    :list="tabList"
                )
            template
                .__list.scroll-row
                    //card-post-component._item(
                    //    v-for="card in cardList"
                    //    :key="card.id"
                    //    :imageSrc="card.image.src"
                    //    :imageAlt="card.image.alt"
                    //    :title="card.title"
                    //    :description="card.description"
                    //    :date="card.date"
                    //)

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { SectionWrapper } from '@/pages/Main/sections/SectionWrapper'
import TabList from '@/shared/ui/TabList.vue'
// import {CardPost} from '@/entities/post/ui/CardPost'

@Component({
    components: {
        'section-wrapper-component': SectionWrapper,
        'tab-list-component': TabList,
        // 'card-post-component': CardPost,
    }
})
export default class Blog extends Vue {
    activeTabIndex = 0

    tabList = [
        'Новости',
        'Блог',
    ]

    cardList = [
        {
            id: 1,
            image: {
                src: '',
                alt: '',
            },
            title: 'В продажу поступили тренажеры Nautilus',
            description: 'Представляем тренажеры Nautilus 626 серии.',
            date: '12.09.2021',
        },
        {
            id: 2,
            image: {
                src: '',
                alt: '',
            },
            title: 'В продажу поступили тренажеры Nautilus',
            description: 'Представляем тренажеры Nautilus 626 серии.',
            date: '12.09.2021',
        },
        {
            id: 3,
            image: {
                src: '',
                alt: '',
            },
            title: 'В продажу поступили тренажеры Nautilus',
            description: 'Представляем тренажеры Nautilus 626 серии.',
            date: '12.09.2021',
        },
        {
            id: 4,
            image: {
                src: '',
                alt: '',
            },
            title: 'В продажу поступили тренажеры Nautilus',
            description: 'Представляем тренажеры Nautilus 626 серии.',
            date: '12.09.2021',
        },
    ]
}

</script>

<style lang="scss" src="./blog--critical.scss"></style>
<!--<style lang="scss" src="./blog&#45;&#45;main.scss"></style>-->
