<template lang="pug">

.b-login-button
    span Войти
    avatar-component.__avatar

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import { Avatar } from '@/shared/ui/Avatar'

@Component({
    components: {
        'avatar-component': Avatar,
    }
})
export default class LoginButton extends Vue {

}

</script>
