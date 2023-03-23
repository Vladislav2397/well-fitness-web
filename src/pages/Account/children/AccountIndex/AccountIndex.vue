<template lang="pug">

.b-account-index
    .__list
        c-account-index-card.__card(
            v-for="card in cards"
            :key="card.title"
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
                description: `<b>Самовывоз</b>\n14 июля с 10:00-12:00`,
                link: {
                    text: 'Подробнее',
                    to: '/account/delivery',
                },
            },
            {
                title: 'Ближайшая доставка',
                description: `<b>Самовывоз</b>\n14 июля с 10:00-12:00`,
                link: {
                    text: 'Подробнее',
                    to: '/account/delivery',
                },
            },
            {
                title: 'Ближайшая доставка',
                description: `<b>Самовывоз</b>\n14 июля с 10:00-12:00`,
                link: {
                    text: 'Подробнее',
                    to: '/account/delivery',
                },
            },
            {
                title: 'Ближайшая доставка',
                description: `<b>Самовывоз</b>\n14 июля с 10:00-12:00`,
                link: {
                    text: 'Подробнее',
                    to: '/account/delivery',
                },
            },
            {
                title: 'Ближайшая доставка',
                description: `<b>Самовывоз</b>\n14 июля с 10:00-12:00`,
                link: {
                    text: 'Подробнее',
                    to: '/account/delivery',
                },
            },
            {
                title: 'Ближайшая доставка',
                description: `<b>Самовывоз</b>\n14 июля с 10:00-12:00`,
                link: {
                    text: 'Подробнее',
                    to: '/account/delivery',
                },
            },
        ]
    }
}
</script>

<!-- <style lang="scss" src="./AccountIndex.critical.scss" /> -->
<!-- <style lang="scss" src="./AccountIndex.main.scss" /> -->
