// import { Model as ModelORM, mapRepos } from '@vuex-orm/core'
import { createDecorator } from 'vue-class-component'
import { mapActions, mapGetters } from 'vuex'

export const Getter = createDecoratorFactory('computed', mapGetters)
export const Action = createDecoratorFactory('methods', mapActions)
// export const Model = createDecoratorFactory<typeof ModelORM>('computed', mapRepos)

function createDecoratorFactory<ArgType = string>(
    optionsKey: 'computed' | 'methods',
    mapFn: any,
) {
    return (value: ArgType) => {
        return createDecorator((options, key) => {
            const mapObject = { [key]: value }

            if (typeof options[optionsKey] === 'undefined') {
                options[optionsKey] = {}
            }

            if (typeof options[optionsKey]![key] !== 'undefined') {
                return
            }

            options[optionsKey]![key] = mapFn(mapObject)[key]
        })
    }
}

export const Service = (serviceName: string) =>
    createDecorator((options, key) => {
        if (!('dependencies' in options)) {
            // @ts-ignore
            options['dependencies'] = {}
        }

        // @ts-ignore
        options.dependencies[key] = serviceName
    })
