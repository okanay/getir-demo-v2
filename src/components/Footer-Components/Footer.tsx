'use client'

import Image from 'next/image'
import { ArrowDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { FooterNavigationItem } from '@/components/Footer-Components/FooterNavigationItem'
import { FooterNavItems } from '@/components/Footer-Components/FooterNavItems'

export const Footer = () => {
   return (
      <footer className={'h-fit w-full bg-white font-openSans'}>
         <div className="mx-auto grid h-fit w-full max-w-7xl grid-cols-1 items-start gap-4 px-8 py-8 baseTablet:grid-cols-2 lgTablet:grid-cols-4">
            <div className={'flex h-full w-full flex-col items-start justify-start gap-4'}>
               <h4 className={'text-[18px] text-skin-theme-700'}>Getiri indirin!</h4>
               <Image src={'/images/PromotionImages/appstore-app-image-tr.svg'} alt={''} width={160} height={48} className={''} />
               <Image
                  src={'/images/PromotionImages/googleplay-app-image-tr.svg'}
                  alt={''}
                  width={160}
                  height={48}
                  className={''}
               />
               <Image src={'/images/PromotionImages/huawei-app-image-tr.svg'} alt={''} width={160} height={48} className={''} />
            </div>
            <FooterNavItems />
         </div>
      </footer>
   )
}
