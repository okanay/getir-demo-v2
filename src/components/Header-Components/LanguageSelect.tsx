'use client'

import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next-intl/client'
import { ChangeEvent, useEffect, useState, useTransition } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { FlagIcon } from 'react-flag-kit'
import { useDispatch, useSelector } from 'react-redux'
import { getLanguageMenuStatus, setLanguageMenuStatus } from '../../../redux/slices/LanguageMenuSlice'
export const LanguageSelect = () => {
   const menuStatus: boolean = useSelector(getLanguageMenuStatus)

   const dispatch = useDispatch()
   const t = useTranslations('Header.LanguageMenu')
   const [isPending, startTransition] = useTransition()
   const locale = useLocale()
   const router = useRouter()
   const pathname = usePathname()
   const [select, setSelect] = useState(locale)
   const isSelectEqualLocale = select === locale

   const removeOverflowHidden = () => {
      const body: any = document.querySelector('body')
      body.classList.remove('overflow-hidden')
   }
   const handleOnClose = () => {
      dispatch(setLanguageMenuStatus(false))
      removeOverflowHidden()
   }
   const handleLanguageChange = (lan: string) => {
      setSelect(lan)
   }
   const handleOnChange = () => {
      startTransition(() => {
         router.replace(`/${select}${pathname}`)
      })
      removeOverflowHidden()
      dispatch(setLanguageMenuStatus(false))
   }

   return (
      menuStatus && (
         <div className={'fixed left-0 top-0 z-40 h-screen w-full bg-black/40 font-openSans'}>
            <div className={'flex h-full w-full flex-col items-center justify-center'}>
               <div className="flex w-[28rem] flex-col items-center justify-center rounded-lg border border-slate-200 bg-white px-8 py-12">
                  <div className={'flex h-full w-full flex-row items-center justify-between'}>
                     <div id={'flex-empty'} />
                     <h2 className={'text-[15px] text-skin-theme-700'}>{t('title')}</h2>
                     <button onClick={handleOnClose} className={'flex items-center justify-center rounded-lg bg-slate-100 p-1.5'}>
                        <XMarkIcon className={'h-5 w-5'} />
                     </button>
                  </div>
                  <div className={'pointer-events-none my-8 w-full rounded-lg border border-slate-200'}>
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
                     <hr />
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
            </div>
         </div>
      )
   )
}
