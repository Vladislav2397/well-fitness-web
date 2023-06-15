import { Component, Prop, Vue } from 'vue-property-decorator'
import { Button } from '@/shared/ui'

@Component
export default class AddToFavorite extends Vue {
    @Prop() equipment!: unknown

    remove() {
        console.log('remove equipment from cart', this.equipment)
    }

    render() {
        return (
            <Button theme="ghost" vOn:click={this.remove}>
                Удалить
            </Button>
        )
    }
}
