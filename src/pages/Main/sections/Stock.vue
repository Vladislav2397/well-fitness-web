<template lang="pug">

.b-stock
    .__container.container
        section-wrapper-component(
            buttonText="Все товары по акции"
        )
            template(
                #title
            )
                tab-list-component.__tabs.scroll-row(
                    :value="activeTabIndex"
                    :list="tabList"

                    @input="onInput"
                )
            .__cards
                c-equipment-stock-card.__card(
                    v-for="id in activeIds"
                    :key="id"
                    :id="id"
                )

</template>

<script lang="ts">
// TODO: Refactor (use index page SectionWrapper)
import { Component, Inject, Vue, Watch } from 'vue-property-decorator'

import { SectionWrapper } from '@/pages/Main/sections/SectionWrapper'
import { TabList } from '@/shared/ui/TabList'
import { EquipmentStockCard, CardProductStats, CardProduct } from "@/entities/equipment"
// import {env} from "@/shared/config"
import DeviceProvider from '@/shared/lib/providers/device'

// export type ProductCardType = {
//     id: number,
//     image: {
//         src: string,
//         alt: string,
//     },
//     stickers?: Set<'new' | 'percent' | 'like'>,
//     quantity: 0 | 1 | 2 | 3,
//     hasShowRoom?: boolean,
//     title: string,
//     rating: 1 | 2 | 3 | 4 | 5,
//     price: [current: string | number, old?: string | number]
// }

@Component({
    components: {
        'c-equipment-stock-card': EquipmentStockCard,
        'card-product-stats-component': CardProductStats,
        'card-product-component': CardProduct,
        'tab-list-component': TabList,
        'section-wrapper-component': SectionWrapper
    },
})
export default class Stock extends Vue {
    @Inject('$device') device!: DeviceProvider['device']

    // @Model(Equipment) Equipment!: Repository<Equipment>

    activeTabIndex = 0

    activeIds = []

    tabList = [
        'Акция',
        'Новинки',
        'Мы рекомендуем',
    ]

    onInput(value: number): void {
        const oldValue = this.activeTabIndex

        this.activeTabIndex = value

        if (value !== oldValue) {
            this.fetchEquipments()
        }
    }

    async fetchEquipments() {
        // const query = gql`
        //     {
        //         allEquipments(promotion: ${this.activeTabIndex + 1}) {
        //             results {
        //                 id
        //                 name
        //                 label
        //                 description
        //                 rating
        //                 promotion
        //                 category {
        //                     id
        //                     name
        //                 }
        //                 brand {
        //                     id
        //                     name
        //                 }
        //             }
        //         }
        //     }
        // `

        // try {
        //     const { allEquipments } = await request(env.GRAPHQL_HOST, query)
        //
        //     this.Equipment.insert(allEquipments.results)
        //
        //     this.activeIds = allEquipments.results.map(item => item.id)
        // } catch (error) {
        //     console.log('Error on fetch promotion equipments')
        // }
    }

    async created() {
        this.fetchEquipments()
    }

    @Watch('activeTabIndex', { immediate: true })
    onChangeIndex(value: number) {
        if (value === 0) {
            this.activeIds = this.$store.getters['equipment/novelties']
        } else if (value === 1) {
            this.activeIds = this.$store.getters['equipment/stocks']
        } else {
            this.activeIds = this.$store.getters['equipment/recommended']
        }
    }
}

</script>

<style lang="scss">
.stock {
    padding-top: toRem(80);
    padding-bottom: toRem(60);

    --spacing: #{toRem(10)};
    --n-spacing: #{toRem(-10)};
    --i-spacing: #{toRem(20)};

    &__container {
        overflow: hidden;
    }

    &__cards,
    &__tabs {
        white-space: nowrap;
        overflow-y: hidden;
        overflow-x: auto;
    }

    &__tabs {
        margin-bottom: toRem(30);
    }

    &__cards {
        padding: 0 var(--spacing);
        transform: translateX(var(--n-spacing));
        width: 100%;
    }

    &__card {
        display: inline-block;
        white-space: normal;
        vertical-align: top;
        background-color: #fff;
        width: toRem(220);

        &:last-child {
            margin-right: var(--spacing);
        }

        & + & {
            margin-left: var(--i-spacing);
        }
    }

    &__stats {
        padding: toRem(16);
    }

    @media (min-width: 650px) {
        padding-top: toRem(104);
        padding-bottom: toRem(80);

        --spacing: #{toRem(16)};
        --n-spacing: #{toRem(-16)};
        --i-spacing: #{toRem(30)};

        &__card {
            width: toRem(270);
        }
    }

    @media (min-width: 768px) {
        &__card {
            width: toRem(300);
        }
    }

    @media (min-width: 1200px) {
        padding-top: toRem(120);
        padding-bottom: toRem(100);

        --spacing: #{toRem(20)};
        --n-spacing: #{toRem(-20)};
    }
}
</style>
