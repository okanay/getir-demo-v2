import { useTranslations } from 'next-intl'
import { CategoryItems } from '@/components/Index-Components/CategoriesSection/CategoryItems'

export const Categories = () => {
   const t = useTranslations('Index.categories')

   return (
      <section
         id={'categories'}
         className={'mx-auto flex h-full w-full max-w-7xl flex-col items-start justify-start gap-1 px-8 py-12 font-openSans'}>
         {/*Categories text*/}
         <div className="grid h-full w-full grid-cols-4 baseTablet:grid-cols-5 lgTablet:grid-cols-10 lgTablet:gap-4 lgTablet:px-0">
            <div className="flex h-full w-full flex-col items-center py-2 text-center">
               <h4 className={'text-[14px] font-semibold leading-[19px] text-slate-800'}>{t('title')}</h4>
            </div>
         </div>
         {/*Categories*/}
         <div className="grid h-fit w-full grid-cols-4 items-center baseTablet:grid-cols-5 lgTablet:grid-cols-10 lgTablet:gap-4 lgTablet:px-0">
            <CategoryItems t={t} />
         </div>
      </section>
   )
}
