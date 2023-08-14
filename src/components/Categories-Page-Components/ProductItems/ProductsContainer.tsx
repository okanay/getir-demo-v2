'use client'

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { useTranslations } from 'next-intl'
import { nanoid } from '@reduxjs/toolkit'
import { AltCategoryContainer } from '@/components/Categories-Page-Components/ProductItems/AltCategoryContainer'
import { TProducts } from '../../../../libs/constants/DummyProducts'
import { Category } from '../../../../libs/types/types'

type TProps = {
   data: Category
   products: TProducts
}

export const ProductsContainer = ({ data, products }: TProps) => {
   const t = useTranslations('')

   return (
      <div className={'w-full'}>
         <div className={'mb-1.5 flex flex-row items-center gap-2 px-4 text-[14px] font-semibold text-slate-900 baseTablet:px-0'}>
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
