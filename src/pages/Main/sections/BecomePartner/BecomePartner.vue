<template lang="pug">

section.b-become-partner
    ._container.container
        ._caption
            ._content
                | Станьте нашим партнером и&nbsp;
                span получите возможность
                | &nbsp;представлять нашу продукцию в&nbsp;вашем регионе.
            button-component._button(
                theme="ghost-light"
            ) Стать партнером
        ._image
            img(
                src=""
                alt=""
            )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Button } from '@/shared/ui/Button'

@Component({
    components: {
        'button-component': Button
    }
})
export default class BecomePartner extends Vue {

}

</script>

<!--<style lang="scss" src="./BecomePartner.critical.scss" />-->
<!--<style lang="scss" src="./BecomePartner.main.scss" />-->
