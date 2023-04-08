<template lang="pug">

.b-order
    p.__describe.typo.typo--size-p3 Заполните заявку на сервис онлайн, и мы подберем наиболее удобный для вас вариант обслуживания. Наши специалисты свяжутся с вами в кратчайшие сроки!
    form.__form
        .__row
            input-component.__field(
                label="Бренд"
                placeholder="Бренд"
                name="brand"
            )
            input-component.__field(
                label="Модель"
                placeholder="Модель"
                name="model"
            )
        .__row
            input-component.__field(
                label="Серийный номер"
                placeholder="XXX XXX XXX XXX"
                name="serialNumber"
            )
        .__row
            input-component.__field(
                label="Номер гарантийного талона"
                placeholder="XXX XXX XXX XXX"
                name="brandNumber"
            )
        .__row
            input-component.__field.-limited(
                label="Дата покупки"
                placeholder="00 / 00 / 0000"
                name="date"
            )
        .__row
            input-component.__field(
                label="Описание неисправности"
                name="description"
            )
        .__divider
        .__row
            input-component.__field(
                label="Город"
                placeholder="Москва"
                name="city"
            )
            input-component.__field(
                label="Улица"
                placeholder="Металлургов"
                name="street"
            )
        .__row
            input-component.__field(
                label="Дом"
                placeholder="165"
                name="house"
            )
            input-component.__field(
                label="Корпус / Строение"
                name="build"
            )
            input-component.__field(
                label="Квартира"
                placeholder="20"
                name="room"
            )
        .__divider
        .__row
            input-component.__field(
                label="ФИО"
                placeholder="Иванов Иван Иванович"
                name="name"
            )
        .__row
            input-component.__field(
                label="Телефон"
                placeholder="+7 (000) 000-00-00"
                name="phone"
            )
            input-component.__field(
                label="E-mail"
                placeholder="email@gmail.com"
                name="email"
            )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Input } from '@/shared/ui'

export type OrderProps = {
    //
}

@Component({
    components: {
        'input-component': Input,
    },
})
export default class Order extends Vue {
    //
}
</script>

<!-- <style lang="scss" src="./Order.critical.scss" /> -->
<!-- <style lang="scss" src="./Order.main.scss" /> -->
