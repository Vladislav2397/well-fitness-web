<script lang="ts">
import { Link } from '@/shared/ui/Link'
import { VueFunctional } from '@/shared/config/functionalComponent'

const navigationItems = [
    {
        text: 'Бренды',
        href: '/brands',
    },
    {
        text: 'Сервис',
        href: '/services',
    },
    {
        text: 'Услуги',
        href: '/offices',
    },
    {
        text: 'Поддержка',
        href: '/delivery',
    },
    {
        text: 'О компании',
        href: '/about',
    },
    {
        text: 'Блог',
        href: '/articles',
    },
    {
        text: 'Где купить',
        href: '/where-buy',
    },
    {
        text: 'Контакты',
        href: '/contacts',
    },
]

interface NavigationProps {
    align: 'vertical' | 'horizontal'
}

export default VueFunctional<NavigationProps>((h, { data, props }) => {
    const align = props.align ?? 'vertical'

    const classes = [data.staticClass, `navigation--align-${align}`]

    return h(
        'nav',
        {
            class: classes,
        },
        [
            ...navigationItems.map(({ text, href }, index) =>
                h(
                    Link,
                    {
                        props: {
                            href,
                            key: index,
                            tag: 'router-link',
                            theme: 'white',
                        },
                    },
                    [text]
                )
            ),
        ]
    )
})
</script>

<style lang="scss" src="./Navigation.critical.scss" />
