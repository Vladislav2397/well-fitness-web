// import { brandModel } from "@/entities/brand"
// import { Model, Attr, BelongsTo } from "@vuex-orm/core"
// import {Maybe} from "@/types/common"
//
// const YEAR = 12
// const MINIMAL_PAYMENT_YEARS = 3
//
// // TODO: Promotion entity or module
// type Promotion = {
//     id: number
//     name: string
//     description: string
//     color: string
// }
//
// export default class Equipment extends Model {
//     static entity = 'equipments'
//
//     static primaryKey = 'id'
//
//     @Attr(null) id!: string | number
//     @Attr(null) name!: string
//     @Attr(null) label!: string
//     @Attr(null) description!: string
//     @Attr(null) promotion!: string
//     @Attr() category_id!: number
//     @Attr(null) rating!: number
//     @Attr(null) stock!: Maybe<1 | 2 | 3>
//     @Attr(null) hasShowRoom!: boolean
//     @Attr(null) prices!: {
//         current: number
//         old?: number
//         dealer?: number
//         bonus?: number
//     }
//
//     @Attr(null) images!: string[]
//     @Attr(null) configuration!: {
//         id: number
//         name: string
//         list: {
//             id: number
//             name: string
//             price?: number
//             color?: string
//         }[]
//     }[]
//     @Attr({}) characteristics!: Record<string, string>
//     @Attr(null) ratings!: Maybe<{
//         functionality: number
//         quality: number
//         comfort: number
//         price: number
//     }>
//     // @Attr(null) services!: string[]
//
//     @BelongsTo(() => brandModel.Brand, 'brand_id')
//     brand_id!: number
//
//     get installementPlan(): number {
//         return this.prices.current / (YEAR * MINIMAL_PAYMENT_YEARS)
//     }
//
//     get totalRating(): number {
//         if (this.ratings) {
//             const values = Object.values(this.ratings)
//             const commonSum = values.reduce((total, value) => total + value)
//
//             return commonSum / values.length
//         }
//         return 0
//     }
// }
