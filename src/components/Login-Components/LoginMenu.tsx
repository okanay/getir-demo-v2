'use client'
import Link from 'next/link'

import { MenuMainContainer } from '@/components/Menus-Components/MenuMainContainer'
import { LoginAuthForm } from '@/components/Login-Components/LoginAuthForm'
import { MenuTitleAndCloseButton } from '@/components/Menus-Components/MenuTitleAndCloseButton'
import { useTranslations } from 'next-intl'
import { setMenu } from '../../../redux/slices/PopUpMenuSlice'
import { useDispatch } from 'react-redux'
import { LoginInformationAndTerm } from '@/components/Login-Components/LoginInformationAndTerm'
import React from 'react'

export const LoginMenu = () => {
   // i18
   const t = useTranslations('Menus.LoginMenu')
   //REDUX
   const dispatch = useDispatch()
   // HANDLE's
   const handleOpenRegisterMenu = () => dispatch(setMenu('register'))

   return (
      <div className="menu-container baseTablet:rounded-t-lg">
         <MenuTitleAndCloseButton locale={'Menus.LoginMenu'} />
         <LoginAuthForm />
         <div className="absolute bottom-0 z-[203] flex w-full flex-col items-center justify-center gap-1 rounded-b-lg border-t border-gray-200 bg-gray-100 py-[16px] text-[16px] font-normal text-gray-600 standalone:bottom-14 baseTablet:translate-y-full">
            <div className={'flex flex-row gap-1'}>
               <span> {t('signup.text')}</span>
               <button onClick={handleOpenRegisterMenu} className={'font-semibold text-skin-theme-700'}>
                  {' '}
                  {t('signup.button')}
               </button>
            </div>
         </div>
      </div>
   )
}
