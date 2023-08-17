import { FlagIcon, FlagIconCode } from 'react-flag-kit'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { CountriesPhoneCodes, SelectedCode } from '../../../../libs/constants/CountriesPhoneCodesList'
import { nanoid } from '@reduxjs/toolkit'
import React, { useEffect, useRef, useState } from 'react'

type Props = {
   selectedCode: SelectedCode
   setSelectedCode: (newSelectedCode: SelectedCode) => void
}
export const PhoneCodeInput = ({ selectedCode, setSelectedCode }: Props) => {
   // State's

   const [isPhoneCodeListMenuVisible, setIsPhoneCodeListMenuVisible] = useState<boolean>(false)

   const [selectedPhoneCodeIndex, setSelectedPhoneCodeIndex] = useState<number>(0)

   // Ref's

   const togglePhoneCodeListMenuButtonRef: React.RefObject<HTMLDivElement> = useRef(null)

   const countriesPhoneCodeListMenuRef = useRef<HTMLUListElement | null>(null)

   // Effect's

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (
            togglePhoneCodeListMenuButtonRef.current &&
            !togglePhoneCodeListMenuButtonRef.current.contains(event.target as Node)
         ) {
            setIsPhoneCodeListMenuVisible(false)
         }
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => {
         document.removeEventListener('mousedown', handleClickOutside)
      }
   }, [])

   useEffect(() => {
      if (isPhoneCodeListMenuVisible && countriesPhoneCodeListMenuRef.current) {
         countriesPhoneCodeListMenuRef.current.scrollTop = selectedPhoneCodeIndex * 29
      }
   }, [isPhoneCodeListMenuVisible, selectedPhoneCodeIndex])

   // Handle's
   const handleTogglePhoneCodeSelectMenu = () => setIsPhoneCodeListMenuVisible(!isPhoneCodeListMenuVisible)
   const handleChangeSelectedPhoneCode = (flagCode: string, phoneCode: string, index: number) => {
      setSelectedPhoneCodeIndex(index)
      setSelectedCode({ flagCode: flagCode, phoneCode: phoneCode })
   }

   return (
      <div
         ref={togglePhoneCodeListMenuButtonRef}
         onClick={handleTogglePhoneCodeSelectMenu}
         className={`relative flex h-14 w-36 cursor-pointer items-center justify-between rounded border-2 border-gray-200 bg-white pl-3 pr-2 text-[14px] transition-colors duration-200 baseTablet:pl-3 baseTablet:pr-2
                          ${isPhoneCodeListMenuVisible ? 'border-skin-theme-700' : 'border-gray-200'}`}
      >
         <div className="flex items-center gap-2">
            <FlagIcon code={selectedCode.flagCode as FlagIconCode} size={16} />
            <p>+{selectedCode.phoneCode}</p>
         </div>
         <ChevronDownIcon
            className={`relative h-5 w-5 text-skin-theme-700 transition-all duration-500
                             ${isPhoneCodeListMenuVisible ? 'rotate-180' : 'rotate-0'}`}
         />
         {isPhoneCodeListMenuVisible && (
            <ul
               ref={countriesPhoneCodeListMenuRef}
               className="absolute -left-[2.5%] top-[120%] z-[101] flex h-44 w-[105%] flex-col items-start justify-start overflow-y-scroll border border-gray-100 bg-white text-[14px] text-gray-600"
            >
               {Object.entries(CountriesPhoneCodes).map(([flagCode, phoneCode], index) => (
                  <li
                     onClick={() => {
                        handleChangeSelectedPhoneCode(flagCode, phoneCode, index)
                     }}
                     className={`flex w-full cursor-pointer items-center justify-start gap-2 px-2 py-1 text-start hover:bg-gray-100 
                                       ${index === selectedPhoneCodeIndex && 'bg-skin-theme-50'}`}
                     key={nanoid()}
                  >
                     <FlagIcon code={flagCode as FlagIconCode} size={16} />
                     {'+' + phoneCode}
                  </li>
               ))}
            </ul>
         )}
      </div>
   )
}
