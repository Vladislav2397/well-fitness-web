<script lang="tsx">
import { Vue, Component } from 'vue-property-decorator'
import { IdeaCard } from '@/entities/idea'

@Component
export default class IdeaPromoSection extends Vue {
    get list(): { image: ImageView; link: string }[] {
        return [
            {
                image: { src: 'path/to/idea', alt: 'idea-1' },
                link: 'link/to/idea',
            },
            {
                image: { src: 'path/to/idea', alt: 'idea-2' },
                link: 'link/to/idea',
            },
            {
                image: { src: 'path/to/idea', alt: 'idea-3' },
                link: 'link/to/idea',
            },
        ]
    }

    render() {
        return (
            <div class="idea-promo-section">
                <div class="idea-promo-section__container container">
                    <h3>Подборки</h3>
                    {this.list.map(idea => (
                        <IdeaCard
                            key={idea.image.alt}
                            // FIXME
                            //  Maybe incorrect type by vue-tsx-support
                            //  and babel preset

                            // @ts-ignore
                            orientation={'vertical'}
                            idea={idea}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
</script>
