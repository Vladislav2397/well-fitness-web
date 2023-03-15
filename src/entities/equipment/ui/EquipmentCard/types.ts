export type EquipmentCard = {
    quantity: string | number
    hasShowRoom: boolean
    info: [key: string, value: string][]
    title: string
    rating: number
    price: string[]

    isTitleBold: boolean
    isRatingLabel: boolean
    isPriceRow: boolean
    hasRating: boolean
}
