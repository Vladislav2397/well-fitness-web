import { Component, Prop, Ref, Vue } from 'vue-property-decorator'

@Component
export default class Collapsible extends Vue {
    @Prop() readonly isActive!: boolean

    @Ref('container') containerRef!: HTMLElement

    container = {
        maxHeight: 0,
        style: {
            height: 'auto',
        },
    }

    mounted(): void {
        this.container.maxHeight = this.containerHeight

        if (this.isActive) {
            this.container.style.height = `${this.container.maxHeight}px`
        } else {
            this.container.style.height = '0px'
        }
    }

    openCollapse(): void {
        this.container.style.height = `${this.container.maxHeight}px`
    }

    closeCollapse(): void {
        this.container.style.height = '0px'
    }

    toggleCollapse(): void {
        if (this.container.style.height === '0px') this.openCollapse()
        else this.closeCollapse()
    }

    get containerHeight() {
        return this.containerRef.getBoundingClientRect().height
    }
}
