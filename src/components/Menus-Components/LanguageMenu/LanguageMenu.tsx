'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next-intl/client'
import { useState, useTransition } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../../../../redux/slices/PopUpMenuSlice'
import { MenuTitleAndCloseButton } from '@/components/Menus-Components/MenuTitleAndCloseButton'

import { FlagIcon } from 'react-flag-kit'

export const LanguageMenu = () => {
   const t = useTranslations('Menus.LanguageMenu')

   const dispatch = useDispatch()
   const [_, startTransition] = useTransition()
   const locale = useLocale()
   const searchParams = useSearchParams()
   const router = useRouter()
   const pathname = usePathname()
   const [select, setSelect] = useState(locale)
   const isSelectEqualLocale = select === locale

   const handleOnClose = () => {
      dispatch(closeMenu())
      router.refresh()
   }
   const handleLanguageChange = (lan: string) => {
      setSelect(lan)
   }
   const handleOnChange = () => {
      startTransition(() => {
         const path = `/${select}${pathname}?${searchParams}`
         router.replace(path)
      })

      handleOnClose()
   }

   return (
      <div className="menu-container baseTablet:rounded-lg">
         <MenuTitleAndCloseButton locale={'Menus.LanguageMenu'} />
         <div className={'pointer-events-none w-full rounded-lg border-slate-200 baseTablet:border'}>
            <button
               onClick={() => handleLanguageChange('tr')}
               className={'group pointer-events-auto flex w-full items-center justify-between px-4 py-2.5'}
            >
               <span className={'flex items-center justify-start gap-2'}>
                  <span
                     className={`flex h-[22px] w-[22px] flex-col items-center justify-center rounded-full border-2 transition-all duration-200 ${
                        select === 'tr' ? 'border-skin-theme-700' : 'border-slate-200 group-hover:border-skin-theme-700'
                     }`}
                  >
                     <span
                        className={`h-[14px] w-[14px] rounded-full bg-skin-theme-700 transition-all duration-200 ${
                           select === 'tr' ? 'scale-100' : 'scale-0 opacity-0'
                        }`}
                     ></span>
                  </span>
                  <span className={'text-[14px] font-light'}>Türkçe</span>
               </span>
               <FlagIcon code="TR" size={18} />
            </button>
            {/******************************************/}
            <hr className={'hidden baseTablet:block'} />
            {/******************************************/}
            <button
               onClick={() => handleLanguageChange('en')}
               className={'group pointer-events-auto flex w-full items-center justify-between px-4 py-2.5'}
            >
               <span className={'flex items-center justify-start gap-2'}>
                  <span
                     className={`flex h-[22px] w-[22px] flex-col items-center justify-center rounded-full border-2 transition-all duration-200 ${
                        select === 'en' ? 'border-skin-theme-700' : 'border-slate-200 group-hover:border-skin-theme-700'
                     }`}
                  >
                     <span
                        className={`h-[14px] w-[14px] rounded-full bg-skin-theme-700 transition-all duration-200 ${
                           select === 'en' ? 'scale-100' : 'scale-0 opacity-0'
                        }`}
                     ></span>
                  </span>
                  <span className={'text-[14px] font-light'}>English</span>
               </span>
               <FlagIcon code="GB" size={18} />
            </button>
         </div>
         <button
            disabled={isSelectEqualLocale}
            onClick={handleOnChange}
            className={`w-full rounded-lg border border-slate-200 bg-skin-theme-700 py-[16px] text-[16px] font-semibold text-[#f5f5f5] transition-colors duration-300 disabled:cursor-not-allowed disabled:bg-[#a2a2a2]`}
         >
            {t('button')}
         </button>
      </div>
   )
}
