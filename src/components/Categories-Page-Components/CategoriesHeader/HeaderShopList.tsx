'use client'

import { ShoppingBagIcon } from '@heroicons/react/20/solid'
import { useGetTotalPrice } from '@/hooks/useGetTotalPrice'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu, getMenuName, MenuEnum, setMenu } from '../../../../redux/slices/PopUpMenuSlice'
import { ShopList } from '@/components/Categories-Page-Components/RightAsideShopList'
import { useMediaQuery } from '@mantine/hooks'
import { MutableRefObject, RefObject as RefObject$1, RefObject, useCallback, useEffect, useRef } from 'react'
import { useScroll } from 'framer-motion'

export const HeaderShopList = () => {
   const { totalPrice } = useGetTotalPrice()

   const dispatch = useDispatch()
   const menu: MenuEnum = useSelector(getMenuName)

   const minMatches = useMediaQuery('(min-width: 760px)')
   const maxMatches = useMediaQuery('(max-width: 1020px)')

   const isMediaMatch = minMatches === maxMatches
   const isMenuOpen = menu === 'headerShopList'

   const shopMenuRef = useRef<HTMLDivElement>(null)
   const buttonRef = useRef<HTMLButtonElement>(null)

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (
            shopMenuRef?.current &&
            !shopMenuRef?.current.contains(event.target as Node) &&
            !buttonRef?.current?.contains(event.target as Node)
         ) {
            dispatch(closeMenu())
         }
      }

      window.addEventListener('mousedown', handleClickOutside)

      return () => {
         window.removeEventListener('mousedown', handleClickOutside)
      }
   }, [])

   useEffect(() => {
      if (!isMediaMatch && isMenuOpen) dispatch(closeMenu())
      if (totalPrice === '₺0,00' && isMenuOpen) dispatch(closeMenu())
   }, [isMenuOpen, isMediaMatch, totalPrice])

   const handleMenuOnClick = () => {
      if (isMediaMatch) {
         if (!isMenuOpen) dispatch(setMenu('headerShopList'))
         else if (isMenuOpen) dispatch(closeMenu())
      } else {
         //    add router and push payment page
      }
   }

   return (
      <div
         id={'header-shop-div'}
         className={`relative ${isMenuOpen ? 'z-[301]' : 'z-[299]'} flex hidden w-[400px] flex-col items-end baseTablet:flex`}>
         <button
            ref={buttonRef}
            onClick={handleMenuOnClick}
            className={`flex w-fit cursor-pointer flex-row items-center justify-center ${
               isMenuOpen ? 'rounded-t-lg' : 'rounded-lg'
            }  bg-white`}>
            <ShoppingBagIcon className={'mx-2 h-6 w-6 text-skin-theme-700'} />
            <span className={'rounded-r-lg bg-gray-100 p-3'}>{totalPrice}</span>
         </button>
         {isMenuOpen && (
            <div
               ref={shopMenuRef}
               className="absolute top-[100%] z-[301] h-fit w-[400px] overflow-y-auto rounded-b-lg rounded-tl-lg bg-white px-4">
               <ShopList maxHeight={'max-h-[80vh]'} />
            </div>
         )}
      </div>
   )
}
