import { CategoryList } from '../../../../libs/constants/CategoriesList'
import { Category } from '../../../../libs/types/types'
import { redirect } from 'next/navigation'
import { ProductItemsList } from '@/components/Categories-Page-Components/ProductItems/ProductItemsList'

type TProps = {
   categories?: string
   searchParams?: { [key: string]: string | string[] | undefined }
}

export const ProductsItems = async ({ categories = 'beverages', searchParams }: TProps) => {
   const selectedCategories: Category | undefined = CategoryList.find(c => c.url.includes(`?c=${searchParams?.c}`))
   if (selectedCategories === undefined) redirect('/categories/beverages?c=1')

   return <ProductItemsList selectedCategories={selectedCategories} categories={categories} />
}
