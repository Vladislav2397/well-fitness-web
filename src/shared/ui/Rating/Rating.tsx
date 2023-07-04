import { RenderContext } from 'vue'

export type RatingProps = {
    isBold?: boolean
    hasLabel?: boolean
    count?: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating = ({
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
                    <div
                        key={i}
                        class={[
                            'rating__star',
                            {
                                'rating__star--fill': i <= count,
                            },
                        ]}
                    />
                ))}
            </div>
        </div>
    )
}
