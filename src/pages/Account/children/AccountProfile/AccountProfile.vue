<template lang="pug">

form.b-account-profile
    viewer-bio.__bio(
        :viewer="{ name: 'Костя Константинопольский' }"
    )
    .__form
        c-input.__field(
            v-model="value.phone"
            name="phone"
        )
        c-input.__field(
            v-model="value.email"
            name="email"
        )
        c-input.__field(
            v-model="value.birthday"
            name="birthday"
        )
        c-input.__field(
            v-model="value.gender"
            name="gender"
        )
        c-input.__field(
            v-model="value.city"
            name="city"
        )
        c-input.__field(
            v-model="value.address"
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
