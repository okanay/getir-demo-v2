import { ProductsItems } from '@/components/Categories-Page-Components/ProductItems/ProductsItems'
import { CategoriesHelper } from '../../../../../libs/helpers/CategoriesPageHelpers'
import { ProductsMenu } from '@/components/Categories-Page-Components/ProductsMenu/ProductsMenu'

type TProps = {
   params: { categories: string }
   searchParams: { [key: string]: string | string[] | undefined }
}

export default function CategoriesRootPage({ searchParams, params: { categories } }: TProps) {
   CategoriesHelper.CheckIsValidPathname(categories)
   return <ProductsItems categories={categories} searchParams={searchParams} />
}
