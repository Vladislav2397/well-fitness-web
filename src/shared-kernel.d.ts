export type EquipmentId = BrandedType<string, 'EquipmentId'>
export type Equipment = {
    id: EquipmentId
    name: string
    image: {
        src: string
        alt: string
    }
    hasShowRoom: boolean
    price: EquipmentPrice
    quantity: 0 | 1 | 2 | 3
    rating: 0 | 1 | 2 | 3 | 4 | 5
    info: EquipmentInfo
}
