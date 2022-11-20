import { Component, Mixins, Provide } from 'vue-property-decorator'

import resize from '../mixins/resize'

function isMobile() {
    return Boolean(navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i))
}

const device = {
    size: {
        mobile: false,
        tablet: false,
        tabletLate: false,
        desktop: false,
    },
    type: {
        desktop: false,
        mobile: false,
    },
}

export type Device = typeof device

@Component
export default class DeviceProvider extends Mixins(resize) {
    @Provide('$device') device = JSON.parse(JSON.stringify(device)) as typeof device

    created(): void {
        this.setSize()
        this.setType()
        this.addResizeWidthEvent(this.setSize)
    }

    beforeDestroy(): void {
        this.removeResizeWidthEvent()
    }

    setSize(): void {
        const width = window.innerWidth

        const breakpoints = {
            tablet: 650,
            tabletLate: 768,
            desktop: 1200,
        }

        this.device.size.mobile = width < breakpoints.tablet
        this.device.size.tablet = width < breakpoints.desktop && width >= breakpoints.tablet
        this.device.size.tabletLate = width < breakpoints.desktop && width >= breakpoints.tabletLate
        this.device.size.desktop = width >= breakpoints.desktop
    }

    setType() {
        this.device.type.desktop = !isMobile()
        this.device.type.mobile = isMobile()
    }
}
