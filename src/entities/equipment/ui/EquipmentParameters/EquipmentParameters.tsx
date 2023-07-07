import { RenderContext } from 'vue'
import * as tsx from 'vue-tsx-support'

type EquipmentParametersRowProps = {
    label: string
    value: string
}

const EquipmentParametersRowComponent = ({
    props: { label, value },
    data,
}: RenderContext<EquipmentParametersRowProps>) => {
    return (
        <div class={['equipment-parameters-row', data.staticClass, data.class]}>
            <p>{label}:&nbsp;</p>
            <p>{value}</p>
        </div>
    )
}

export const EquipmentParametersRow = tsx
    .ofType<EquipmentParametersRowProps>()
    .convert(EquipmentParametersRowComponent as any)

type EquipmentInfoRow = {
    label: string
    value: string
}

export type EquipmentParametersProps = {
    equipment: {
        info: EquipmentInfoRow[]
    }
}

export const EquipmentParametersComponent = ({
    props: {
        equipment: { info },
    },
}: RenderContext<EquipmentParametersProps>) => {
    return (
        <div class={'equipment-parameters'}>
            {info.map(({ label, value }, i) => (
                <EquipmentParametersRow
                    key={`${label} ${value}`}
                    class={'equipment-parameters__item'}
                    label={label}
                    value={value}
                />
            ))}
        </div>
    )
}

export const EquipmentParameters = tsx
    .ofType<EquipmentParametersProps>()
    .convert(EquipmentParametersComponent as any)
