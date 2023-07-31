import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { nanoid } from '@reduxjs/toolkit'

import { FlagIcon, FlagIconCode } from 'react-flag-kit'
import { ChevronDownIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid'
import { CountriesPhoneCodes, SelectedCode } from '../../../../libs/constants/CountriesPhoneCodesList'
import { PhoneFormError } from '../../../../libs/types/types'

export const MobilePhoneAuthorization = () => {
   // i18 Language
   const t = useTranslations('Index.landing')
   const errorT = useTranslations('Error.MobilePhoneAuthorization')
   // CONSTANT's
   const initialSelectedCode: SelectedCode = {
      flagCode: 'TR',
      phoneCode: '90',
   }
   // STATE's
   const [error, setError] = useState<PhoneFormError>({ status: false, errorMessage: '' })
   const [selectedCode, setSelectedCode] = useState<SelectedCode>(initialSelectedCode)
   const [enteredPhoneNumber, setEnteredPhoneNumber] = useState<string>('')
   const [isVisibleCodeMenu, setIsVisibleCodeMenu] = useState<boolean>(false)
   const [selectedIndex, setSelectedIndex] = useState<number>(0)
   // REF's
   const mainContainerRef: React.RefObject<HTMLDivElement> = useRef(null)
   const menuRef = useRef<HTMLUListElement | null>(null)
   const enteredPhoneRef = useRef<HTMLInputElement | null>(null)
   // EFFECT's
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
   // HANDLE's
   const handleClearError = () => setError({ status: false, errorMessage: '' })
   const handlePhoneInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      const inputValue = event.target.value.length || 0
      const isSchemaTrue: boolean = inputValue === 10

      if (inputValue === 0) {
         handleClearError()
         return
      }

      if (isSchemaTrue) {
         handleClearError()
         return
      }
      setError({ status: true, errorMessage: 'ErrorCode100' })
   }
   const handleSetPhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
      const enteredNumber = enteredPhoneRef.current?.value || ''
      const enteredInputValueRegex = /^[0-9]*$/

      if (!enteredInputValueRegex.test(enteredNumber)) return
      if (enteredNumber.length > 10) return

      setEnteredPhoneNumber(enteredNumber)
      if (enteredNumber.length === 10) handleClearError()
   }
   const handleChangeSelectedPhoneCode = (flagCode: string, phoneCode: string, index: number) => {
      setSelectedIndex(index)
      setSelectedCode({ flagCode: flagCode, phoneCode: phoneCode })
   }
   const handleTogglePhoneCodeSelectMenu = () => setIsVisibleCodeMenu(!isVisibleCodeMenu)
   const handleFormSubmit = (event: FormEvent) => {
      event.preventDefault()
   }

   return (
      <form
         onSubmit={handleFormSubmit}
         className="relative flex w-full flex-col items-start justify-center gap-2 px-1 baseTablet:w-[22.5rem]">
         <div className="flex w-full items-start gap-2">
            {/*Phone Code, Phone Code Select Menu*/}
            <div
               ref={mainContainerRef}
               onClick={handleTogglePhoneCodeSelectMenu}
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
                              handleChangeSelectedPhoneCode(flagCode, phoneCode, index)
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

            <div className={'flex w-full flex-col items-start gap-2'}>
               <div className={'peer relative h-14 w-full'}>
                  <input
                     name={'phone-number-input'}
                     ref={enteredPhoneRef}
                     value={enteredPhoneNumber}
                     onChange={handleSetPhoneNumber}
                     onBlur={handlePhoneInputBlur}
                     type="tel"
                     className={`${
                        error.status ? 'border-red-400 outline-red-400' : 'border-gray-200 hover:border-skin-theme-700'
                     } peer  h-full w-full rounded border-2 bg-white px-3.5 ${
                        enteredPhoneNumber.length > 0 ? 'pt-2' : 'pt-0'
                     } text-[14px] font-normal placeholder-transparent transition-colors duration-200 baseTablet:rounded`}
                     placeholder={'1'}
                  />

                  <label
                     htmlFor="phone-number-input"
                     className={`peer pointer-events-none absolute left-4 top-1 text-[12px] font-normal ${
                        error.status ? 'text-red-400' : 'text-skin-theme-700'
                     } transition-all
                        duration-300 peer-placeholder-shown:left-4 peer-placeholder-shown:top-[18px] peer-placeholder-shown:text-[14px]
                        peer-placeholder-shown:text-gray-400`}>
                     {t('phonePlaceholder')}
                  </label>

                  {error.status && (
                     <ExclamationCircleIcon
                        className={'pointer-events-none absolute right-4 top-5 h-5 w-5 rounded-full bg-red-400 text-white'}
                     />
                  )}
               </div>
               {error.status && <p className={'text-start text-[12px] font-normal text-red-500'}>{errorT(error.errorMessage)}</p>}
            </div>
         </div>
         <button
            type="submit"
            className="h-14 w-full rounded border border-gray-200 bg-yellow-400 px-4 text-[14px] font-medium text-skin-theme-700 transition-colors duration-200 hover:bg-skin-theme-700 hover:text-yellow-400 baseTablet:rounded">
            {t('loginButton')}
         </button>
      </form>
   )
}
