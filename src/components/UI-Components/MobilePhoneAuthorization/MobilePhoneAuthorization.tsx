import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { nanoid } from '@reduxjs/toolkit'

import { FlagIcon, FlagIconCode } from 'react-flag-kit'
import { ChevronDownIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid'
import { CountriesPhoneCodes, SelectedCode } from '../../../../libs/constants/CountriesPhoneCodesList'
import { PhoneLoginData, CustomError } from '../../../../libs/types/types'

export const MobilePhoneAuthorization = () => {
   // i18 Language

   const t = useTranslations('UI.MobilePhoneAuth')

   const errorT = useTranslations('Error.MobilePhoneAuth')

   // CONSTANT's

   const initialSelectedCode: SelectedCode = {
      flagCode: 'TR',
      phoneCode: '90',
   }

   const initialError: CustomError = {
      status: false,
      errorMessage: '',
   }

   // REF's

   const togglePhoneCodeListMenuButtonRef: React.RefObject<HTMLDivElement> = useRef(null)

   const countriesPhoneCodeListMenuRef = useRef<HTMLUListElement | null>(null)

   const phoneNumberInputRef = useRef<HTMLInputElement | null>(null)

   // STATE's

   const [isPhoneCodeListMenuVisible, setIsPhoneCodeListMenuVisible] = useState<boolean>(false)

   const [selectedPhoneCodeIndex, setSelectedPhoneCodeIndex] = useState<number>(0)

   const [error, setError] = useState<CustomError>(initialError)

   const [selectedCode, setSelectedCode] = useState<SelectedCode>(initialSelectedCode)

   const [phoneNumber, setPhoneNumber] = useState<string>('')

   // EFFECT's

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
      const enteredNumber = phoneNumberInputRef.current?.value || ''
      const enteredInputValueRegex = /^[0-9]*$/

      if (!enteredInputValueRegex.test(enteredNumber)) return
      if (enteredNumber.length > 10) return

      setPhoneNumber(enteredNumber)
      if (enteredNumber.length === 10) handleClearError()
   }
   const handleChangeSelectedPhoneCode = (flagCode: string, phoneCode: string, index: number) => {
      setSelectedPhoneCodeIndex(index)
      setSelectedCode({ flagCode: flagCode, phoneCode: phoneCode })
   }
   const handleTogglePhoneCodeSelectMenu = () => setIsPhoneCodeListMenuVisible(!isPhoneCodeListMenuVisible)
   const handleFormSubmit = (event: FormEvent) => {
      event.preventDefault()

      if (error.status && phoneNumber.length !== 10) return

      const data: PhoneLoginData = {
         phoneCode: selectedCode.phoneCode,
         phoneNumber: phoneNumber,
      }

      console.log(data)
   }

   return (
      <form
         onSubmit={handleFormSubmit}
         className="relative flex w-full flex-col items-start justify-center gap-2 baseTablet:w-full">
         <div className="flex w-full items-start gap-2">
            <div
               ref={togglePhoneCodeListMenuButtonRef}
               onClick={handleTogglePhoneCodeSelectMenu}
               className={`relative flex h-14 w-36 cursor-pointer items-center justify-between rounded border-2 bg-white p-2 text-[14px] transition-colors duration-200 baseTablet:rounded baseTablet:px-2
                          ${isPhoneCodeListMenuVisible ? 'border-skin-theme-700' : 'border-gray-200'}`}>
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
                     className="absolute -left-[2.5%] top-[120%] z-[101] flex h-44 w-[105%] flex-col items-start justify-start overflow-y-scroll rounded border border-gray-50 bg-white text-[14px] text-gray-600">
                     {Object.entries(CountriesPhoneCodes).map(([flagCode, phoneCode], index) => (
                        <li
                           onClick={() => {
                              handleChangeSelectedPhoneCode(flagCode, phoneCode, index)
                           }}
                           className={`flex w-full cursor-pointer items-center justify-start gap-2 px-2 py-1 text-start hover:bg-gray-100 
                                       ${index === selectedPhoneCodeIndex && 'bg-skin-theme-50'}`}
                           key={nanoid()}>
                           <FlagIcon code={flagCode as FlagIconCode} size={16} />
                           {'+' + phoneCode}
                        </li>
                     ))}
                  </ul>
               )}
            </div>

            <div className={'flex w-full flex-col items-start gap-2'}>
               <div className={'peer relative h-14 w-full'}>
                  <input
                     name={'phone-number-input'}
                     ref={phoneNumberInputRef}
                     value={phoneNumber}
                     onChange={handleSetPhoneNumber}
                     onBlur={handlePhoneInputBlur}
                     type="tel"
                     placeholder={t('phonePlaceholder')}
                     className={`peer  h-full w-full rounded border-2 bg-white px-3.5 text-[14px] font-normal placeholder-transparent transition-colors duration-200 baseTablet:rounded
                                ${error.status ? 'border-red-400 outline-red-400' : 'border-gray-200 hover:border-skin-theme-700'}
                                ${phoneNumber.length > 0 ? 'pt-2' : 'pt-0'}`}
                  />

                  <label
                     htmlFor="phone-number-input"
                     className={`peer pointer-events-none absolute left-4 top-1 text-[12px] font-normal transition-all duration-300 peer-placeholder-shown:left-4 peer-placeholder-shown:top-[18px] peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-gray-400
                                ${error.status ? 'text-red-400' : 'text-skin-theme-700'}`}>
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
