import { Brand } from '@/shared/lib/domain'

type CategoryId = number
type BrandServer = Brand & { category: CategoryId }

export const getBrands = (brands: BrandServer[], categoryId?: CategoryId) => {
    if (categoryId) {
        return brands.filter(brand => brand.category === categoryId)
    }

    return brands
}
