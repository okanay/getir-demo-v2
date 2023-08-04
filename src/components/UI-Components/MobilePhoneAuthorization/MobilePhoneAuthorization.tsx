import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { nanoid } from '@reduxjs/toolkit'

import { FlagIcon, FlagIconCode } from 'react-flag-kit'
import { ChevronDownIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid'
import { CountriesPhoneCodes, SelectedCode } from '../../../../libs/constants/CountriesPhoneCodesList'
import { PhoneLoginData, CustomError } from '../../../../libs/types/types'
import { PhoneCodeInput } from '@/components/UI-Components/MobilePhoneAuthorization/PhoneCodeInput'
import { PhoneNumberInput } from '@/components/UI-Components/MobilePhoneAuthorization/PhoneNumberInput'

export const MobilePhoneAuthorization = () => {
   // i18 Language
   const t = useTranslations('UI.MobilePhoneAuth')

   // STATE's
   const [selectedCode, setSelectedCode] = useState<SelectedCode>({
      flagCode: 'TR',
      phoneCode: '90',
   })

   const [phoneNumber, setPhoneNumber] = useState<string>('')

   // HANDLE's
   const handleFormSubmit = (event: FormEvent) => {
      event.preventDefault()

      if (phoneNumber.length !== 10) return

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
            <PhoneCodeInput selectedCode={selectedCode} setSelectedCode={setSelectedCode} />
            <PhoneNumberInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
         </div>
         <button
            type="submit"
            className="h-14 w-full rounded border border-gray-200 bg-yellow-400 px-4 text-[14px] font-medium text-skin-theme-700 transition-colors duration-200 hover:bg-skin-theme-700 hover:text-yellow-400">
            {t('loginButton')}
         </button>
      </form>
   )
}
