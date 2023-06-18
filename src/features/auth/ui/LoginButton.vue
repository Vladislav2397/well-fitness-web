<template lang="pug">

.b-login-button(
    @click="openModal"
)
    span Войти
    avatar-component.__avatar

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Avatar } from '@/shared/ui/Avatar'

@Component({
    components: {
        'avatar-component': Avatar,
    },
})
export default class LoginButton extends Vue {
    openModal(): void {
        this.$router.push('/account')
        // this.$store?.dispatch('modals/openModal', 'login')
    }
}
</script>

<style lang="scss">
.login-button {
    color: #fff;

    span,
    &__avatar {
        display: inline-block;
        vertical-align: middle;
    }

    span {
        @include fontSize(p3);
    }

    &__avatar {
        margin-left: toRem(8);
        height: toRem(20);
        width: toRem(20);
    }
}
</style>
