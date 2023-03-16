<template lang="pug">

#app
    header-widget
    router-view

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { TheHeader } from '@/widgets/header'

@Component({
    components: {
        'header-widget': TheHeader,
    },
})
export default class App extends Vue {
    //
}
</script>

<style lang="scss">
@import '../shared/assets/styles/main';

@import '../shared/shared.critical';
@import '../shared/shared.main';

@import '../entities/entities.critical';
@import '../entities/entities.main';

@import '../pages/pages.critical.scss';
</style>
