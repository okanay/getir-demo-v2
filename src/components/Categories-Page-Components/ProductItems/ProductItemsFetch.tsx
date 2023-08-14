import { Suspense } from 'react'
import { Category } from '../../../../libs/types/types'
import { ProductsContainer } from '@/components/Categories-Page-Components/ProductItems/ProductsContainer'
import { ProductsLoading } from '@/components/Categories-Page-Components/ProductItems/ProductsLoading'

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

export const DummyData: TProducts = [
   {
      productId: 1,
      uniqueId: '1',
      altCategoryId: 100,
      productDetails: [
         {
            lan: 'tr',
            text: 'Kuzeyden Su',
            description: '12 x 330 ml',
         },
         {
            lan: 'en',
            text: 'Kuzeyden Water',
            description: '12 x 330 ml',
         },
      ],
      imageDetails: {
         imageNormal: '/images/Products/Beverages/Water/1Normal.jpg',
         imageSmall: '/images/Products/Beverages/Water/1Small.png',
         alt: {
            tr: '',
            en: '',
         },
      },
      brand: {
         brandId: 1000,
         brandName: 'Kuzeyden Su',
      },
      price: {
         fullPrice: 69.99,
         discount: {
            status: false,
            percentage: 0,
         },
      },
   },
]

export type TProduct = {
   productId: number
   uniqueId: string
   altCategoryId: number
   productDetails: TProductDetail[]
   imageDetails: TProductImageDetail
   brand: {
      brandId: number
      brandName: string
   }
   price: {
      fullPrice: number
      discount: {
         status: boolean
         percentage: number
      }
   }
}

export type TProductDetail = {
   lan: string
   text: string
   description: string
}

export type TProductImageDetail = {
   imageNormal: string
   imageSmall: string
   alt: {
      tr: string
      en: string
   }
}

export type TProducts = TProduct[]
