<script lang="ts">
import { Functional } from '@/shared/config/functionalComponent'

export type AvatarProps = {
    src: string
    alt: string
}

export default Functional<AvatarProps>((h, { props, data }) => {
    const children = h('img', {
        attrs: {
            src: props.src || '/images/common/image-placeholder.svg',
            alt: props.alt,
        },
    })

    return h(
        'div',
        {
            class: ['avatar', data.class, data.staticClass],
        },
        [children]
    )
})
</script>

<!--<style lang="scss" src="./Avatar.critical.scss" />-->
