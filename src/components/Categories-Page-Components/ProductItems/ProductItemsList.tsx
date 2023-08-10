'use client'

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Category } from '../../../../libs/types/types'
import { useTranslations } from 'next-intl'

type TProps = {
   selectedCategories: Category
   categories?: string
}

export const ProductItemsList = ({ categories, selectedCategories }: TProps) => {
   const t = useTranslations('')

   return (
      <div className={'mt-14 h-96 w-full px-6 py-2 baseTablet:mt-0 baseTablet:px-4'}>
         <div className={'flex flex-row items-center gap-2 text-[14px] text-slate-900'}>
            <h1>{t('Index.categories.categoriesItems.' + selectedCategories?.languageCode)}</h1>
            <ChevronRightIcon className={'h-4 w-4 text-gray-400'} />
            <h1>{selectedCategories?.altCategories.at(0)?.name}</h1>
         </div>
      </div>
   )
}
