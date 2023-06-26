<script lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { RenderContext } from 'vue'

type Optional<T> = T | undefined
type Maybe<T> = T | null

type TsxComponent<Props> = (
    args: Partial<RenderContext<Props>> & {
        [k in keyof Props]: Optional<Maybe<Props[k]>>
    }
) => JSX.Element // or whatever you're using for JSX/TSX

export type IdeaCardProps = Pick<IdeaCard, 'idea'> &
    Partial<Pick<IdeaCard, 'orientation'>>

@Component
export default class IdeaCard extends Vue {
    // FIXME: Remove optional operator for link
    @Prop() readonly idea!: {
        image: { src: string; alt: string }
        link?: string
    }
    @Prop({ default: 'vertical' }) readonly orientation!:
        | 'vertical'
        | 'horizontal'

    get classes() {
        return [`idea-card--${this.orientation}`]
    }

    render() {
        return (
            <div class={['idea-card', this.classes]}>
                <img src={this.idea.image.src} alt={this.idea.image.alt} />
            </div>
        )
    }
}
</script>

<!--<style lang="scss" src="./IdeaCard.critical.scss" />-->
<!--<style lang="scss" src="./IdeaCard.main.scss" />-->
