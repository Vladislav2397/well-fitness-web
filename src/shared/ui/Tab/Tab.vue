<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'

export type TabProps = Pick<Tab, 'value'>

@Component
export default class Tab extends Vue {
    @Prop() value!: boolean

    @Emit('input') updateValue() {
        /**/
    }

    clickHandler(): void {
        this.updateValue()
    }

    render(h: CreateElement): VNode {
        return h(
            'div',
            {
                class: ['tab', this.value && 'active'],
                on: {
                    click: this.clickHandler,
                },
            },
            this.$slots.default
        )
    }
}
</script>

<!--<style lang="scss" src="./Tab.critical.scss" />-->
<!--<style lang="scss" src="./Tab.main.scss" />-->
