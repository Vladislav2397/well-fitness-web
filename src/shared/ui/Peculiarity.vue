<template lang="pug">

.peculiarity
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

<style lang="scss">
.peculiarity {
    &__title {
        @include paddingLevel(both, green);
        @include fontSize(h3);

        font-weight: 600;
    }

    &__list {
        overflow: hidden;
        box-sizing: border-box;
    }

    &__line {
        padding-bottom: toRem(4);
        padding-top: toRem(4);

        & + & {
            border-top: 1px solid rgba(#858fa4, 0.2);
        }

        span {
            @include fontSize(p3);

            display: inline-block;
            vertical-align: middle;
            width: 50%;
            box-sizing: border-box;
            padding-right: toRem(4);
            opacity: 0.7;

            & + span {
                font-weight: 500;
                padding-left: toRem(4);
                padding-right: 0;
                opacity: 1;
            }
        }
    }
}

.peculiarity {
    &__list {
        transition: height 0.3s ease;
    }
}
</style>
