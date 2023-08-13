'use client'

import { useTranslations } from 'next-intl'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Category } from '../../../../libs/types/types'
import { Products } from '@/components/Categories-Page-Components/ProductItems/ProductItemsFetch'
import { nanoid } from '@reduxjs/toolkit'
import { AltCategoryContainer } from '@/components/Categories-Page-Components/ProductItems/AltCategoryContainer'

type TProps = {
   data: Category
   products: Products
}

export const ProductsContainer = ({ data, products }: TProps) => {
   const t = useTranslations('')

   return (
      <div className={'mt-14 w-full px-6 py-2 baseTablet:mt-0 baseTablet:px-4'}>
         <div className={'mb-1.5 flex flex-row items-center gap-2 text-[14px] text-slate-900'}>
            <h1>{t('Index.categories.categoriesItems.' + data?.languageCode)}</h1>
            <ChevronRightIcon className={'h-4 w-4 text-gray-400'} />
            <h1>{data?.altCategories.at(0)?.name}</h1>
         </div>
         {data.altCategories.map((altCategory, index) => (
            <AltCategoryContainer key={nanoid()} index={index} altCategory={altCategory} products={products} />
         ))}
      </div>
   )
}
