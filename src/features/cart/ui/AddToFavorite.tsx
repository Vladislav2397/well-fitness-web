import { Component, Prop, Vue } from 'vue-property-decorator'
import { Button } from '@/shared/ui'

@Component
export default class AddToFavorite extends Vue {
    @Prop() equipment!: unknown

    toFavorite() {
        console.log('add equipment to favorite', this.equipment)
    }

    render() {
        return (
            <Button theme="secondary" vOn:click={this.toFavorite}>
                В избранное
            </Button>
        )
    }
}
