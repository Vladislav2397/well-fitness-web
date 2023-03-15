<template lang="pug">

.b-article-card
    .__image
        img(
            :src="article.image.src"
            :alt="article.image.alt"
        )
    .__content
        .__title.typo.typo--size-h4 {{ article.title }}
        .__description.typo.typo--size-p3 {{ article.description }}
        .__date.typo.typo--size-p3.typo--view-secondary {{ articleDate }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { domain } from '@/shared/lib'

export type ArticleCardProps = Pick<ArticleCard, 'article'>

@Component
export default class ArticleCard extends Vue {
    @Prop() readonly article!: Pick<
        domain.Article,
        'image' | 'title' | 'description' | 'date'
    >

    get articleDate() {
        return '12.12.2020'
    }
}
</script>

<!-- <style lang="scss" src="./ArticleCard.critical.scss" /> -->
<!-- <style lang="scss" src="./ArticleCard.main.scss" /> -->
