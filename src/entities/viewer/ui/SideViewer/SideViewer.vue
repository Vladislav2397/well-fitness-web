<template lang="pug">

.b-side-viewer
    .__title.typo.typo--size-h5
        | {{ viewer.firstname }}
        br
        | {{ viewer.lastname }}
    .__email.typo.typo--size-p3 {{ viewer.email }}
    .__phone.typo.typo--size-p3 {{ viewer.phone }}
    router-link.__link.typo.typo--size-p3(
        to="/account/profile"
    ) Редактировать профиль
    .__link.typo.typo--size-p3 Выйти

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Viewer } from '@/shared/lib/domain'

export type SideViewerProps = Pick<SideViewer, 'viewer'>

@Component
export default class SideViewer extends Vue {
    @Prop() readonly viewer!: Pick<
        Viewer,
        'id' | 'firstname' | 'lastname' | 'email' | 'phone'
    >
}
</script>

<!-- <style lang="scss" src="./SideViewer.critical.scss" /> -->
<!-- <style lang="scss" src="./SideViewer.main.scss" /> -->
