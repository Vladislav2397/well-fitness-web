<template lang="pug">

.b-brand
    .__container.container
        section-wrapper-component._wrapper(
            title="Популярные бренды"
            buttonText="Все бренды"
        )
            .__links.scroll-row
                link-component.__link(
                    v-for="({text, href}, index) in links"
                    :key="index"
                    :href="href"
                    tag="router-link"
                    theme="dark"
                ) {{ text }}
            .__list
                .__item(
                    v-for="(brand, index) in brands"
                    :key="brand.id"
                    :class="itemClasses(index)"
                )
                    img(
                        :src="getImageApi(brand.image)"
                        :alt="brand.name"
                    )

</template>

<script lang="ts">
import {Component, Inject, Vue} from 'vue-property-decorator'

import { SectionWrapper } from '../SectionWrapper'

// import {env} from "@/shared/config"
import DeviceProvider from '@/shared/lib/providers/device'
import { Link } from '@/shared/ui/Link'
// import {Model} from "@/shared/config/decorators"
// import { Brand as BrandModel } from '@/entities/brand'
// import {Repository} from "@vuex-orm/core"
// import apiHelpers from "@/shared/lib/api-helpers"

// import type {IDevice} from '@/use/device'
// import {gql, request} from "graphql-request"

@Component({
    components: {
        'section-wrapper-component': SectionWrapper,
        'link-component': Link,
    }
})
export default class Brand extends Vue {
    @Inject('$device') device!: DeviceProvider['device']

    // @Model(BrandModel) Brand!: Repository<BrandModel>

    links = [
        {
            text: 'Беговые дорожки',
            href: '',
        },
        {
            text: 'Эллиптические тренажеры',
            href: '',
        },
        {
            text: 'Велотренажеры',
            href: '',
        },
        {
            text: 'Силовые тренажеры',
            href: '',
        },
        {
            text: 'Батуты',
            href: '',
        },
        {
            text: 'Игровые столы',
            href: '',
        },
    ]

    getImageApi = (...args: any[]) => {
        // console.log('getImageApi', args)
    } // apiHelpers.getImageApi

    // get brandLogoCount (): number {
    //     return this.device.size.desktop ? 15 : 12
    // }

    get brands() {
        return this.$store.getters['brand/list'] // this.Brand.all()
    }

    get countColumns (): number {
        if (this.device.size.mobile) return 2
        if (this.device.size.tablet) return 4
        return 5
    }

    itemClasses (index: number): string[] {
        const classes = []

        switch ((index + 1) % this.countColumns) {
        case 0:
            classes.push('last')
            break
        case 1:
            classes.push('first')
            break
        }

        if (index >= this.countColumns) {
            classes.push('border-top')
        }

        return classes
    }

    async created() {
        // try {
        //     const query = gql`
        //         {
        //             brands {
        //                 id
        //                 name
        //                 image
        //             }
        //         }
        //     `
        //
        //     const { brands } = await request(env.GRAPHQL_HOST, query)
        //
        //     this.Brand.save(brands)
        // } catch (error) {
        //     console.log('error')
        // }
    }
}

</script>

<!--<style lang="scss" src="./Brand.critical.scss" />-->
<!--<style lang="scss" src="./Brand.main.scss" />-->
