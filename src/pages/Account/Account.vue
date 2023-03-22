<template lang="pug">

.b-account
    page-breadcrumb-layout(
        :breadcrumbs="['В каталог']"
        title="Личный кабинет"
    )
    aside-layout
        template(
            #aside
        )
            c-side-viewer(
                :viewer="viewer"
            )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { PageBreadcrumbLayout } from '@/shared/layout/PageBreadcrumbLayout'
import { AsideLayout } from '@/shared/layout/AsideLayout'
import { SideViewer } from '@/entities/viewer/ui/SideViewer'

export type AccountProps = {
    //
}

@Component({
    components: {
        'aside-layout': AsideLayout,
        'page-breadcrumb-layout': PageBreadcrumbLayout,
        'c-side-viewer': SideViewer,
    },
})
export default class Account extends Vue {
    get viewer() {
        return {
            id: 1,
            firstname: 'Андрей',
            lastname: 'Константинопольский',
            email: 'andre@gmail.com',
            phone: '+7 (900) 900-90-90',
        }
    }
}
</script>

<!-- <style lang="scss" src="./Account.critical.scss" /> -->
<!-- <style lang="scss" src="./Account.main.scss" /> -->
