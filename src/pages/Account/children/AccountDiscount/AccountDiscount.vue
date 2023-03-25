<template lang="pug">

.b-account-discount
    .__cards
        account-value-card.__card(
            v-for="({ title, description, value }, index) in cards"
            :key="index"
            :title="title"
            :description="description"
            :value="value"
        )
    .__information
        .__title.typo.typo--size-h3 Расчет скидки
        .__table
            .__row(
                v-for="row in discountTable"
            )
                .__item.typo.typo--size-p3
                    | {{ row.condition }}
                .__item.typo.typo--size-p3.typo--weight-bold
                    | {{ row.result }}

    //c-table.__table(
    //    :list="discountTable"
    //)
    //    template(
    //        #default="{ item }"
    //    )
    //        .typo.typo--size-p4 {{ item.condition }}
    //        .typo.typo--size-p4.typo--weight-bold {{ item.result }}

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AccountValueCard } from '@/pages/Account/children/AccountValueCard'
import { Table } from '@/shared/ui/Table'

export type AccountDiscountProps = {
    //
}

@Component({
    components: {
        'c-table': Table,
        'account-value-card': AccountValueCard,
    },
})
export default class AccountDiscount extends Vue {
    get cards() {
        return [
            {
                title: 'Ваша скидка',
                value: '15%',
                description:
                    'Скидка клиента автоматически применяется в Корзине',
            },
            {
                title: 'Сумма выкупа',
                value: '1 640 630 ₽',
                description: 'Скидка клиента зависит от суммы выкупа',
            },
        ]
    }

    get discountTable() {
        return [
            {
                condition: 'от 100 000 ₽',
                result: '5%',
            },
            {
                condition: 'от 500 000 ₽',
                result: '7%',
            },
            {
                condition: 'от 1 000 000 ₽',
                result: '10%',
            },
        ]
    }
}
</script>

<!-- <style lang="scss" src="./AccountDiscount.critical.scss" /> -->
<!-- <style lang="scss" src="./AccountDiscount.main.scss" /> -->
