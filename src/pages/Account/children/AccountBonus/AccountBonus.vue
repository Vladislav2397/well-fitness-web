<template lang="pug">

.b-account-bonus
    account-value-card.__card(
        v-bind="card"
    )
    .__table
        .__row(
            v-for="row in table"
        )
            .__item.-wide
                .typo.typo--size-p4 {{ row.date }}
                .typo.typo--size-p4 {{ row.type }}
            .__item.typo.typo--size-p4.typo--weight-bold
                | {{ row.value }}

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
    AccountValueCard,
    type AccountValueCardProps,
} from '@/pages/Account/children/AccountValueCard'

export type AccountBonusProps = {
    //
}

@Component({
    components: {
        'account-value-card': AccountValueCard,
    },
})
export default class AccountBonus extends Vue {
    get card(): AccountValueCardProps {
        return {
            title: 'Баланс Бонусных рублей',
            description: 'Успейте потратить 2000 Бонусных рублей до 09.10.2021',
            value: '2000',
        }
    }

    get table() {
        return [
            {
                date: '26.03.2021',
                type: 'Бонусные рубли в подарок',
                value: '500',
            },
            {
                date: '27.03.2021',
                type: 'Бонусные рубли в подарок',
                value: '1000',
            },
            {
                date: '29.03.2021',
                type: 'Бонусные рубли в подарок',
                value: '300',
            },
            {
                date: '11.04.2021',
                type: 'Бонусные рубли в подарок',
                value: '1500',
            },
            {
                date: '24.05.2021',
                type: 'Бонусные рубли в подарок',
                value: '500',
            },
        ]
    }
}
</script>

<!-- <style lang="scss" src="./AccountBonus.critical.scss" /> -->
<!-- <style lang="scss" src="./AccountBonus.main.scss" /> -->
