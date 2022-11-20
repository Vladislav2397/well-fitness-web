<template lang="pug">

.user
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export interface UserModel {
    avatar: string
    name: string
    date: string
}

@Component
export default class User extends Vue {
    @Prop() readonly avatar!: string
    @Prop() readonly name!: string
    @Prop() readonly date!: string
}

</script>
