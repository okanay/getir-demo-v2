import { Suspense } from 'react'
import { ProductsContainer } from '@/components/Categories-Page-Components/ProductItems/ProductsContainer'
import { LoadingItems } from '@/components/Categories-Page-Components/ProductItems/LoadingItems'
import { DummyData } from '../../../../libs/constants/DummyProducts'
import { Category } from '../../../../libs/types/types'

type TProps = {
   categories?: string
   searchParams?: { [key: string]: string | string[] | undefined }
   category: Category
}

export const ProductItemsFetch = async ({ categories = 'beverages', category }: TProps) => {
   const products = await ProductFetch(category)

   return (
      <Suspense fallback={<LoadingItems />}>
         <ProductsContainer category={category} products={products} />{' '}
      </Suspense>
   )
}

async function ProductFetch(category: Category) {
   const { unique } = category || -1

   await new Promise(resolve => setTimeout(resolve, 500))

   return DummyData.filter(d => d.uniqueId === unique) || []
}
