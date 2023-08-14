import { Suspense } from 'react'
import { Category } from '../../../../libs/types/types'
import { ProductsContainer } from '@/components/Categories-Page-Components/ProductItems/ProductsContainer'
import { ProductsLoading } from '@/components/Categories-Page-Components/ProductItems/ProductsLoading'
import { DummyData } from '../../../../libs/constants/DummyProducts'

type TProps = {
   categories?: string
   searchParams?: { [key: string]: string | string[] | undefined }
   data: Category
}

export const ProductItemsFetch = async ({ categories = 'beverages', data }: TProps) => {
   const products = await ProductFetch(data)

   return (
      <Suspense fallback={<ProductsLoading />}>
         <ProductsContainer data={data} products={products} />{' '}
      </Suspense>
   )
}

async function ProductFetch(category: Category) {
   const { unique } = category || -1
   return DummyData.filter(d => d.uniqueId === unique) || []
}
