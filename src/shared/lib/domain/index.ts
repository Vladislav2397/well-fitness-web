type EquipmentInfo = [key: string, value: string][]
type EquipmentRating = 1 | 2 | 3 | 4 | 5
type EquipmentQuantity = 0 | 1 | 2 | 3
type EquipmentPrice = [newPrice: number, oldPrice: number]

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

export type ArticleId = BrandedType<number, 'ArticleId'>
export type Article = {
    id: ArticleId
    image: ImageView
    title: string
    description: string
    date: DateTimeStamp
}

export type ViewerId = BrandedType<number, 'ViewerId'>
export type Viewer = {
    id: ViewerId
    firstname: string
    lastname: string
    email: string
    phone: string
}

export type BrandId = BrandedType<number, 'BrandId'>
export type Brand = {
    id: BrandId
    name: string
    logo: string
}
