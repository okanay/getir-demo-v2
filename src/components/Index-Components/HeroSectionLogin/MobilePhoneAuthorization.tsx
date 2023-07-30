import React, { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { nanoid } from '@reduxjs/toolkit'

import { FlagIcon, FlagIconCode } from 'react-flag-kit'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { CountriesPhoneCodes } from '../../../../libs/constants/CountriesPhoneCodesList'

export const MobilePhoneAuthorization = () => {
   // i18 Language
   const t = useTranslations('Index.landing')
   // States
   const [selectedCode, setSelectedCode] = useState({ flagCode: 'TR', phoneCode: '90' })
   const [isVisibleCodeMenu, setIsVisibleCodeMenu] = useState(false)
   const [selectedIndex, setSelectedIndex] = useState(0)
   // REFS
   const mainContainerRef: React.RefObject<HTMLDivElement> = useRef(null)
   const menuRef = useRef<HTMLUListElement | null>(null)
   // EFFECTS
   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (mainContainerRef.current && !mainContainerRef.current.contains(event.target as Node)) {
            setIsVisibleCodeMenu(false)
         }
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => {
         document.removeEventListener('mousedown', handleClickOutside)
      }
   }, [])
   useEffect(() => {
      if (isVisibleCodeMenu && menuRef.current) {
         menuRef.current.scrollTop = selectedIndex * 29
      }
   }, [isVisibleCodeMenu, selectedIndex])
   // HANDLES
   const handlePhoneCodeChange = (flagCode: string, phoneCode: string, index: number) => {
      setSelectedIndex(index)
      setSelectedCode({ flagCode: flagCode, phoneCode: phoneCode })
   }
   const handleMenuOpen = () => setIsVisibleCodeMenu(!isVisibleCodeMenu)

   return (
      <form className="relative flex w-full flex-col items-center justify-center gap-2 px-1 baseTablet:w-[22rem]">
         <div className="flex w-full items-center gap-2">
            {/*Phone Code, Phone Code Select Menu*/}
            <div
               ref={mainContainerRef}
               onClick={handleMenuOpen}
               className={`relative flex h-14 w-36 cursor-pointer items-center justify-between rounded border-2 p-2 ${
                  isVisibleCodeMenu ? 'border-skin-theme-700' : 'border-gray-200'
               } bg-white text-[14px] transition-colors duration-200 baseTablet:rounded baseTablet:px-2`}>
               <span className="flex items-center gap-2">
                  <FlagIcon code={selectedCode.flagCode as FlagIconCode} size={16} />
                  <span>+{selectedCode.phoneCode}</span>
               </span>
               <ChevronDownIcon
                  className={`relative transition-all duration-500 ${
                     isVisibleCodeMenu ? 'rotate-180' : 'rotate-0'
                  } h-5 w-5 text-skin-theme-700`}
               />
               {isVisibleCodeMenu && (
                  <ul
                     ref={menuRef}
                     className="absolute -left-[2.5%] top-[120%] z-[101] flex h-44 w-[105%] flex-col items-start justify-start overflow-y-scroll rounded border border-gray-200 bg-white text-[14px] text-gray-600">
                     {Object.entries(CountriesPhoneCodes).map(([flagCode, phoneCode], index) => (
                        <li
                           key={nanoid()}
                           onClick={() => {
                              handlePhoneCodeChange(flagCode, phoneCode, index)
                           }}
                           className={`flex w-full cursor-pointer items-center justify-start gap-2 px-2 py-1 text-start hover:bg-gray-100 ${
                              index === selectedIndex && 'bg-skin-theme-50'
                           }`}>
                           <FlagIcon code={flagCode as FlagIconCode} size={16} />
                           {'+'}
                           {phoneCode}
                        </li>
                     ))}
                  </ul>
               )}
            </div>

            <input
               type="text"
               className="h-14 w-full rounded border-2 border-gray-200 bg-white px-2 text-[14px] font-normal placeholder-gray-400 transition-colors duration-200 hover:border-skin-theme-700 focus:border-skin-theme-700 baseTablet:rounded"
               placeholder={t('phonePlaceholder')}
            />
         </div>
         <button
            type="button"
            className="h-14 w-full rounded border border-gray-200 bg-yellow-400 px-4 text-[14px] font-medium text-skin-theme-700 transition-colors duration-200 hover:bg-skin-theme-700 hover:text-yellow-400 baseTablet:rounded">
            {t('loginButton')}
         </button>
      </form>
   )
}
