'use client'
import { Category } from '../../../../libs/types/types'
import { motion } from 'framer-motion'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useTranslations } from 'next-intl'
import { useProductLink } from '@/hooks/useProductLink'
import { CategoryItemImage } from '@/components/Index-Components/Categories-Section/CategoryItemImage'
import Link from 'next/link'

export const ProductsLinks = ({ category }: { category: Category }) => {
   const { open, setOpen, router, customPathname } = useProductLink(category.url)
   const t = useTranslations('Index.categories.categoriesItems')

   const handleToggleButton = () => setOpen(!open)

   const handleSelectLink = () => {
      if (customPathname !== category.url) router.push(category.url)
      if (customPathname === category.url) handleToggleButton()
   }

   return (
      <div className={'flex w-fit flex-shrink-0 flex-col  items-start justify-start py-2 baseTablet:w-full '}>
         <button onClick={handleSelectLink} className={'flex w-full flex-row items-center justify-between px-2'}>
            <span className={'flex items-center justify-start gap-2'}>
               <div className={'hidden h-8 w-8 rounded border border-gray-200 baseTablet:block'}>
                  <CategoryItemImage category={category} />
               </div>
               <h4 className={'text-[12px] font-semibold text-slate-100 baseTablet:text-[14px] baseTablet:text-slate-800'}>
                  {t(category.languageCode)}
               </h4>
            </span>
            <ChevronDownIcon className={'hidden h-[20px] w-[20px] text-gray-400 baseTablet:block'} />
         </button>
         <motion.div
            initial={{ height: open ? 'fit-content' : 0 }}
            animate={{ height: open ? 'fit-content' : 0 }}
            className={'w-full overflow-hidden'}>
            <div className="absolute bottom-0 left-0 w-full translate-y-full border border-gray-200 bg-white py-2 baseTablet:relative baseTablet:h-fit baseTablet:translate-y-0 baseTablet:border-0 baseTablet:bg-transparent baseTablet:pb-0 baseTablet:pt-2">
               <div
                  className={'flex flex-row gap-x-2 px-2 baseTablet:h-fit baseTablet:w-full baseTablet:flex-col baseTablet:px-0'}>
                  <Link
                     href={category.url}
                     className={'flex h-full w-fit flex-row items-center baseTablet:w-full baseTablet:px-2'}>
                     <span className={'flex w-full items-center justify-start gap-2'}>
                        <div className={'hidden h-8 w-8 baseTablet:block'} />
                        <h6 className="rounded border border-skin-theme-600 bg-skin-theme-700 px-2 py-1 text-[12px] font-semibold text-slate-100 baseTablet:rounded-none baseTablet:border-0 baseTablet:bg-transparent baseTablet:px-0 baseTablet:py-0 baseTablet:text-[14px] baseTablet:text-slate-800">
                           {category.unique}
                        </h6>
                     </span>
                     <ChevronRightIcon className={'mr-0.5 hidden h-[20px] w-[20px] text-gray-400 baseTablet:block'} />
                  </Link>
                  <Link
                     href={category.url}
                     className={'flex h-full w-fit flex-row items-center baseTablet:w-full baseTablet:px-2'}>
                     <span className={'flex w-full items-center justify-start gap-2'}>
                        <div className={'hidden h-8 w-8 baseTablet:block'} />
                        <h6 className="rounded border border-gray-200 bg-white px-2 py-1 text-[12px] font-semibold text-skin-theme-700 baseTablet:rounded-none baseTablet:border-0 baseTablet:bg-transparent baseTablet:px-0 baseTablet:py-0 baseTablet:text-[14px] baseTablet:text-slate-800">
                           {category.languageCode}
                        </h6>
                     </span>
                     <ChevronRightIcon className={'mr-0.5 hidden h-[20px] w-[20px] text-gray-400'} />
                  </Link>
               </div>
            </div>
         </motion.div>
      </div>
   )
}
