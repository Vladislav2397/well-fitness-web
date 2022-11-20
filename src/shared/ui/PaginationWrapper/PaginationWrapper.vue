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
                v-model="pageCount"
                :quantity="quantity"
                :nextVisiblePages="3"
                :prevVisiblePages="3"
            )

</template>

<script lang="ts">
import {Component, Emit, Prop, VModel, Vue} from 'vue-property-decorator'

import { Pagination } from '@/shared/ui/Pagination'
import { Link } from '@/shared/ui/Link'

@Component({
    components: {
        'link-component': Link,
        'pagination-component': Pagination
    }
})
export default class PaginationWrapper extends Vue {
    @VModel() pageCount!: Pagination['currentValue']
    @Prop() readonly quantity!: Pagination['quantity']

    @Emit('clickLink') clickLinkEmit() {/**/}
}

</script>

<style lang="scss" src="./PaginationWrapper.critical.scss" />
