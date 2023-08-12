'use client'

import { Category } from '../../../../libs/types/types'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useLocale, useTranslations } from 'next-intl'
import { useProductLink } from '@/hooks/useProductLink'
import { CategoryItemImage } from '@/components/Index-Page-Components/Categories-Section/CategoryItemImage'
import { nanoid } from '@reduxjs/toolkit'
import { useMediaQuery } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import { AltLink } from '@/components/Categories-Page-Components/ProductsMenu/AltLink'

export const MenuLink = ({ category }: { category: Category }) => {
   const [selectedIndex, setSelectedIndex] = useState<number>(0)
   //
   const { open, setOpen, router, customPathname } = useProductLink(category.url)
   //
   const t = useTranslations('Index.categories.categoriesItems')
   //
   const matches = useMediaQuery('(min-width: 760px)')
   //
   const handleToggleButton = () => {
      if (matches) {
         setOpen(!open)
      }
   }
   //
   const handleSelectLink = () => {
      if (customPathname !== category.url) router.push(category.url)
      if (customPathname === category.url) handleToggleButton()
   }
   //
   useEffect(() => {
      if (!matches && customPathname === category.url) setOpen(true)
   }, [matches, setOpen, customPathname, category])

   return (
      <div className="flex w-fit flex-shrink-0 flex-col items-start justify-start bg-transparent py-2 baseTablet:w-full baseTablet:py-2">
         <button className={'flex w-full flex-row items-center justify-between px-2'} onClick={handleSelectLink}>
            <span className={'flex items-center justify-start gap-2'}>
               <div className={'hidden h-8 w-8 rounded border border-gray-200 baseTablet:block'}>
                  <CategoryItemImage category={category} />
               </div>
               <h4 className="text-[12px] font-semibold text-slate-100 baseTablet:text-[14px] baseTablet:text-slate-600">
                  {t(category.languageCode)}
               </h4>
            </span>
            <ChevronDownIcon className={'hidden h-[20px] w-[20px] text-gray-400 baseTablet:block'} />
         </button>
         <div className={'w-full overflow-y-hidden'}>
            <div
               className={`absolute bottom-0 left-0 w-full translate-y-full overflow-x-auto bg-white baseTablet:relative baseTablet:h-fit baseTablet:translate-y-0 baseTablet:bg-transparent`}>
               <AnimatePresence>
                  <motion.div
                     initial={{ height: 'var(--from-height, 0px)' }}
                     animate={{ height: open ? 'var(--to-height, 0px)' : 'var(--from-height, 0px)' }}
                     exit={{ height: 'var(--from-height, 0px)' }}
                     transition={{ duration: 0.5, type: 'tween', ease: 'linear' }}
                     className="overflow-y-hidden [--from-height:auto] [--to-height:auto] baseTablet:[--from-height:0px] baseTablet:[--to-height:auto]">
                     <div
                        className={`flex flex-row items-center justify-start gap-2 px-4 py-2 baseTablet:block baseTablet:px-0 baseTablet:py-0
                        ${open ? '' : 'hidden'}`}>
                        {category.altCategories.map((altCategory, index) => (
                           <div
                              key={altCategory.languageCode + index}
                              className={'h-fit w-fit flex-shrink-0 flex-grow-0 baseTablet:w-full '}>
                              <AltLink
                                 altCategory={altCategory}
                                 index={index}
                                 selectedIndex={selectedIndex}
                                 setSelectedIndex={setSelectedIndex}
                              />
                           </div>
                        ))}
                     </div>
                  </motion.div>
               </AnimatePresence>
            </div>
         </div>
      </div>
   )
}
