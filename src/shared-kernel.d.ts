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
    quantity: EquipmentQuantity
    rating: EquipmentRating
    info: EquipmentInfo
}
