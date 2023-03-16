<template lang="pug">

.b-articles
    page-breadcrumb-layout.__breadcrumb
    .__container.container
        .__filters
            c-button.__button(
                v-for="filter in filters"
                :theme="filter.theme"
            ) {{ filter.text }}
        .__blog
            c-article-card.__item(
                v-for="article in list"
                :article="article"
            )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { PageBreadcrumbLayout } from '@/shared/layout/PageBreadcrumbLayout'
import { Button } from '@/shared/ui/Button'
import { ArticleCard, articleApi } from '@/entities/article'

@Component({
    components: {
        'c-article-card': ArticleCard,
        'page-breadcrumb-layout': PageBreadcrumbLayout,
        'c-button': Button,
    },
})
export default class Articles extends Vue {
    get filters(): ({ text: string } & Pick<Button, 'theme'>)[] {
        return [
            {
                text: 'Статьи в блоге',
                theme: 'brand',
            },
            {
                text: 'Последние новости',
                theme: 'secondary',
            },
        ]
    }

    async fetch(params = { limit: 9, offset: 0 }) {
        this.list = await articleApi.getArticles(params)
    }

    list: ArticleCard['article'][] = []

    async created() {
        await this.fetch()
    }
}
</script>

<!-- <style lang="scss" src="./Articles.critical.scss" /> -->
<!-- <style lang="scss" src="./Articles.main.scss" /> -->
