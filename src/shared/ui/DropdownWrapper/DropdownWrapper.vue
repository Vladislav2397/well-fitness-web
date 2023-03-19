<template lang="pug">

// v-click-outside="closeDropdown"
.b-dropdown-wrapper
    .__target(
        ref="target"
        v-on:click="onClick"
    )
        slot
    .__content(
        v-if="$slots.content && valueModel"
    )
        slot(
            name="content"
        )

</template>

<script lang="ts">
import { Component, VModel, Vue } from 'vue-property-decorator'

@Component
export default class DropdownWrapper extends Vue {
    @VModel({ default: false }) valueModel!: boolean

    onClick(): void {
        this.valueModel = !this.valueModel
    }

    closeDropdown(): void {
        this.valueModel = false
    }
}
</script>

<style lang="scss">
.dropdown-wrapper {
    position: relative;

    &__content {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
    }
}
</style>
