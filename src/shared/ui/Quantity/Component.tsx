import { Component, Prop, Vue } from 'vue-property-decorator'
import { CreateElement, RenderContext } from 'vue'

export type QuantityProps = {
    count: QuantityType
}

type QuantityType = 0 | 1 | 2 | 3

const getState = (count: QuantityType) => {
    switch (count) {
        case 0:
            return {
                label: 'Нет в наличии',
                class: 'error',
            }
        case 1:
            return {
                label: 'Осталось мало',
                class: 'warning',
            }
        default:
            return {
                label: 'В наличии',
                class: 'success',
            }
    }
}

@Component({
    // @ts-ignore
    functional: true,
})
export default class Quantity extends Vue {
    @Prop() readonly count!: QuantityType

    render(
        h: CreateElement,
        { props: { count } }: RenderContext<QuantityProps>
    ) {
        const state = getState(count)

        return (
            <div class={['quantity', `quantity--${state.class}`]}>
                {state.label}
                <div class="quantity__list">
                    {[1, 2, 3].map(i => (
                        <div
                            class={[
                                'quantity__dot',
                                { 'quantity__dot--fill': i <= count },
                            ]}
                            key={i}></div>
                    ))}
                </div>
            </div>
        )
    }
}
