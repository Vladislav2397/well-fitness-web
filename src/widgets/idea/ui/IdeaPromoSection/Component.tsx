import Vue, { type VNode } from 'vue'
import { IdeaCard } from '@/entities/idea'

type IdeaCardType = {
    image: ImageView
    link: string
}

export default Vue.extend<
    { list: IdeaCardType[] },
    { createItem: () => void },
    unknown
>({
    data: () => ({
        list: [
            {
                image: { src: 'path/to/src', alt: 'image' },
                link: 'link',
            },
            {
                image: { src: 'path/to/src', alt: 'image' },
                link: 'link',
            },
        ],
    }),
    methods: {
        createItem() {
            //
        },
    },
    render(): VNode {
        return (
            <div class="idea-promo-section">
                <div class="idea-promo-section__container container">
                    {this.createItem}
                    {this.list.map((item, index) => (
                        <IdeaCard idea={item} key={index} />
                        // <img
                        //     key={index}
                        //     src={item.image.src}
                        //     alt={item.image.alt}
                        //     class="idea-promo-section__item"
                        // />
                    ))}
                </div>
            </div>
        )
    },
})
