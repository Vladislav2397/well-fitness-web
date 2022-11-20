<script lang="ts">
import { Functional } from '@/shared/config/functionalComponent'

export default Functional((h, { children, data }) => {
    return h('div', { class: [ data.staticClass, 'card' ] }, children)
})
</script>


<style lang="scss">

</style>
