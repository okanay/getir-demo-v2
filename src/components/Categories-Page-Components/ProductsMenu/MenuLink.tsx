'use client'

import { ButtonTypeElement, Category } from '../../../../libs/types/types'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useTranslations } from 'next-intl'
import { ImageOptimization } from '@/components/UI-Components/ImageOptimization'

import { ButtonHTMLAttributes, PointerEventHandler, useEffect, useMemo, useRef, useState } from 'react'
import { AltLink } from '@/components/Categories-Page-Components/ProductsMenu/AltLink'
import { useRouter } from 'next/navigation'

import { useParams } from 'next/navigation'
import { useMediaQuery } from '@mantine/hooks'
import Link from 'next/link'

export const MenuLink = ({ category }: { category: Category }) => {
   const t = useTranslations('Categories.CategoriesList')

   const pathname = useParams()
   const router = useRouter()

   const isCurrentCategory = useMemo(() => {
      return category.slugName === pathname.categories
   }, [category.slugName, pathname.categories])

   const [selectedIndex, setSelectedIndex] = useState<number>(0)
   const [open, setOpen] = useState(pathname.categories === category.slugName)

   const handleLinkButtonOnClick = (event: React.MouseEvent<HTMLElement>) => {
      if (isCurrentCategory) {
         event.preventDefault()
         setOpen(!open)
      } else {
         router.push(category.url)
      }
   }

   useEffect(() => {
      if (!isCurrentCategory) {
         setOpen(false)
      } else {
         setOpen(true)
      }
   }, [isCurrentCategory])

   return (
      <MotionConfig transition={{ duration: 0.75, type: 'tween', ease: 'linear' }}>
         <div className="flex w-fit flex-shrink-0 flex-col items-start justify-start bg-transparent  baseTablet:w-full">
            <button
               type={'button'}
               onClick={handleLinkButtonOnClick}
               className={'flex w-full flex-row items-center justify-between px-2 py-2 baseTablet:py-2'}>
               <span className={'flex items-center justify-start gap-2'}>
                  <div className={'hidden h-8 w-8 rounded border border-gray-200 baseTablet:block'}>
                     <ImageOptimization alt={{ tr: '', en: '' }} imageNormal={category.image} imageSmall={category.imageSmall} />
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
                  <motion.div
                     className="overflow-y-hidden"
                     initial={{ height: 0 }}
                     animate={{ height: open ? 'fit-content' : 0 }}>
                     <div className="flex flex-row items-center justify-start gap-2 px-4 py-2 baseTablet:block baseTablet:px-0 baseTablet:py-0">
                        {category.altCategories.map((altCategory, index) => (
                           <div
                              key={altCategory.languageCode + index}
                              className={'w-fit flex-shrink-0 flex-grow-0 baseTablet:w-full'}>
                              <AltLink
                                 altCategory={altCategory}
                                 index={index}
                                 selectedIndex={selectedIndex}
                                 setSelectedIndex={setSelectedIndex}
                                 t={t}
                              />
                           </div>
                        ))}
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </MotionConfig>
   )
}
