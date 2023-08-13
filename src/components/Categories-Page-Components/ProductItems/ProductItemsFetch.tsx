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

export const DummyData: Products = [
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
      imageDetails: [
         {
            baseSrc: '',
            smallSrc: '',
            alt: '',
         },
      ],
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

export type Product = {
   productId: number
   uniqueId: string
   altCategoryId: number
   productDetails: ProductDetail[]
   imageDetails: ImageDetail[]
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

export type ProductDetail = {
   lan: string
   text: string
   description: string
}

export type ImageDetail = {
   baseSrc: string
   smallSrc: string
   alt: string
}

export type Products = Product[]
