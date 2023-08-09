'use client'
import { Category } from '../../../../libs/types/types'
import { motion } from 'framer-motion'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useTranslations } from 'next-intl'
import { useProductLink } from '@/hooks/useProductLink'
import { CategoryItemImage } from '@/components/Index-Page-Components/Categories-Section/CategoryItemImage'
import Link from 'next/link'
import { nanoid } from '@reduxjs/toolkit'
import { useMediaQuery } from '@mantine/hooks'
import { useCallback, useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { AltLink } from '@/components/Categories-Page-Components/ProductsMenu/AltLink'

export const MenuLink = ({ category }: { category: Category }) => {
   const [selectedIndex, setSelectedIndex] = useState<number>(0)
   const matches = useMediaQuery('(min-width: 760px)')
   const { open, setOpen, router, customPathname } = useProductLink(category.url)
   const t = useTranslations('Index.categories.categoriesItems')

   useEffect(() => {
      if (!matches && customPathname === category.url) setOpen(true)
   }, [matches, setOpen, customPathname, category])

   const handleToggleButton = () => {
      if (matches) {
         setOpen(!open)
      }
   }

   const handleSelectLink = () => {
      if (customPathname !== category.url) router.push(category.url)
      if (customPathname === category.url) handleToggleButton()
   }

   function AltLinks() {
      return category.altCategories?.map((altCategory, index) => (
         <AltLink
            key={nanoid()}
            altCategory={altCategory}
            index={index}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
         />
      ))
   }

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
            transition={{ duration: !matches ? 0 : 0.4, ease: 'linear' }}
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
                     <AltLinks />
                  </div>
               </motion.div>
            </div>
         </motion.div>
      </div>
   )
}
