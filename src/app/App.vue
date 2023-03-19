<template lang="pug">

#app
    header-widget
    keep-alive
        router-view(
            :key="$route.name"
        )
    the-footer

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { TheHeader } from '@/widgets/header'
import { TheFooter } from '@/widgets/TheFooter'

@Component({
    components: {
        'header-widget': TheHeader,
        'the-footer': TheFooter,
    },
})
export default class App extends Vue {
    //
}
</script>

<style lang="scss">
@import './critical';
@import './main';
</style>
