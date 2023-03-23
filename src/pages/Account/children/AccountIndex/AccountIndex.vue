<template lang="pug">

.b-account-index
    c-account-index-card.__card(
        v-for="(card, index) in cards"
        :class="{ 'is-active': index === 0 }"
        :key="index"
        v-bind="card"
    )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AccountIndexCard } from './AccountIndexCard'

export type AccountIndexProps = {
    //
}

@Component({
    components: {
        'c-account-index-card': AccountIndexCard,
    },
})
export default class AccountIndex extends Vue {
    get cards() {
        return [
            {
                title: 'Ближайшая доставка',
                description: `<b>Самовывоз</b><br />14 июля с 10:00-12:00`,
                link: {
                    text: 'Подробнее',
                    to: '/account/delivery',
                },
            },
            {
                title: 'Заказы',
                description: `<b>Самовывоз</b>\n14 июля с 10:00-12:00`,
                link: {
                    text: 'Все заказы',
                    to: '/account/orders',
                },
            },
            {
                title: 'Ваша скидка',
                description: `<b>Самовывоз</b>\n14 июля с 10:00-12:00`,
                link: {
                    text: 'Подробнее',
                    to: '/account/discount',
                },
            },
            {
                title: 'Баланс Бонусных рублей',
                description: `<b>Самовывоз</b>\n14 июля с 10:00-12:00`,
                link: {
                    text: 'Подробнее',
                    to: '/account/bonus',
                },
            },
            {
                title: 'Инструкции',
                description: `<b>Самовывоз</b>\n14 июля с 10:00-12:00`,
                link: {
                    text: 'Подробнее',
                    to: '/account/instruction',
                },
            },
            {
                title: 'Ваши обращения',
                description: `<b>Самовывоз</b>\n14 июля с 10:00-12:00`,
                link: {
                    text: 'Написать',
                    to: '/account/feedback',
                },
            },
        ]
    }
}
</script>

<!-- <style lang="scss" src="./AccountIndex.critical.scss" /> -->
<!-- <style lang="scss" src="./AccountIndex.main.scss" /> -->
