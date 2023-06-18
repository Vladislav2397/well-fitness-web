<template lang="pug">

.b-cart-total-info
    .__row
        p Итого {{ info.totalPrice }}руб
    .__row
        p Товары {{ info.count }}шт {{ info.countPrice }}руб
        p Скидка {{ info.stock }}руб
    .__row
        c-button Перейти к оформлению
        c-button Купить в 1 клик
        c-button Сделать коммерческое предложение
        c-checkbox Использовать бонусные баллы <br /> Требуется авторизация

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Checkbox } from '@/shared/ui/Checkbox'
import { Button } from '@/shared/ui'

@Component({
    components: { 'c-checkbox': Checkbox, 'c-button': Button },
})
export default class CartTotalInfo extends Vue {
    get length() {
        return this.$store.getters['cart/length']
    }

    get info() {
        return this.$store.getters['cart/info']
    }
}
</script>
