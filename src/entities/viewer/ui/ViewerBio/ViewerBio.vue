<template lang="pug">

.b-viewer-bio
    .__avatar
    textarea.__info.typo.typo--size-h4(
        :value="viewer.name"
        multiple="multiple"
        name="name"
    )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export type ViewerBioProps = Pick<ViewerBio, 'viewer'>

@Component
export default class ViewerBio extends Vue {
    @Prop() readonly viewer!: { name: string }
}
</script>

<!-- <style lang="scss" src="./ViewerBio.critical.scss" /> -->
<!-- <style lang="scss" src="./ViewerBio.main.scss" /> -->
