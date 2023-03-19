<template lang="pug">

.b-pagination-wrapper
    .__container.container
        slot
        .__wrapper(
            v-if="quantity > 1"
        )
            link-component.__link(
                @click="clickLinkEmit"
            ) Показать еще
            pagination-component.__pagination(
                page="1"
                max-items="9"
                total="10"
            )

</template>

<script lang="ts">
import { Component, Emit, Prop, VModel, Vue } from 'vue-property-decorator'

import { Pagination } from '@/shared/ui/Pagination'
import { Link } from '@/shared/ui/Link'

type PaginationWrapperProps = {
    value: PaginationWrapper['valueModel']
} & PartialPick<PaginationWrapper, 'maxItems'>

@Component({
    components: {
        'link-component': Link,
        'pagination-component': Pagination,
    },
})
export default class PaginationWrapper extends Vue {
    @VModel() valueModel!: { limit: number; offset: number }

    @Prop() readonly maxItems!: Pagination['maxItems']

    @Emit('clickLink') clickLinkEmit() {
        /**/
    }

    limit = 9
    offset = 0
}
</script>

<!--<style lang="scss" src="./PaginationWrapper.critical.scss" />-->
