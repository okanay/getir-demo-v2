'use client'

import { Category } from '../../../../libs/types/types'
import { motion, MotionConfig } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useTranslations } from 'next-intl'
import { ImageOptimization } from '@/components/UI-Components/ImageOptimization'

import React, { useEffect, useState } from 'react'
import { AltLink } from '@/components/Categories-Page-Components/ProductsMenu/AltLink'
import { useRouter } from 'next/navigation'

import { useParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryOpenCloseIndex, setCategoryOpenCloseIndex } from '../../../../redux/slices/CategoryOpenCloseSlice'
import { usePathname } from 'next-intl/client'
import { CategoryList } from '../../../../libs/constants/CategoriesList'

export const MenuLink = ({ category }: { category: Category }) => {
   const t = useTranslations('Categories.CategoriesList')

   const router = useRouter()
   const slugs = useParams()
   const dispatch = useDispatch()
   const openIndex = useSelector(getCategoryOpenCloseIndex)

   const [open, setOpen] = useState(false)
   const [selectedIndex, setSelectedIndex] = useState<number>(0)

   const handleLinkButtonOnClick = (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault()

      const catId = Number(category.unique)

      if (openIndex !== catId) {
         dispatch(setCategoryOpenCloseIndex(catId))
         router.push(category.url)
      } else {
         return setOpen(!open)
      }
   }

   useEffect(() => {
      if (slugs.categories !== category.slugName && openIndex === Number(category.unique)) {
         dispatch(setCategoryOpenCloseIndex(Number(category.unique)))
         setOpen(true)
      } else if (openIndex === Number(category.unique)) setOpen(true)
      else if (openIndex !== Number(category.unique)) setOpen(false)
   }, [category.slugName, category.unique, dispatch, openIndex, slugs.categories])

   return (
      <MotionConfig transition={{ duration: 0.6, type: 'tween', ease: 'circOut' }}>
         <div className="flex w-fit flex-shrink-0 flex-col items-start justify-start bg-transparent baseTablet:w-full">
            <button
               type={'button'}
               onClick={handleLinkButtonOnClick}
               className={'flex w-full flex-row items-center justify-between px-2 py-2 baseTablet:py-2'}
            >
               <span className={'flex items-center justify-start gap-2'}>
                  <div className={'hidden h-8 w-8 rounded border border-gray-200 baseTablet:block'}>
                     <ImageOptimization alt={{ tr: '', en: '' }} imageNormal={category.image} imageSmall={category.imageSmall} />
                  </div>
                  <h4 className="text-[14px] font-semibold text-slate-100 baseTablet:text-[14px] baseTablet:text-slate-600">
                     {t(category.languageCode)}
                  </h4>
               </span>
               <ChevronDownIcon className={'hidden h-[20px] w-[20px] text-gray-400 baseTablet:block'} />
            </button>
            <div
               className={
                  ' w-full overflow-y-hidden ' +
                  ' [--height-from:auto] [--height-to:auto] ' +
                  ' [--opacity-from:100%] [--opacity-to:100%]' +
                  ' baseTablet:[--height-from:0px] baseTablet:[--height-to:auto] ' +
                  ' baseTablet:[--opacity-from:0%] baseTablet:[--opacity-to:100%] '
               }
            >
               <div
                  className={`absolute bottom-0 left-0 w-full translate-y-full overflow-x-auto bg-white baseTablet:relative baseTablet:h-fit baseTablet:translate-y-0 baseTablet:bg-transparent 
                  ${open ? 'z-[999]' : 'z-[200]'}`}
               >
                  <motion.div
                     className="overflow-y-hidden"
                     initial={{ height: 'var(--height-from)' }}
                     animate={{ height: open ? 'var(--height-to, 0)' : 'var(--height-from, 0)' }}
                  >
                     <div
                        className={`flex h-fit flex-row items-center justify-start gap-2 px-2 py-2 baseTablet:block baseTablet:px-0 baseTablet:py-0`}
                     >
                        {category.altCategories.map((altCategory, index) => (
                           <motion.div
                              animate={{
                                 opacity: open ? 'var(--opacity-to)' : 'var(--opacity-from)',
                              }}
                              key={altCategory.languageCode + index}
                              className={`w-fit flex-shrink-0 flex-grow-0 baseTablet:w-full`}
                           >
                              <AltLink
                                 altCategory={altCategory}
                                 index={index}
                                 selectedIndex={selectedIndex}
                                 setSelectedIndex={setSelectedIndex}
                                 t={t}
                              />
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </MotionConfig>
   )
}
