import Vue, { CreateElement, RenderContext, VNode } from 'vue'

export const VueFunctional = <Props>(
    render: (h: CreateElement, context: RenderContext<Props>) => VNode | VNode[]
) =>
    Vue.extend<Props>({
        functional: true,
        render,
    })

export function Functional<Props>(
    renderFn: (h: CreateElement, context: RenderContext<Props>) => VNode
): any {
    return {
        functional: true,
        render(h: CreateElement, context: RenderContext<Props>) {
            return renderFn(h, context)
        },
    }
}
