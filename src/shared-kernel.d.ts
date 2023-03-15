declare type BrandedType<T, U> = T & { __tag?: U }
declare type RequiredBrandedType<T, U> = T & { __tag: U }

declare type DateTimeStamp = BrandedType<number, 'DateTimeStamp'>
declare type ImageView = {
    src: string
    alt: string
}
