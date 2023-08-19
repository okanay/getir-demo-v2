'use client'

import { useSelector } from 'react-redux'
import { getShopListProducts, TSelectedProduct } from '../../../../redux/slices/ShopListSlice'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useGetTotalPrice } from '@/hooks/useGetTotalPrice'

export const CategoriesFooter = () => {
   const { isProductExistInShopList, totalPrice } = useGetTotalPrice()

   return (
      <AnimatePresence>
         {isProductExistInShopList && (
            <div className={'pointer-events-none fixed left-0 top-0 h-[100dvh] w-full font-openSans baseTablet:hidden'}>
               <motion.button
                  variants={buttonVariants}
                  initial={'initial'}
                  animate={'enter'}
                  exit={'exit'}
                  className={'pointer-events-auto absolute bottom-0 mb-6 h-[48px] w-full px-6 standalone:mb-14'}>
                  <div className={'flex h-full w-full items-center justify-between rounded-lg bg-skin-theme-700'}>
                     <span />
                     <h4 className={'w-full text-center text-[14px] font-semibold text-white'}>Sepete Git</h4>
                     <div className={'h-full w-[100px] flex-shrink-0  px-0.5 py-0.5'}>
                        <div
                           className={
                              'flex h-full w-full items-center justify-center rounded-lg border border-gray-200 bg-white text-center text-[14px] text-skin-theme-700'
                           }>
                           {totalPrice}
                        </div>
                     </div>
                  </div>
               </motion.button>
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
      transition: {
         type: 'spring',
         stiffness: 120,
         mass: 0.5,
         damping: 20,
         duration: 0.2,
      },
   },
}
