'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useGetTotalPrice } from '@/hooks/useGetTotalPrice'
import { GoShopListButton } from '@/components/UI-Components/GoShopListButton'

export const CategoriesFooter = () => {
   const { isProductExistInShopList } = useGetTotalPrice()

   return (
      <AnimatePresence>
         {isProductExistInShopList && (
            <div
               className={
                  'pointer-events-none fixed left-0 top-0 z-[10] h-[100dvh] w-full font-openSans transition-all duration-300 baseTablet:hidden'
               }>
               <motion.div
                  variants={buttonVariants}
                  initial={'initial'}
                  animate={'enter'}
                  exit={'exit'}
                  className={'absolute bottom-0 mb-8 w-full px-6 standalone:mb-12'}>
                  <GoShopListButton />
               </motion.div>
            </div>
         )}
      </AnimatePresence>
   )
}

const buttonVariants = {
   initial: { y: 200 },
   enter: { y: 0 },
   exit: {
      y: 200,
      opacity: 0,
      transition: {
         type: 'spring',
         stiffness: 120,
         mass: 0.5,
         damping: 20,
         duration: 0.2,
      },
   },
}
