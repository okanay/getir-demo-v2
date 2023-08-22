import { useTranslations } from 'next-intl'
import { MenuTitleAndCloseButton } from '@/components/Menus-Components/MenuTitleAndCloseButton'
import { RegisterAuthForm } from '@/components/Register-Components/RegisterAuthForm'
import { useDispatch } from 'react-redux'
import { setMenu } from '../../../redux/slices/PopUpMenuSlice'
import React from 'react'

export function RegisterMenu() {
   const dispatch = useDispatch()
   const handleOpenLoginMenu = () => dispatch(setMenu('login'))
   const t = useTranslations('Menus.RegisterMenu')

   return (
      <div className="menu-container baseTablet:rounded-t-lg">
         <MenuTitleAndCloseButton locale={'Menus.RegisterMenu'} />
         <RegisterAuthForm />
         <div className="pointer-events-none absolute bottom-0 z-[304] flex w-full flex-col items-center justify-center gap-1 rounded-b-lg border-t border-gray-200 bg-gray-100 py-[16px] text-[16px] font-normal text-gray-600 standalone:bottom-12 baseTablet:translate-y-full">
            <div className={'flex flex-row gap-1'}>
               <span> {t('signin.text')}</span>
               <button onClick={handleOpenLoginMenu} className={'pointer-events-auto font-semibold text-skin-theme-700'}>
                  {' '}
                  {t('signin.button')}
               </button>
            </div>
         </div>
      </div>
   )
}
