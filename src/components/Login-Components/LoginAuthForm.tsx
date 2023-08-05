import { SelectedCode } from '../../../libs/constants/CountriesPhoneCodesList'
import React, { FormEvent, useState } from 'react'

import { PhoneCodeInput } from '@/components/UI-Components/CustomInput/PhoneCodeInput'
import { PhoneNumberInput } from '@/components/UI-Components/CustomInput/PhoneNumberInput'
import { useTranslations } from 'next-intl'

import { z, ZodType } from 'zod'
import { useDispatch } from 'react-redux'
import { setMenu } from '../../../redux/slices/PopUpMenuSlice'
export const LoginFormSchema: ZodType = z.object({
   flagCode: z.string().min(1).max(4),
   phoneCode: z.string().min(1).max(4),
   phoneNumber: z.string().min(10).max(10),
})
export type LoginFormType = z.infer<typeof LoginFormSchema>

export const LoginAuthForm = () => {
   // i18 Language
   const t = useTranslations('Menus.LoginMenu')
   // STATE's
   const [selectedCode, setSelectedCode] = useState<SelectedCode>({
      flagCode: 'TR',
      phoneCode: '90',
   })
   const [phoneNumber, setPhoneNumber] = useState<string>('')
   // SCHEMA's
   type IsFormSuccessFunction = (data: LoginFormType) => boolean | LoginFormType
   const IsFormSuccess: IsFormSuccessFunction = (data: LoginFormType) => {
      const schemaCheck = LoginFormSchema.safeParse(data)

      if (!schemaCheck.success) {
         const schemaError = schemaCheck.error.format()

         // const phoneNumberError = schemaError.phoneNumber?._errors.join(', ') || ''
         // const phoneCodeError = schemaError.phoneCode?._errors.join(', ') || ''
         // const flagCodeError = schemaError.flagCode?._errors.join(', ') || ''

         console.log(schemaError)
         return false
      }

      return schemaCheck.data
   }
   // HANDLE's
   const handleFormSubmit = (event: FormEvent) => {
      event.preventDefault()

      const data: LoginFormType = {
         flagCode: selectedCode.flagCode,
         phoneCode: selectedCode.phoneCode,
         phoneNumber: phoneNumber,
      }
      const validData = IsFormSuccess(data)

      if (!validData) return
      console.log(validData)
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