<template lang="pug">

form.b-account-profile
    viewer-bio.__bio(
        :viewer="{ name: 'Костя Константинопольский' }"
    )
    .__form
        c-input.__field(
            v-model="value.phone"
            label="Телефон"
            placeholder="+7 900 900-90-90"
            name="phone"
        )
        c-input.__field(
            v-model="value.email"
            label="E-mail"
            placeholder="Введите e-mail"
            name="email"
        )
        c-input.__field(
            v-model="value.birthday"
            label="Дата рождения"
            placeholder="Выберите дату рождения"
            name="birthday"
        )
        c-input.__field(
            v-model="value.gender"
            label="Пол"
            placeholder="Выберите пол"
            name="gender"
        )
        c-input.__field(
            v-model="value.city"
            label="Город"
            placeholder="Введите город"
            name="city"
        )
        c-input.__field(
            v-model="value.address"
            label="Адрес"
            placeholder="Введите адрес"
            name="address"
        )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ViewerBio from '@/entities/viewer/ui/ViewerBio/ViewerBio.vue'
import Input from '@/shared/ui/Input/Input.vue'

export type AccountProfileProps = {
    //
}

@Component({
    components: {
        'c-input': Input,
        'viewer-bio': ViewerBio,
    },
})
export default class AccountProfile extends Vue {
    value = {
        phone: '',
        email: '',
        birthday: '',
        gender: '',
        city: '',
        address: '',
    }
}
</script>

<!-- <style lang="scss" src="./AccountProfile.critical.scss" /> -->
<!-- <style lang="scss" src="./AccountProfile.main.scss" /> -->
