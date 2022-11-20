<script lang="ts">
import { Functional } from '@/shared/config/functionalComponent'

export const icons = [
    'burger',
    'collapse',
    'bento',
    'cart',
    'heart',
    'right-arrow',
    'stats',
    'search',
    'close',
] as const

export interface IconProps {
    size: 's' | 'm' | 'l'
    name: typeof icons[number]
}

export default Functional<IconProps>((h, { props, data, listeners }) => {
    const classes = [
        data.staticClass,
        'icon',
        `icon--size-${props.size || 'm'}`,
        `icon--${props.name || 'collapse'}`,
    ]

    return h('i', {
        class: classes,
        on: listeners
    })
})
</script>

<style lang="scss" src="./Icon.critical.scss"></style>
