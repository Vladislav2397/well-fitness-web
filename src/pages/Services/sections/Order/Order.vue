<template lang="pug">

.b-order
    p.__describe.typo.typo--size-p3 Заполните заявку на сервис онлайн, и мы подберем наиболее удобный для вас вариант обслуживания. Наши специалисты свяжутся с вами в кратчайшие сроки!
    form.__form
        .__row
            c-brand-select.__field(
                v-model="form.brand"
                label="Бренд"
                placeholder="Бренд"
                name="brand"
                @input="onInput"
            )
            c-model-select.__field(
                v-model="form.model"
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
import { Input, Select } from '@/shared/ui'
import { BrandSelect } from '@/entities/brand'
import ModelSelect from './ModelSelect'

export type OrderProps = {
    //
}

@Component({
    components: {
        'input-component': Input,
        'c-select': Select,
        'c-brand-select': BrandSelect,
        'c-model-select': ModelSelect,
    },
})
export default class Order extends Vue {
    form = {
        brand: null,
        model: null,
        serialNumber: '',
        brandNumber: '',
        date: '',
        description: '',
        city: '',
        street: '',
        house: '',
        build: '',
        room: '',
        name: '',
        phone: '',
        email: '',
    }

    onInput(value: string) {
        console.log('onInput', value)
    }
}
</script>

<!-- <style lang="scss" src="./Order.critical.scss" /> -->
<!-- <style lang="scss" src="./Order.main.scss" /> -->
