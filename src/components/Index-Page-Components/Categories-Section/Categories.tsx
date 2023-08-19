'use client'

import { useTranslations } from 'next-intl'

import { CategoryItems } from '@/components/Index-Page-Components/Categories-Section/CategoryItems'

export const Categories = () => {
   const t = useTranslations('Categories')

   return (
      <section
         id={'categories'}
         className={
            'mx-auto flex h-full w-full max-w-7xl flex-col items-start justify-start gap-1 py-12 font-openSans baseTablet:px-8'
         }>
         {/*Categories text*/}
         <div className="grid h-full w-full grid-cols-4 baseTablet:grid-cols-5 lgTablet:grid-cols-10 lgTablet:gap-4 lgTablet:px-0">
            <div className="flex h-full w-full flex-col items-center py-2 text-center">
               <h4 className={'text-[14px] font-semibold leading-[19px] text-slate-800'}>{t('CategoriesMenuTitle')}</h4>
            </div>
         </div>
         {/*Categories*/}
         <div className="grid h-fit w-full grid-cols-4 items-center gap-2 px-4 baseTablet:grid-cols-5 baseTablet:px-0 lgTablet:grid-cols-10 lgTablet:gap-4 lgTablet:px-0">
            <CategoryItems />
         </div>
      </section>
   )
}
