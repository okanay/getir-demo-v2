'use client'
import { Category } from '../../../../libs/types/types'
import { motion } from 'framer-motion'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useTranslations } from 'next-intl'
import { useProductLink } from '@/hooks/useProductLink'
import { CategoryItemImage } from '@/components/Index-Components/Categories-Section/CategoryItemImage'
import Link from 'next/link'
import { nanoid } from '@reduxjs/toolkit'
import { useMediaQuery } from '@mantine/hooks'
import { useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

export const ProductsLinks = ({ category }: { category: Category }) => {
   const { open, setOpen, router, customPathname } = useProductLink(category.url)
   const t = useTranslations('Index.categories.categoriesItems')

   const handleToggleButton = () => {
      if (matches) setOpen(!open)
   }

   const handleSelectLink = () => {
      if (customPathname !== category.url) router.push(category.url)
      if (customPathname === category.url) handleToggleButton()
   }

   const matches = useMediaQuery('(min-width: 760px)')

   useEffect(() => {
      if (!matches && customPathname === category.url) setOpen(true)
   }, [matches, setOpen, customPathname, category])

   return (
      <div className={'flex w-fit flex-shrink-0 flex-col items-start justify-start py-2 baseTablet:w-full baseTablet:py-2'}>
         <button onClick={handleSelectLink} className={'flex w-full flex-row items-center justify-between px-2'}>
            <span className={'flex items-center justify-start gap-2'}>
               <div className={'hidden h-8 w-8 rounded border border-gray-200 baseTablet:block'}>
                  <CategoryItemImage category={category} />
               </div>
               <h4 className={'text-[12px] font-semibold text-slate-100 baseTablet:text-[14px] baseTablet:text-slate-600'}>
                  {t(category.languageCode)}
               </h4>
            </span>
            <ChevronDownIcon className={'hidden h-[20px] w-[20px] text-gray-400 baseTablet:block'} />
         </button>
         <motion.div
            initial={{ height: open ? 'fit-content' : 0 }}
            animate={{ height: open ? 'fit-content' : 0 }}
            transition={{ duration: !matches ? 0 : 0.2, ease: 'linear' }}
            className={'w-full overflow-y-hidden'}>
            <div>
               <motion.div
                  animate={{ opacity: open ? 1 : 0 }}
                  transition={{ duration: matches ? 0.4 : 0, ease: 'linear' }}
                  className={`absolute bottom-0 left-0 w-full translate-y-full overflow-x-auto py-2 baseTablet:relative baseTablet:h-fit baseTablet:translate-y-0 baseTablet:pb-0 baseTablet:pt-2 
               ${category.url !== customPathname && 'hidden baseTablet:block'}
               ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                  <div
                     className={`flex w-full flex-row items-center justify-start gap-x-2 px-4 baseTablet:h-fit baseTablet:w-full baseTablet:flex-col baseTablet:px-0`}>
                     {category.altCategories?.map((altCategory, index) => (
                        <Link
                           key={nanoid()}
                           href={altCategory.url}
                           className={'flex w-fit flex-shrink-0 baseTablet:w-full baseTablet:flex-row baseTablet:px-2'}>
                           <span className={'flex w-full items-center justify-start gap-2'}>
                              <div className={'hidden h-8 w-8 baseTablet:block'} />
                              <h6
                                 className={twMerge(
                                    'rounded border border-gray-200 bg-white px-2 py-1 text-[12px] font-semibold text-skin-theme-700 baseTablet:rounded-none baseTablet:border-0 baseTablet:bg-transparent baseTablet:px-0 baseTablet:py-0 baseTablet:py-0 baseTablet:text-[14px] baseTablet:text-slate-600',
                                    index === 0 && 'border-skin-theme-600 bg-skin-theme-700 text-white',
                                 )}>
                                 {altCategory.languageCode}
                              </h6>
                           </span>
                           <ChevronRightIcon className={'mr-0.5 hidden h-[20px] w-[20px] text-gray-400'} />
                        </Link>
                     ))}
                  </div>
               </motion.div>
            </div>
         </motion.div>
      </div>
   )
}
