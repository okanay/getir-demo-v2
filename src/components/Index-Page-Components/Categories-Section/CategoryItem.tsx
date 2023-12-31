'use client'

import Link from 'next/link'

import { Category } from '../../../../libs/types/types'
import { ImageLocalization } from '@/components/UI-Components/ImageLocalization'
import { useTranslations } from 'next-intl'
import { useDispatch } from 'react-redux'
import { setCategoryOpenCloseIndex } from '../../../../redux/slices/CategoryOpenCloseSlice'

export const CategoryItem = ({ category }: { category: Category }) => {
   const t = useTranslations('Categories.CategoriesList')

   const dispatch = useDispatch()
   const handleOnClick = () => {
      dispatch(setCategoryOpenCloseIndex(Number(category.unique)))
   }

   return (
      <Link
         style={{ WebkitTapHighlightColor: 'transparent' }}
         href={'/'}
         as={`../${category.url}`}
         onClick={handleOnClick}
         className="flex h-24 w-full flex-col items-center justify-start gap-1 rounded-2xl border border-transparent py-2 text-center transition-colors duration-300 hover:border-skin-theme-50 hover:bg-skin-theme-50">
         <div className={'flex w-full flex-col items-center justify-start gap-2'}>
            <div className={'relative h-11 w-11 overflow-hidden rounded-lg border border-slate-300 bg-white'}>
               <ImageLocalization alt={{ tr: '', en: '' }} image={category.image} />
            </div>
            <h4 className={'text-[10px] font-medium leading-[16px] text-slate-700 smPhone:text-[14px]'}>
               {t(category.languageCode)}
            </h4>
         </div>
      </Link>
   )
}
