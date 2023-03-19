<template lang="pug">

.b-articles
    page-breadcrumb-layout.__breadcrumb
    .__container.container
        .__filters
            c-button.__button(
                v-for="filter in filters"
                :theme="filter.theme"
                size="s"
            ) {{ filter.text }}
        .__blog(
            v-if="isPending"
        )
            p Loading...
        .__blog(
            v-else
        )
            c-article-card.__item(
                v-for="article in list"
                :article="article"
            )
        c-pagination.__pagination(
            :max-items="9"
            :total="pagination.lastPage"
            @changePage="changePage"
        )

</template>

<script lang="ts">
import { Ref } from 'vue'
import { Component, Vue } from 'vue-property-decorator'

import { ArticleCard } from '@/entities/article'

import { PageBreadcrumbLayout } from '@/shared/layout/PageBreadcrumbLayout'
import { Button } from '@/shared/ui/Button'
import { Pagination } from '@/shared/ui/Pagination'
import { domain } from '@/shared/lib'

import { useArticles } from './model'

@Component({
    components: {
        'c-pagination': Pagination,
        'c-article-card': ArticleCard,
        'page-breadcrumb-layout': PageBreadcrumbLayout,
        'c-button': Button,
    },
    setup() {
        return useArticles()
    },
})
export default class Articles extends Vue {
    page = 1

    isPending!: Ref<boolean>
    list!: domain.Article[]
    pagination!: { page: string; perPage: string; lastPage: string }
    changePage!: (page: number) => Promise<void>

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
}
</script>

<!-- <style lang="scss" src="./Articles.critical.scss" /> -->
<!-- <style lang="scss" src="./Articles.main.scss" /> -->
