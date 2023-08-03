'use client'

import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next-intl/client'
import { useState, useTransition } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { FlagIcon } from 'react-flag-kit'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../../../../redux/slices/PopUpMenuSlice'
import { PopupMenuContainer } from '@/components/UI-Components/PopupMenu/PopupMenuContainer'
import { MenuTitleAndCloseButton } from '@/components/UI-Components/PopupMenu/MenuTitleAndCloseButton'
export const LanguageMenu = () => {
   const t = useTranslations('Header.LanguageMenu')

   const dispatch = useDispatch()
   const [_, startTransition] = useTransition()
   const locale = useLocale()
   const router = useRouter()
   const pathname = usePathname()
   const [select, setSelect] = useState(locale)
   const isSelectEqualLocale = select === locale

   const handleOnClose = () => {
      dispatch(closeMenu())
   }
   const handleLanguageChange = (lan: string) => {
      setSelect(lan)
   }
   const handleOnChange = () => {
      startTransition(() => {
         router.replace(`/${select}${pathname}`)
      })

      handleOnClose()
   }

   return (
      <PopupMenuContainer>
         <div className="flex h-screen w-full flex-col items-center justify-start gap-4 border border-slate-200 bg-white px-4 py-8 baseTablet:h-fit baseTablet:w-[28rem] baseTablet:justify-center baseTablet:rounded-lg">
            <MenuTitleAndCloseButton locale={'Header.LanguageMenu'} />
            <div className={'pointer-events-none mb-8 w-full rounded-lg border border-slate-200'}>
               <button
                  onClick={() => handleLanguageChange('tr')}
                  className={'group pointer-events-auto flex w-full items-center justify-between px-4 py-2.5'}>
                  <span className={'flex items-center justify-start gap-2'}>
                     <span
                        className={`flex h-[22px] w-[22px] flex-col items-center justify-center rounded-full border-2 transition-all duration-200 ${
                           select === 'tr' ? 'border-skin-theme-700' : 'border-slate-200 group-hover:border-skin-theme-700'
                        }`}>
                        <span
                           className={`h-[14px] w-[14px] rounded-full bg-skin-theme-700 transition-all duration-200 ${
                              select === 'tr' ? 'scale-100' : 'scale-0 opacity-0'
                           }`}></span>
                     </span>
                     <span className={'text-[14px] font-light'}>Türkçe</span>
                  </span>
                  <FlagIcon code="TR" size={18} />
               </button>
               {/*LINE*/}
               <hr />
               {/*LINE*/}
               <button
                  onClick={() => handleLanguageChange('en')}
                  className={'group pointer-events-auto flex w-full items-center justify-between px-4 py-2.5'}>
                  <span className={'flex items-center justify-start gap-2'}>
                     <span
                        className={`flex h-[22px] w-[22px] flex-col items-center justify-center rounded-full border-2 transition-all duration-200 ${
                           select === 'en' ? 'border-skin-theme-700' : 'border-slate-200 group-hover:border-skin-theme-700'
                        }`}>
                        <span
                           className={`h-[14px] w-[14px] rounded-full bg-skin-theme-700 transition-all duration-200 ${
                              select === 'en' ? 'scale-100' : 'scale-0 opacity-0'
                           }`}></span>
                     </span>
                     <span className={'text-[14px] font-light'}>English</span>
                  </span>
                  <FlagIcon code="GB" size={18} />
               </button>
            </div>
            <button
               disabled={isSelectEqualLocale}
               onClick={handleOnChange}
               className={`w-full rounded-lg border border-slate-200 bg-skin-theme-700 py-3 text-[#f5f5f5] transition-colors duration-300 disabled:cursor-not-allowed disabled:bg-[#a2a2a2]`}>
               {t('button')}
            </button>
         </div>
      </PopupMenuContainer>
   )
}
