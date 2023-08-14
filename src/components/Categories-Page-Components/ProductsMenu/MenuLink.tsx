'use client'

import { Category } from '../../../../libs/types/types'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useTranslations } from 'next-intl'
import { CategoryItemImage } from '@/components/Index-Page-Components/Categories-Section/CategoryItemImage'

import { useEffect, useState } from 'react'
import { AltLink } from '@/components/Categories-Page-Components/ProductsMenu/AltLink'
import { useRouter } from 'next/navigation'

import { useParams } from 'next/navigation'
import { resetSelectedAltCategoryIndex } from '../../../../redux/slices/SelectedAltCatIndexSlice'
import { useDispatch } from 'react-redux'
import { useMediaQuery } from '@mantine/hooks'

export const MenuLink = ({ category }: { category: Category }) => {
   const t = useTranslations('Index.categories.categoriesItems')
   //
   const router = useRouter()
   const pathname = useParams()

   const categoryPathname = pathname.categories || undefined
   //
   const matches = useMediaQuery('(min-width: 760px)')
   const [open, setOpen] = useState<boolean>(true)
   const [selectedIndex, setSelectedIndex] = useState<number>(0)
   const [count, setCount] = useState(0)
   //
   const handleSelectLink = () => {
      setCount(count + 1)
      if (category.slugName !== categoryPathname) {
         router.push(category.url, { scroll: !matches })
         setSelectedIndex(0)

         setOpen(true)

         return
      }
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
               className={`absolute bottom-0 left-0 w-full translate-y-full overflow-x-auto bg-white 
               baseTablet:relative baseTablet:h-fit baseTablet:translate-y-0 baseTablet:bg-transparent`}>
               <AnimatePresence>
                  {categoryPathname === category.slugName && (
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
