<script lang="ts">
import { Icon, IconProps } from '@/shared/ui/Icon'
import {Functional} from '@/shared/config/functionalComponent'

export type LinkProps = {
    tag: 'a' | 'router-link' | 'span' | 'button'
    iconSize: 's' | 'm' | 'l'
    theme: LinkThemeType
    href?: string
    icon: string
    iconLeft: boolean
}

export type LinkThemeType =
    | 'primary'
    | 'secondary'
    | 'white'
    | 'dark'

export default Functional<LinkProps>((h, { props, data, listeners, children }) => {
    const defaultProps = {
        ...props,
        tag: props.tag || 'a',
        iconSize: props.iconSize || 'm',
        theme: props.theme || 'secondary',
    }

    const classes = () => {
        const classes = ['link', data.staticClass]

        if (defaultProps.theme) {
            classes.push(`link--theme-${defaultProps.theme}`)
        }

        if (defaultProps.icon) {
            defaultProps.iconLeft
                ? classes.push('link--icon-left')
                : classes.push('link--icon-right')
        }

        return classes
    }

    const iconComponent = h(Icon, {
        props: {
            size: defaultProps.iconSize,
            name: defaultProps.icon,
        } as IconProps
    })

    const child = []

    if (defaultProps.icon) {
        if (defaultProps.iconLeft) {
            child.push(iconComponent)
        }
        child.push(children)
        if (!defaultProps.iconLeft) {
            child.push(iconComponent)
        }
    } else {
        child.push(children)
    }

    return h(defaultProps.tag, {
        props: {
            ...defaultProps.tag === 'router-link' && {
                to: defaultProps.href
            }
        },
        class: classes(),
        on: {
            ...listeners.click && {
                click: listeners.click
            }
        }
    }, child)
})
</script>

<style lang="scss" src="./Link.critical.scss"></style>
