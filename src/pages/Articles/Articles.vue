<template lang="pug">

.b-articles
    page-breadcrumb-layout.__breadcrumb
    .__container.container
        .__filters
            c-button.__button(
                v-for="filter in buttons"
                :theme="isActiveFilter(filter.type)"
                size="s"
                @click="changeType(filter.type)"
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
            :page="pagination.page"
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

type FilterType = 'blog' | 'news'

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

    // filter: 'blog' | 'news' = 'blog'

    isPending!: Ref<boolean>
    list!: domain.Article[]
    filters!: { type: FilterType }
    pagination!: { page: string; perPage: string; lastPage: string }
    changePage!: (page: number) => Promise<void>
    changeType!: (type: FilterType) => Promise<void>

    isActiveFilter(type: FilterType): Button['theme'] {
        return this.filters.type === type ? 'brand' : 'secondary'
    }

    get buttons(): { type: FilterType; text: string }[] {
        return [
            {
                type: 'blog',
                text: 'Статьи в блоге',
            },
            {
                type: 'news',
                text: 'Последние новости',
            },
        ]
    }
}
</script>

<!-- <style lang="scss" src="./Articles.critical.scss" /> -->
<!-- <style lang="scss" src="./Articles.main.scss" /> -->
