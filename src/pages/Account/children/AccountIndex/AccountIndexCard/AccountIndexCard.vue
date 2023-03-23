<template lang="pug">

.b-account-index-card
    .__title.typo.typo--size-h5 {{ title }}
    .__description(
        v-html="description"
    )
    router-link.__link.typo.typo--size-p4(
        :to="link.to"
    ) {{ link.text }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export type AccountIndexCardProps = {
    title: AccountIndexCard['title']
    description: AccountIndexCard['description']
    link: AccountIndexCard['link']
}

@Component
export default class AccountIndexCard extends Vue {
    @Prop() readonly title!: string
    @Prop() readonly description!: string
    @Prop() readonly link!: { text: string; to: string }
}
</script>

<!-- <style lang="scss" src="./AccountIndexCard.critical.scss" /> -->
<!-- <style lang="scss" src="./AccountIndexCard.main.scss" /> -->
