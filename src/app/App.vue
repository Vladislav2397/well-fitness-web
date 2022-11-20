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
    }
})
export default class App extends Vue {
    //
}
</script>

<!--<style lang="scss" src="../shared/assets/styles/main.scss" />-->
