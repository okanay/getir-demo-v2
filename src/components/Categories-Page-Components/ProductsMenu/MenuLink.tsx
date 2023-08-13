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
import { useRouter, useSearchParams } from 'next/navigation'

export const MenuLink = ({ category }: { category: Category }) => {
   const t = useTranslations('Index.categories.categoriesItems')
   //
   const params = useSearchParams()
   const router = useRouter()
   //
   const initialCSearchParamsValue = params?.get('c') || '0'
   const matches = useMediaQuery('(min-width: 760px)')
   //
   const [cValue, setCValue] = useState<string>(initialCSearchParamsValue)
   const [open, setOpen] = useState<boolean>(true)
   const [selectedIndex, setSelectedIndex] = useState<number>(0)
   const [count, setCount] = useState(0)
   //
   useEffect(() => {
      const c = String(params.get('c'))
      setCValue(c)
   }, [params])

   useEffect(() => {
      if (!matches && !open) setOpen(open)
   }, [matches, open, setOpen])
   //
   const handleSelectLink = () => {
      setCount(count + 1)
      if (category.unique !== cValue) return router.push(category.url, { scroll: false })
      setOpen(!open)
   }
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
                  {initialCSearchParamsValue === category.unique && (
                     <motion.div
                        className="overflow-y-hidden [--from-height:auto] [--to-height:auto] baseTablet:[--from-height:0px] baseTablet:[--to-height:auto]"
                        initial={{
                           height: count === 0 ? 'var(--to-height, 0)' : 'var(--from-height, 0)',
                        }}
                        animate={{
                           height: open ? 'var(--to-height, 0)' : 'var(--from-height, 0)',
                           transition: { duration: 0.5, type: 'tween', ease: 'linear' },
                        }}
                        exit={{
                           height: 'var(--from-height, 0)',
                           transition: { duration: 0.25, type: 'tween', ease: 'linear' },
                        }}>
                        <div className="flex flex-row items-center justify-start gap-2 px-4 py-2 baseTablet:block baseTablet:px-0 baseTablet:py-0">
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
                  )}
               </AnimatePresence>
            </div>
         </div>
      </div>
   )
}
