<template lang="pug">

.b-equipment-filters
    .__group(
        v-for="group in groups"
    )
        .__title {{ group.title }}
        template(
            v-if="group.type === 'checkboxes'"
        )
            label.__condition(
                v-for="([ name, value ]) in group.conditions"
            )
                c-checkbox.__checkbox(
                    type="checkbox"
                    :checked="getCheckboxValue(group, value)"
                    @input.prevent="addFilter(group.type, group.name, value)"
                )
                span {{ name }}


</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Dictionary } from 'vue-router/types/router'

import { Checkbox } from '@/shared/ui/Checkbox'

import { updateQueryParams } from '../../lib'

export type EquipmentFiltersProps = {
    //
}

type CheckboxesFilterGroup = {
    type: 'checkboxes'
    title: string
    name: string
    conditions: [name: string, value: string][]
}
type SliderFilterGroup = {
    type: 'slider'
    title: string
    name: string
    min: number
    max: number
}
type FilterGroup = CheckboxesFilterGroup | SliderFilterGroup

const typesMap = new Map<FilterGroup['type'], 'array' | 'primitive'>([
    ['checkboxes', 'array'],
    ['slider', 'primitive'],
])

@Component({
    components: {
        'c-checkbox': Checkbox,
    },
})
export default class EquipmentFilters extends Vue {
    get filters() {
        return this.$route.query
    }
    set filters(filters) {
        //
    }

    getCheckboxValue(group: FilterGroup, item: string) {
        const currentGroup = this.filters[group.name] ?? []

        return currentGroup.includes(item)
    }

    getSliderValue(group: FilterGroup, item: string) {
        //
    }

    async addFilter(
        groupType: FilterGroup['type'],
        key: string,
        value: string
    ) {
        const { path, query } = this.$route

        const type = typesMap.get(groupType)

        console.log('query', query)

        if (!type) return

        await this.$router.push({
            path,
            query: updateQueryParams(
                query,
                type,
                key,
                value
            ) as Dictionary<string>,
        })
    }

    get groups(): FilterGroup[] {
        return [
            {
                type: 'checkboxes',
                title: 'Производители',
                name: 'creator',
                conditions: [
                    ['Gym80', '1'],
                    ['CardioPower', '2'],
                    ['Original Fitness', '3'],
                    ['Nautilus', '4'],
                ],
            },
            {
                type: 'checkboxes',
                title: 'Функциональность',
                name: 'functionality',
                conditions: [
                    ['Gym80', '1'],
                    ['CardioPower', '2'],
                ],
            },
            {
                type: 'checkboxes',
                title: 'Акции',
                name: 'promo',
                conditions: [
                    ['Gym80', '1'],
                    ['CardioPower', '2'],
                    ['Nautilus', '4'],
                ],
            },
            {
                type: 'slider',
                title: 'Цена',
                name: 'price',
                min: 2000,
                max: 1_500_000,
            },
        ]
    }
}
</script>

<!-- <style lang="scss" src="./EquipmentFilters.critical.scss" /> -->
<!-- <style lang="scss" src="./EquipmentFilters.main.scss" /> -->
