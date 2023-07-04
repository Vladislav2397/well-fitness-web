import { RenderContext } from 'vue'

export type PriceProps = {
    isRow: boolean
    new: string | number
    old?: string | number
    classPrices: string
    size: 'base' | 'inherit'
}

const getClasses = ({ isRow, size }: Pick<PriceProps, 'isRow' | 'size'>) => {
    const classes = []

    if (isRow) classes.push('price--row')

    if (size) classes.push(`price--size-${size}`)

    return classes
}

export const Price = ({
    props: { classPrices, isRow, new: current, old, size },
}: RenderContext<PriceProps>) => {
    const classes = getClasses({ isRow, size })

    return (
        <div class={['price', classes]}>
            <span class={classPrices}>{current}</span>
            {old && <del class={classPrices}>{old}</del>}
        </div>
    )
}
