import { Vue, Component } from 'vue-property-decorator'
import { IdeaCard } from '@/entities/idea'
import { Button } from '@/shared/ui'

@Component
export default class IdeaPromoSection extends Vue {
    get list(): { image: ImageView; link: string; size: 'wide' | 'default' }[] {
        return [
            {
                size: 'wide',
                image: { src: 'path/to/idea', alt: 'idea-1' },
                link: 'link/to/idea',
            },
            {
                size: 'default',
                image: { src: 'path/to/idea', alt: 'idea-2' },
                link: 'link/to/idea',
            },
            {
                size: 'default',
                image: { src: 'path/to/idea', alt: 'idea-3' },
                link: 'link/to/idea',
            },
        ]
    }

    render() {
        return (
            <div class="idea-promo-section">
                <div class="idea-promo-section__container container">
                    <h3 class="idea-promo-section__title typo typo--size-h2 typo--view-inverse">
                        Идеи и подборки
                    </h3>
                    <div class="idea-promo-section__list">
                        {this.list.map(idea => (
                            <IdeaCard
                                key={idea.image.alt}
                                class="idea-promo-section__item"
                                idea={idea}
                                orientation={
                                    idea.size === 'wide'
                                        ? 'horizontal'
                                        : 'vertical'
                                }
                            />
                        ))}
                    </div>
                    <Button
                        class="idea-promo-section__button"
                        theme="ghost-light">
                        Подробнее
                    </Button>
                </div>
            </div>
        )
    }
}
