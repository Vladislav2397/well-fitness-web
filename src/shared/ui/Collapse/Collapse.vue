<template lang="pug">

.b-collapse
    .__header(
        @click="onClick"
    )
        .__title
            slot(
                name="header"
            )
        .__icon(
            :class="{ 'is-active': isOpen }"
        ) V
    .__content(
        v-if="isOpen"
    )
        slot

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

export type CollapseProps = {
    //
}

@Component
export default class Collapse extends Vue {
    isOpen = false

    onClick() {
        this.isOpen = !this.isOpen
    }
}
</script>

<!-- <style lang="scss" src="./Collapse.critical.scss" /> -->
<!-- <style lang="scss" src="./Collapse.main.scss" /> -->
