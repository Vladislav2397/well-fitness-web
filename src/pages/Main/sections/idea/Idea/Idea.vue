<template lang="pug">

.b-idea
    .__container.container
        section-wrapper-component.__wrapper(
            title="Идеи и подборки"
            theme="dark"
            buttonText="Полная подборка"
            buttonTheme="ghost-light"
            @click="onClick"
        )
            .__list
                card-idea-component.__card(
                    v-for="({size, src, alt}, index) in cards"
                    :key="index"
                    :size="size"
                    :src="src"
                    :alt="alt"
                )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { SectionWrapper } from '../../SectionWrapper'

// entity
import { CardIdea } from '../CardIdea'
// import {gql, request} from "graphql-request"
// import {env} from "@/shared/config"
// import {Model} from "@/shared/config/decorators"
// import {Repository} from "@vuex-orm/core"
// import {Idea as IdeaModel} from '@/entities/idea'
// import {MEDIA_HOST} from "@/shared/config/env"

@Component({
    components: {
        'card-idea-component': CardIdea,
        'section-wrapper-component': SectionWrapper,
    },
})
export default class Idea extends Vue {
    // @Model(IdeaModel) IdeaModel!: Repository<IdeaModel>

    get cards() {
        return this.$store.getters['idea/list'].map(
            (item: any, index: number) => ({
                size: index === 0 ? 'l' : 's',
                src: '', // ${MEDIA_HOST}/${item.image}
                alt: '',
            })
        )
        /* this.IdeaModel.all().map((item, index) => ({
            size: index === 0 ? 'l' : 's',
            src: `${MEDIA_HOST}/${item.image}`,
            alt: '',
        })) */
    }

    onClick(): void {
        this.$router.push({ name: 'Idea' })
    }

    async created() {
        // const query = gql`
        //     query {
        //         ideas {
        //             id
        //             name
        //             image
        //         }
        //     }
        // `
        //
        // try {
        //     const { ideas } = await request(env.GRAPHQL_HOST, query)
        //
        //     this.IdeaModel.save(ideas)
        // } catch (error) {
        //     //
        // }
    }
}
</script>

<!--<style lang="scss" src="./Idea.critical.scss" />-->
<!--<style lang="scss" src="./Idea.main.scss" />-->
