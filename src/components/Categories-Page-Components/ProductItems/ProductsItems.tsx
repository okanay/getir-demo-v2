import { CategoryList } from '../../../../libs/constants/CategoriesList'
import { AltCategory, Category } from '../../../../libs/types/types'
import { redirect } from 'next/navigation'
import { ProductItemsList } from '@/components/Categories-Page-Components/ProductItems/ProductItemsList'
import { Suspense } from 'react'
import { ProductsLoading } from '@/components/Categories-Page-Components/ProductsLoading'
import { nanoid } from '@reduxjs/toolkit'

type TProps = {
   categories?: string
   searchParams?: { [key: string]: string | string[] | undefined }
}

export const ProductsItems = async ({ categories = 'beverages', searchParams }: TProps) => {
   const selectedCategories: Category | undefined = CategoryList.find(c => c.url.includes(`?c=${searchParams?.c}`))
   if (selectedCategories === undefined) redirect('/categories/beverages?c=1')

   const products = await ProductFetch(selectedCategories)

   return <ProductItemsList selectedCategories={selectedCategories} categories={categories} products={products} />
}

async function ProductFetch(category: Category) {
   const { unique } = category
   return DummyData.filter(d => d.uniqueId === unique) || []
}

export const DummyData: Products = [
   {
      productId: 1,
      uniqueId: 'C1',
      altCategoryId: 100,
      productDetails: [
         {
            lan: 'tr',
            text: 'Kuzeyden Su',
            description: '',
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
   productDetails: [
      {
         lan: string
         text: string
         description: string
      },
   ]
   imageDetails: [
      {
         baseSrc: string
         smallSrc: string
         alt: string
      },
   ]
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

export type Products = Product[]
