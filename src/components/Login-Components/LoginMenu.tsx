'use client'
import Link from 'next/link'

import { MenuContainer } from '@/components/Menus-Components/MenuContainer'
import { LoginAuthForm } from '@/components/Login-Components/LoginAuthForm'
import { MenuTitleAndCloseButton } from '@/components/Menus-Components/MenuTitleAndCloseButton'
import { useTranslations } from 'next-intl'
import { setMenu } from '../../../redux/slices/PopUpMenuSlice'
import { useDispatch } from 'react-redux'

export const LoginMenu = () => {
   // i18
   const t = useTranslations('Menus.LoginMenu')
   //REDUX
   const dispatch = useDispatch()
   // HANDLE's
   const handleOpenRegisterMenu = () => dispatch(setMenu('register'))

   return (
      <MenuContainer>
         <div className="relative flex h-full w-full flex-col items-center justify-start gap-4 bg-white px-4 py-8 baseTablet:h-fit baseTablet:w-[28rem] baseTablet:justify-center baseTablet:rounded-t-lg">
            <MenuTitleAndCloseButton locale={'Menus.LoginMenu'} />
            <LoginAuthForm />
            <p className={'w-full pt-2 text-start text-[12px] font-normal text-gray-400'}>
               {t('information.text')}
               <Link href={'/'} className={'font-semibold text-skin-theme-700 underline'}>
                  {t('information.link')}
               </Link>
            </p>
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
      </MenuContainer>
   )
}
