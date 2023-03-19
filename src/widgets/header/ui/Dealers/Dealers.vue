<script lang="ts">
import { Link } from '@/shared/ui/Link'
import { Button } from '@/shared/ui/Button'
import { VueFunctional } from '@/shared/config/functionalComponent'

interface DealersProps {
    view: 'default' | 'modal'
}

export default VueFunctional<DealersProps>((h, { data, props }) => {
    const view = props.view ?? 'default'
    const isDefault = view === 'default'
    const classes = [data.staticClass, 'dealers', `dealers--view-${view}`]

    const actionChild = ['Become a Partner']

    const label = h('span' /*['Для дилеров']*/)

    const action = isDefault
        ? h(
              Button,
              {
                  props: {
                      size: 's',
                      theme: 'secondary',
                  },
              },
              actionChild
          )
        : h(
              Link,
              {
                  props: {
                      tag: 'span',
                  },
              },
              actionChild
          )

    return h('div', { class: classes }, [label, action])
})

// @Component()
// export default class Dealers extends Vue {
//     render
// }
</script>

<style lang="scss" src="./Dealers.critical.scss" />
