<template lang="pug">

.b-brands
    page-breadcrumb-layout.__breadcrumb
    .__container.container
        .__filters
            c-button.__filter(
                v-for="(filter, index) in filters"
                :key="index"
                :theme="index === active ? 'brand' : 'secondary'"
                size="s"
                @click="updateActive(index)"
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

const getBrands = async (category: number | null) => {
    console.log('request brands', category)

    const response = await fetch(
        category
            ? `http://localhost:8000/api/brands?category=${category}`
            : 'http://localhost:8000/api/brands'
    )

    return response.json()
}

@Component({
    components: {
        'page-breadcrumb-layout': PageBreadcrumbLayout,
        'c-button': Button,
    },
})
export default class Brands extends Vue {
    active: number | null = null

    updateActive(index: number) {
        this.active = index
    }

    brands: { id: number; name: string; logo: string }[] = []

    async updateBrands() {
        this.brands = await getBrands(this.active)
    }

    get filters() {
        return [
            {
                key: 'begovie-dorozhki',
                text: 'Беговые дорожки',
            },
            {
                key: 'elipticheskie',
                text: 'Эллиптические',
            },
            {
                key: 'elipticheskie',
                text: 'Велотренажеры',
            },
            {
                key: 'elipticheskie',
                text: 'Cтепперы',
            },
            {
                key: 'elipticheskie',
                text: 'Горнолыжные',
            },
            {
                key: 'elipticheskie',
                text: 'Гребные тренажеры',
            },
            {
                key: 'elipticheskie',
                text: 'Гребные тренажеры',
            },
            {
                key: 'elipticheskie',
                text: 'Гребные тренажеры',
            },
            {
                key: 'elipticheskie',
                text: 'Гребные тренажеры',
            },
            {
                key: 'elipticheskie',
                text: 'Гребные тренажеры',
            },
            {
                key: 'elipticheskie',
                text: 'Гребные тренажеры',
            },
        ]
    }

    @Watch('active', { immediate: true })
    onChangeActive() {
        this.updateBrands()
    }
}
</script>

<!-- <style lang="scss" src="./Brands.critical.scss" /> -->
<!-- <style lang="scss" src="./Brands.main.scss" /> -->
