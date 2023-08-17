'use client'

import Link from 'next/link'

import { Category } from '../../../../libs/types/types'
import { ImageOptimization } from '@/components/UI-Components/ImageOptimization'
import { useLocale, useTranslations } from 'next-intl'

export const CategoryItem = ({ category }: { category: Category }) => {
   const t = useTranslations('Categories.CategoriesList')
   const locale = useLocale()

   return (
      <Link
         href={category.url}
         locale={locale}
         className="flex h-24 w-full flex-col items-center justify-start gap-1 rounded-lg border border-transparent py-2 text-center transition-colors duration-300 hover:border-skin-theme-50 hover:bg-skin-theme-50"
      >
         <div className={'flex w-full flex-col items-center justify-start gap-2'}>
            <div className={'relative h-11 w-11 overflow-hidden rounded-lg border border-slate-300 bg-white'}>
               <ImageOptimization alt={{ tr: '', en: '' }} imageNormal={category.image} imageSmall={category.imageSmall} />
            </div>
            <h4 className={'text-[10px] font-medium leading-[16px] text-slate-700 smPhone:text-[14px]'}>
               {t(category.languageCode)}
            </h4>
         </div>
      </Link>
   )
}
