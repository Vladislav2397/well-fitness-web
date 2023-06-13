<template lang="pug">

.b-idea-promo-section
    .__container.container
        .__item(
            v-for="(item, index) in list"
            :key="index"
        )

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class IdeaPromoSection extends Vue {
    get list(): { image: ImageView; link: string }[] {
        return [
            {
                image: { src: 'path/to/idea', alt: 'idea' },
                link: 'link/to/idea',
            },
            {
                image: { src: 'path/to/idea', alt: 'idea' },
                link: 'link/to/idea',
            },
            {
                image: { src: 'path/to/idea', alt: 'idea' },
                link: 'link/to/idea',
            },
        ]
    }
}
</script>
