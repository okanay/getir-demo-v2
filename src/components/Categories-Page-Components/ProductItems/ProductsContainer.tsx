'use client'

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { useTranslations } from 'next-intl'
import { nanoid } from '@reduxjs/toolkit'
import { ProductsAltCategory } from '@/components/Categories-Page-Components/ProductItems/ProductsAltCategory'
import { TProducts } from '../../../../libs/constants/DummyProducts'
import { Category } from '../../../../libs/types/types'

type TProps = {
   category: Category
   products: TProducts
}

export const ProductsContainer = ({ category, products }: TProps) => {
   const t = useTranslations('')
   const { altCategories, languageCode } = category

   return (
      <div className={'w-full'}>
         <div className={'flex flex-row items-center px-4 text-[14px] font-semibold text-slate-900 baseTablet:px-0'}>
            <h1>{t('Categories.CategoriesList.' + languageCode)}</h1>
            <ChevronRightIcon className={'h-4 w-4 text-gray-400'} />
            <h1>{t('Categories.CategoriesList.' + altCategories[0].languageCode)}</h1>
         </div>
         {altCategories.map((altCategory, index) => (
            <ProductsAltCategory key={nanoid()} index={index} altCategory={altCategory} products={products} />
         ))}
      </div>
   )
}
