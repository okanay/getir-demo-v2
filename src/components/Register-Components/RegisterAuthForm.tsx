import React, { useState } from 'react'
import { SelectedCode } from '../../../libs/constants/CountriesPhoneCodesList'
import { useTranslations } from 'next-intl'
import { PhoneCodeInput } from '@/components/UI-Components/CustomInput/PhoneCodeInput'
import { PhoneNumberInput } from '@/components/UI-Components/CustomInput/PhoneNumberInput'

export const RegisterAuthForm = () => {
   // i18 Language
   const t = useTranslations('Menus.RegisterMenu')
   // STATE's
   const [selectedCode, setSelectedCode] = useState<SelectedCode>({
      flagCode: 'TR',
      phoneCode: '90',
   })
   const [phoneNumber, setPhoneNumber] = useState<string>('')
   // SCHEMA's
   // HANDLE's
   const handleOnSubmit = () => {}

   return (
      <form onSubmit={handleOnSubmit} className={'flex w-full flex-col gap-2'}>
         <div className="flex w-full items-start gap-2">
            <PhoneCodeInput selectedCode={selectedCode} setSelectedCode={setSelectedCode} />
            <PhoneNumberInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
         </div>
         <button
            type="submit"
            className="h-14 w-full rounded border border-gray-200 bg-yellow-400 px-4 text-[14px] font-medium text-skin-theme-700 transition-colors duration-200 hover:bg-skin-theme-700 hover:text-yellow-400">
            {t('registerButton')}
         </button>
      </form>
   )
}
