<script lang="ts">
import { CreateElement, VNode } from 'vue'
import { Component, Emit, Prop, PropSync, Vue } from 'vue-property-decorator'

export type ButtonProps = {
    tag?: Button['tag']
    iconSize?: Button['iconSize']
    size?: Button['size']
    theme?: Button['theme']
    icon: Button['icon']
    href: Button['href']
    error: Button['errorSync']
    iconLeft: boolean
}

export type ButtonThemeType =
    | 'brand'
    | 'ghost-brand'
    | 'ghost-light'
    | 'ghost'
    | 'secondary'

@Component
export default class Button extends Vue {
    @Prop({ default: 'button' }) readonly tag!:
        | 'button'
        | 'a'
        | 'div'
        | 'router-link'
    @Prop({ default: 'm' }) readonly size!: 'm' | 's'
    @Prop({ default: 'brand' }) readonly theme!: ButtonThemeType
    @Prop() readonly icon?: string
    @Prop({ default: 'm' }) readonly iconSize!: 's' | 'm' | 'l'
    @Prop() readonly href?: string
    @Prop({ type: Boolean, default: false }) readonly iconLeft!: boolean
    @Prop({ type: Boolean, default: false }) readonly isDisable!: boolean

    @PropSync('error') errorSync!: boolean

    @Emit('click') clickEmit(): void {
        /**/
    }

    get classes(): string[] {
        const classes = ['button']

        classes.push(`button--theme-${this.theme}`)
        classes.push(`button--size-${this.size}`)

        if (this.isDisable) {
            classes.push(`button--disabled`)
        }

        if (this.icon) {
            if (this.iconLeft) {
                classes.push(`button--icon-left`)
            } else {
                classes.push(`button--icon-right`)
            }
        }

        return classes
    }

    render(h: CreateElement): VNode {
        const children = []

        const icon = h('i', {
            class: `icon icon--size-${this.iconSize} icon--${this.icon}`,
        })

        if (this.icon) {
            if (this.iconLeft) {
                children.push(icon)
            }
            children.push(this.$slots.default)
            if (!this.iconLeft) {
                children.push(icon)
            }
        } else {
            children.push(this.$slots.default)
        }

        return h(
            this.tag,
            {
                class: this.classes,
                ...(this.tag === 'a' && {
                    attrs: {
                        href: this.href,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                    },
                }),
                ...(this.tag === 'router-link' && {
                    attrs: {
                        to: this.href,
                    },
                }),
                on: {
                    click: () => {
                        if (this.isDisable) return

                        this.clickEmit()
                    },
                },
            },
            children
        )
    }
}
</script>

<!--<style lang="scss" src="./Button.critical.scss" />-->
