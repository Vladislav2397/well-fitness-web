<template lang="pug">

.b-peculiarity
    .__title(
        @click="toggleCollapse"
    )
        template(
            v-if="title"
        ) {{ title }}
        template(
            v-else
        )
            slot(
                name="title"
            )
    .__list(
        ref="container"
        :style="container.style"
    )
        .__line(
            v-for="([key, value], index) in list"
            :key="index"
        )
            span {{ key }}
            span {{ value }}

</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator'

import Collapsible from '@/shared/lib/mixins/collapsible'

@Component
export default class Peculiarity extends Mixins(Collapsible) {
    @Prop() readonly title!: string
    @Prop() readonly list!: [key: string, value: string][]
}

</script>

<!--<style lang="scss" src="./Peculiarity.critical.scss"/>-->
<!--<style lang="scss" src="./Peculiarity.main.scss"/>-->
