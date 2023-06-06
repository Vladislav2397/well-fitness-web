<template lang="pug">

.b-brands
    page-breadcrumb-layout.__breadcrumb
    .__container.container
        .__filters
            c-button.__filter(
                v-for="filter in filters"
                :key="filter.key"
                :theme="filter.key === active ? 'brand' : 'secondary'"
                size="s"
                @click="updateActive(filter.key)"
            ) {{ filter.text }}
        .__list
            .__item(
                v-for="brand in brands"
            )
                img(
                    :src="brand.logo"
                    :alt="brand.name"
                )

</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { PageBreadcrumbLayout } from '@/shared/layout/PageBreadcrumbLayout'
import { Button } from '@/shared/ui/Button'

export type BrandsProps = {
    //
}

const getBrands = async (category: string | number | null) => {
    const response = await fetch(
        category
            ? `http://localhost:8000/api/brands?category=${category}`
            : 'http://localhost:8000/api/brands'
    )

    return response.json()
}

const getFilters = async () => {
    const response = await fetch('http://localhost:8000/api/categories')

    return response.json()
}

@Component({
    components: {
        'page-breadcrumb-layout': PageBreadcrumbLayout,
        'c-button': Button,
    },
})
export default class Brands extends Vue {
    active: number | string | null = null

    updateActive(categoryId: string) {
        this.active = categoryId
    }

    brands: { id: number; name: string; logo: string }[] = []
    filters: { key: string; text: string }[] = []

    async updateBrands() {
        this.brands = await getBrands(this.active ?? null)
    }

    async created() {
        this.filters = await getFilters()
    }

    @Watch('active', { immediate: true })
    onChangeActive() {
        this.updateBrands()
    }
}
</script>

<!-- <style lang="scss" src="./Brands.critical.scss" /> -->
<!-- <style lang="scss" src="./Brands.main.scss" /> -->
