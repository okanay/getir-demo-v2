'use client'
import Link from 'next/link'

import { MenuMainContainer } from '@/components/Menus-Components/MenuMainContainer'
import { LoginAuthForm } from '@/components/Login-Components/LoginAuthForm'
import { MenuTitleAndCloseButton } from '@/components/Menus-Components/MenuTitleAndCloseButton'
import { useTranslations } from 'next-intl'
import { setMenu } from '../../../redux/slices/PopUpMenuSlice'
import { useDispatch } from 'react-redux'
import { LoginAuthFormTermInformationTextsAndLinks } from '@/components/Login-Components/LoginAuthFormTermInformationTextsAndLinks'
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
         <LoginAuthFormTermInformationTextsAndLinks t={t} />
         <div className="absolute bottom-0 z-[203] flex h-14 w-full flex-col items-center justify-center gap-1 rounded-b-lg border-t border-gray-200 bg-gray-100 text-[14px] font-normal text-gray-600 baseTablet:translate-y-full">
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
