<template lang="pug">

.b-table
    .__item(
        v-for="item in list"
    )
        slot(
            :item="item"
        )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export type TableProps = {
    //
}

@Component
export default class Table extends Vue {
    @Prop() readonly list!: unknown[]
}
</script>

<!-- <style lang="scss" src="./Table.critical.scss" /> -->
<!-- <style lang="scss" src="./Table.main.scss" /> -->
