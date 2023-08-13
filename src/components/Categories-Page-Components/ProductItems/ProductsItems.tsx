import { CategoryList } from '../../../../libs/constants/CategoriesList'
import { Category } from '../../../../libs/types/types'
import { redirect } from 'next/navigation'
import { ProductItemsList } from '@/components/Categories-Page-Components/ProductItems/ProductItemsList'
import { Suspense } from 'react'
import { ProductsLoading } from '@/components/Categories-Page-Components/ProductItems/ProductsLoading'

type TProps = {
   categories?: string
   searchParams?: { [key: string]: string | string[] | undefined }
}

export const ProductsItems = async ({ categories = 'beverages', searchParams }: TProps) => {
   const selectedCategories: Category | undefined = CategoryList.find(c => c.url.includes(`?c=${searchParams?.c}`))
   if (selectedCategories === undefined) redirect('/categories/beverages?c=1')

   const products = await ProductFetch(selectedCategories)

   return (
      <Suspense fallback={<ProductsLoading />}>
         <ProductItemsList selectedCategories={selectedCategories} categories={categories} products={products} />{' '}
      </Suspense>
   )
}

async function ProductFetch(category: Category) {
   const { unique } = category
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
