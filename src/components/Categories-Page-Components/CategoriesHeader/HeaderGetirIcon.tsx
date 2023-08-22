'use client'

import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'
import { useGetTotalPrice } from '@/hooks/useGetTotalPrice'

export const HeaderGetirIcon = () => {
   const { totalPrice } = useGetTotalPrice()

   return (
      <div className="relative flex h-[64px] w-full flex-col items-center justify-center bg-skin-theme-700 baseTablet:h-[72px]">
         <div className={'absolute flex w-full max-w-7xl flex-row items-center justify-between px-4 baseTablet:px-8'}>
            <Bars3Icon className={'h-[23px] w-[49px] bg-transparent text-white baseTablet:hidden'}></Bars3Icon>

            <Link href={'/'}>
               <Image
                  src={'/images/LandingImages/getir.svg'}
                  alt={''}
                  priority={true}
                  width={49}
                  height={23}
                  className={'baseTablet:scale-125'}
               />
            </Link>
            <MagnifyingGlassIcon className={'h-[23px] w-[49px] bg-transparent text-white baseTablet:hidden'} />

            <div className="hidden w-fit flex-row items-center justify-center rounded-lg bg-white baseTablet:flex baseLaptop:hidden">
               <ShoppingBagIcon className={'mx-2 h-6 w-6 text-skin-theme-700'} />
               <span className={'rounded-r-lg bg-gray-100 p-3'}>{totalPrice}</span>
            </div>
         </div>
      </div>
   )
}
