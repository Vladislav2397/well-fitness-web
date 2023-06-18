import { Component, Prop, Vue } from 'vue-property-decorator'
import { Button } from '@/shared/ui'
import type { Equipment } from '@/shared-kernel'

@Component
export default class AddToFavorite extends Vue {
    @Prop() equipment!: Equipment

    remove() {
        this.$store.commit('cart/removeFromCart', this.equipment)
    }

    render() {
        return (
            <Button theme="ghost" vOn:click={this.remove}>
                Удалить
            </Button>
        )
    }
}
