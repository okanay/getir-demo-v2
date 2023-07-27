import { Category } from '../../../../libs/types/types'
import Link from 'next/link'
import { CategoryItemImage } from '@/components/Index-Components/CategoriesSection/CategoryItemImage'

export const CategoryItem = ({ category, t }: { category: Category; t: any }) => {
   return (
      <Link
         href={category.url}
         className="flex h-24 w-full flex-col items-center justify-start gap-1 rounded-lg border border-transparent py-2 text-center transition-colors duration-300 hover:border-skin-theme-50 hover:bg-skin-theme-50">
         <div className={'flex w-full flex-col items-center justify-start gap-2'}>
            <div className={'relative h-10 w-10 overflow-hidden rounded-lg border border-slate-300 bg-white'}>
               <CategoryItemImage category={category} />
            </div>
            <h4 className={'text-[10px] font-medium leading-[16px] text-slate-700 lgPhone:text-[15px]'}>
               {t('categoriesItems.' + category.languageCode)}
            </h4>
         </div>
      </Link>
   )
}
