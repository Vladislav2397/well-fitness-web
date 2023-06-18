<template lang="pug">

.b-home
    //carousel-section.__section
    home-equipment-section.__section
    gym-equipment-section.__section
    equipment-promo-section
    idea-promo-section
    brand-section
    addition-section
    about-section
    become-partner-section
    blog-section

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
    // Carousel,
    HomeEquipment,
    GymEquipment,
    Brand,
    Addition,
    About,
    BecomePartner,
    Blog,
} from './sections'
import { IdeaPromoSection } from '@/widgets/idea'
import { EquipmentPromoSection } from '@/widgets/equipment'

@Component({
    components: {
        'equipment-promo-section': EquipmentPromoSection,
        'idea-promo-section': IdeaPromoSection,
        // 'carousel-section': Carousel,
        'home-equipment-section': HomeEquipment,
        'gym-equipment-section': GymEquipment,
        'brand-section': Brand,
        'addition-section': Addition,
        'about-section': About,
        'become-partner-section': BecomePartner,
        'blog-section': Blog,
    },
})
export default class IndexPage extends Vue {
    //
}
</script>
