'use client'

import { ShoppingBagIcon } from '@heroicons/react/20/solid'
import { useGetTotalPrice } from '@/hooks/useGetTotalPrice'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu, getMenuName, MenuEnum, setMenu } from '../../../../redux/slices/PopUpMenuSlice'
import { ShopList } from '@/components/Categories-Page-Components/RightAsideShopList'
import { useMediaQuery } from '@mantine/hooks'
import { useEffect } from 'react'

export const HeaderShopList = () => {
   const { totalPrice } = useGetTotalPrice()

   const dispatch = useDispatch()
   const menu: MenuEnum = useSelector(getMenuName)
   const isMenuOpen = menu === 'headerShopList'

   const minMatches = useMediaQuery('(min-width: 760px)')
   const maxMatches = useMediaQuery('(max-width: 1020px)')

   const isMediaMatch = minMatches === maxMatches

   const handleMenuOnClick = () => {
      if (isMediaMatch) {
         if (!isMenuOpen) dispatch(setMenu('headerShopList'))
         else if (isMenuOpen) dispatch(closeMenu())
      } else {
         //    add router and push payment page
      }
   }

   useEffect(() => {
      if (!isMediaMatch && isMenuOpen) dispatch(closeMenu())
   }, [isMediaMatch, isMenuOpen])

   return (
      <div className="relative z-[202] flex hidden w-[400px] flex-col items-end baseTablet:flex">
         <button
            onClick={handleMenuOnClick}
            className={`flex w-fit flex-row items-center justify-center ${isMenuOpen ? 'rounded-t-lg' : 'rounded-lg'}  bg-white`}>
            <ShoppingBagIcon className={'mx-2 h-6 w-6 text-skin-theme-700'} />
            <span className={'rounded-r-lg bg-gray-100 p-3'}>{totalPrice}</span>
         </button>
         {isMenuOpen && (
            <div className={'absolute top-[100%] h-fit w-[400px] overflow-y-auto rounded-b-lg rounded-tl-lg bg-white px-4'}>
               <ShopList maxHeight={'max-h-[80vh]'} />
            </div>
         )}
      </div>
   )
}
