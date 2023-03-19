<template lang="pug">

.b-article(
    v-if="isPending"
)
    .__container.container
        p Loading...
.b-article(
    v-else
)
    page-breadcrumb-layout.__breadcrumbs(
        :breadcrumbs="breadcrumbs"
        :title="title"
    )
    .__container.container
        router-link.__back(
            to="/articles"
        ) Назад к новостям
        .__banner
            img(
                src="https://loremflickr.com/640/480/sports?lock=26800"
                alt="Banner"
            )
        .__content.text(
            v-html="content"
        )

</template>

<script lang="ts">
import { Ref } from 'vue'
import { Component, Vue } from 'vue-property-decorator'

import { PageBreadcrumbLayout } from '@/shared/layout/PageBreadcrumbLayout'
import { type domain } from '@/shared/lib'

import { useArticle } from './model'
import { useRoute } from 'vue-router/composables'

export type ArticleProps = {
    //
}

@Component({
    components: {
        'page-breadcrumb-layout': PageBreadcrumbLayout,
    },
    setup() {
        const route = useRoute()

        return useArticle(+route.params.id)
    },
})
export default class Article extends Vue {
    article!: domain.Article
    isPending!: Ref<boolean>

    get title() {
        return 'title'
    }
    get breadcrumbs() {
        return ['Блог', this.title]
    }

    get content() {
        return ''
    }
}
</script>

<!-- <style lang="scss" src="./Article.critical.scss" /> -->
<!-- <style lang="scss" src="./Article.main.scss" /> -->
