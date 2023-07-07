import { RenderContext } from 'vue'
import * as tsx from 'vue-tsx-support'

export type RatingProps = {
    isBold?: boolean
    hasLabel?: boolean
    count?: 0 | 1 | 2 | 3 | 4 | 5
}

type RatingStarProps = {
    isFill?: boolean
}

const RatingStarComponent = ({
    props: { isFill = false },
}: RenderContext<RatingStarProps>) => {
    return (
        <div
            class={[
                'rating__star',
                {
                    'rating__star--fill': isFill,
                },
            ]}
        />
    )
}
const RatingStar = tsx
    .ofType<RatingStarProps>()
    .convert(RatingStarComponent as any)

export const RatingComponent = ({
    slots,
    props: { isBold = false, hasLabel = false, count = 0 },
}: RenderContext<RatingProps>) => {
    return (
        <div class="rating">
            {hasLabel && (
                <span
                    class={[
                        'rating__label',
                        {
                            'rating__label--bold': isBold,
                        },
                    ]}>
                    {slots().default ? <slot /> : 'Рейтинг'}
                </span>
            )}
            <div class="rating__list">
                {[1, 2, 3, 4, 5].map(i => (
                    <RatingStar key={i} isFill={i <= count} />
                ))}
            </div>
        </div>
    )
}

export const Rating = tsx.ofType<RatingProps>().convert(RatingComponent as any)
