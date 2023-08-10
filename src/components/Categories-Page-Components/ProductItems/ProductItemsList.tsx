'use client'

import { useTranslations } from 'next-intl'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Category } from '../../../../libs/types/types'
import { Products } from '@/components/Categories-Page-Components/ProductItems/ProductsItems'
import { nanoid } from '@reduxjs/toolkit'
import { ProductAltMenu } from '@/components/Categories-Page-Components/ProductItems/ProductAltMenu'
import { ProductsLoading } from '@/components/Categories-Page-Components/ProductsLoading'

type TProps = {
   selectedCategories: Category
   categories?: string
   products: Products
}

export const ProductItemsList = ({ categories, selectedCategories, products }: TProps) => {
   const t = useTranslations('')

   return (
      <div className={'mt-14 w-full px-6 py-2 baseTablet:mt-0 baseTablet:px-4'}>
         <div className={'mb-1.5 flex flex-row items-center gap-2 text-[14px] text-slate-900'}>
            <h1>{t('Index.categories.categoriesItems.' + selectedCategories?.languageCode)}</h1>
            <ChevronRightIcon className={'h-4 w-4 text-gray-400'} />
            <h1>{selectedCategories?.altCategories.at(0)?.name}</h1>
         </div>
         {selectedCategories.altCategories.map((altCategory, index) => (
            <ProductAltMenu key={nanoid()} index={index} altCategory={altCategory} />
         ))}
      </div>
   )
}
