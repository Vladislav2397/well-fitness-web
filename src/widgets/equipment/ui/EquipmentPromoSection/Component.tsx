import { Component, Vue } from 'vue-property-decorator'

import { EquipmentCard } from '@/entities/equipment'

import { Button } from '@/shared/ui'
import { TabList, TabListProps } from '@/shared/ui/TabList'
import { AddToCart } from '@/features/cart'
import { Equipment } from '@/shared-kernel'

export type EquipmentPromoSectionProps = {
    //
}

@Component
export default class EquipmentPromoSection extends Vue {
    equipments: Equipment[] = [
        {
            id: '1',
            image: {
                alt: 'alt',
                src: '/img/logo.png',
            },
            hasShowRoom: false,
            info: [['soem', 'osdm']],
            name: 'some name',
            price: [124132, 124132],
            quantity: 3,
            rating: 5,
        },
        {
            id: '2',
            image: {
                alt: 'alt',
                src: '/img/logo.png',
            },
            hasShowRoom: false,
            info: [['soem', 'osdm']],
            name: 'some name',
            price: [124132, 124132],
            quantity: 3,
            rating: 5,
        },
        {
            id: '3',
            image: {
                alt: 'alt',
                src: '/img/logo.png',
            },
            hasShowRoom: false,
            info: [['soem', 'osdm']],
            name: 'some name',
            price: [124132, 124132],
            quantity: 3,
            rating: 5,
        },
        {
            id: '4',
            image: {
                alt: 'alt',
                src: '/img/logo.png',
            },
            hasShowRoom: false,
            info: [['soem', 'osdm']],
            name: 'some name',
            price: [124132, 124132],
            quantity: 3,
            rating: 5,
        },
        {
            id: '5',
            image: {
                alt: 'alt',
                src: '/img/logo.png',
            },
            hasShowRoom: false,
            info: [['soem', 'osdm']],
            name: 'some name',
            price: [124132, 124132],
            quantity: 3,
            rating: 5,
        },
        {
            id: '6',
            image: {
                alt: 'alt',
                src: '/img/logo.png',
            },
            hasShowRoom: false,
            info: [['soem', 'osdm']],
            name: 'some name',
            price: [124132, 124132],
            quantity: 3,
            rating: 5,
        },
    ]

    active = 0

    tabs: TabListProps['list'] = ['Акции', 'Новинки']

    render() {
        return (
            <div class="equipment-promo-section">
                <div class="equipment-promo-section__container container">
                    <TabList
                        vModel={this.active}
                        list={this.tabs}
                        class="equipment-promo-section__tabs"
                    />
                    <div class="equipment-promo-section__list">
                        {this.equipments.map(equipment => (
                            <EquipmentCard
                                class="equipment-promo-section__item"
                                key={equipment.id}
                                equipment={equipment}>
                                <AddToCart equipment={equipment} />
                            </EquipmentCard>
                        ))}
                    </div>
                    <Button
                        class="equipment-promo-section__button"
                        theme="ghost-brand">
                        Подробнее
                    </Button>
                </div>
            </div>
        )
    }
}
