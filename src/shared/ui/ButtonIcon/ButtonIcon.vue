<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'

export type ButtonIconProps = {
    //
}

@Component
export default class ButtonIcon extends Vue {
    render(h: CreateElement): VNode {
        const children = [
            h('i', {
                class: 'icon icon--size-s icon--right-arrow',
            }),
        ]
        return h(
            'button',
            {
                class: 'button-icon',
            },
            children
        )
    }
}
</script>

<!--<style lang="scss" src="./ButtonIcon.critical.scss" />-->
