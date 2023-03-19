<template lang="pug">

section.b-addition
    .__container.container
        .__cards
            card-addition-component.__card(
                v-for="(card, index) in cards"
                :key="index"
                :imageSrc="card.image.src"
                :imageAlt="card.image.alt"
                :title="card.title"
                :description="card.description"
                :linkText="card.link.text"
                :linkHref="card.link.href"
            )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { CardAddition } from '../CardAddition'

@Component({
    components: {
        'card-addition-component': CardAddition,
    },
})
export default class Addition extends Vue {
    cards = [
        {
            image: {
                src: '',
                alt: '',
            },
            title: 'Помощь покупателю',
            description:
                'Узнайте как приобрести товар, способы доставки и оплаты, а также условия гарантии.',
            link: {
                text: 'Подробнее',
                href: '',
            },
        },
        {
            image: {
                src: '',
                alt: '',
            },
            title: 'Заявка на сервис',
            description:
                'Оставьте заявку на проведение гарантийного и постгарантийного ремонта.',
            link: {
                text: 'Оставить заявку',
                href: '',
            },
        },
        {
            image: {
                src: '',
                alt: '',
            },
            title: 'Личный кабинет партнера B2B',
            description:
                'Личный кабинет дилера с доступом к информационным материалам',
            link: {
                text: 'Стать партнером',
                href: '',
            },
        },
        {
            image: {
                src: '',
                alt: '',
            },
            title: 'Выставочный зал',
            description: 'Оставьте заявку на посещение шоу-рума в Москве',
            link: {
                text: 'Записаться',
                href: '',
            },
        },
    ]
}
</script>

<!--<style lang="scss" src="./Addition.critical.scss" />-->
<!--<style lang="scss" src="./Addition.main.scss" />-->
