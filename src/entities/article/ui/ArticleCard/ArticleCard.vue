<template lang="pug">

.b-article-card(
    @click="clickEmit"
)
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
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { domain } from '@/shared/lib'

export type ArticleCardProps = Pick<ArticleCard, 'article'>

@Component
export default class ArticleCard extends Vue {
    @Prop() readonly article!: Pick<
        domain.Article,
        'image' | 'title' | 'description' | 'date'
    >

    @Emit('click') clickEmit() {
        return null
    }

    get articleDate() {
        const date = new Date(this.article.date)

        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
    }
}
</script>

<!-- <style lang="scss" src="./ArticleCard.critical.scss" /> -->
<!-- <style lang="scss" src="./ArticleCard.main.scss" /> -->
