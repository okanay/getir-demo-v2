import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { SelectedCode } from '../../../../libs/constants/CountriesPhoneCodesList'
import { CustomError, PhoneLoginData } from '../../../../libs/types/types'
import { StateUpdater } from 'preact/compat'

type Props = {
   phoneNumber: string
   setPhoneNumber: (newPhoneNumber: string) => void
}

export const PhoneNumberInput = ({ phoneNumber, setPhoneNumber }: Props) => {
   // i18 Language

   const t = useTranslations('Menus.CustomInput')

   const errorT = useTranslations('Error.MobilePhoneAuth')

   // CONSTANT's

   const initialError: CustomError = {
      status: false,
      errorMessage: '',
   }

   // REF's

   const phoneNumberInputRef = useRef<HTMLInputElement | null>(null)

   // STATE's

   const [error, setError] = useState<CustomError>(initialError)

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

      setPhoneNumber(String(enteredNumber))
      if (enteredNumber.length === 10) handleClearError()
   }

   return (
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
                                ${String(phoneNumber).length > 0 ? 'pt-2' : 'pt-0'}`}
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

         {error.status && (
            <div className={'relative h-4 w-full'}>
               <p className={'absolute text-start text-[11px] font-normal text-red-500'}>{errorT(error.errorMessage)}</p>
            </div>
         )}
      </div>
   )
}
