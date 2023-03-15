<script lang="ts">
import { Functional } from '@/shared/config/functionalComponent'

export type LogoProps = {
    size: 's' | 'm' | 'l'
}

export default Functional<LogoProps>((h, { data }) => {
    return h(
        'router-link',
        {
            class: [data.staticClass, 'logo'],
            props: {
                to: '/',
            },
        },
        [
            h('img', {
                attrs: {
                    src: '/images/common/logo.svg',
                    alt: 'Logo',
                    height: '40',
                },
            }),
        ]
    )
})

// import { Component } from 'vue-property-decorator'
// import { CreateElement, RenderContext, VNode } from 'vue'
//
// @Component
// export default class Logo extends VueFunctional {
//     render(h: CreateElement, { data }: RenderContext): VNode {
//         return h('router-link', {
//             class: [
//                 data.staticClass,
//                 'logo'
//             ],
//             props: {
//                 to: {
//                     name: 'Index'
//                 }
//             }
//         }, [
//             h('img', {
//                 attrs: {
//                     src: '/images/common/logo.svg',
//                     alt: 'Logo',
//                     height: '40'
//                 }
//             })
//         ])
//     }
// }
</script>

<!--<style lang="scss" src="./Logo.critical.scss" />-->
