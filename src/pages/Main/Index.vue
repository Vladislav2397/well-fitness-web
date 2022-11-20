<template lang="pug">

.b-home
    carousel-section
    home-equipment-section
    gym-equipment-section
    stock-section
    idea-section
    brand-section
    addition-section
    about-section
    become-partner-section
    blog-section

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
    Carousel,
    HomeEquipment,
    GymEquipment,
    Stock,
    Idea,
    Brand,
    Addition,
    About,
    BecomePartner,
    Blog,
} from './sections'

@Component({
    components: {
        'carousel-section': Carousel,
        'home-equipment-section': HomeEquipment,
        'gym-equipment-section': GymEquipment,
        'stock-section': Stock,
        'idea-section': Idea,
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

<!--<style scoped>-->

<!--</style>-->
