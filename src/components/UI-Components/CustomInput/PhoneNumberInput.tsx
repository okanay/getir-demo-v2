import { PhoneNumberSchemas } from '../../../../libs/validations/ValidationSchemas'
import React, { ChangeEvent } from 'react'

import { CustomInput } from '@/components/UI-Components/CustomInput/CustomInput'
import { useTranslations } from 'next-intl'
import { useCustomErrorHook } from '@/hooks/useCustomErrorHook'

type Props = {
   phoneNumber: string
   setPhoneNumber: (newPhoneNumber: string) => void
}

export const PhoneNumberInput = ({ phoneNumber, setPhoneNumber }: Props) => {
   // i18 Language
   const t = useTranslations('Menus.CustomInput.PhoneNumberInput')

   // CUSTOM HOOK's
   const { error, clearError, setErrorWithZodValidationSchema } = useCustomErrorHook()

   // Handle's
   const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      const enteredPhoneNumber = event.target.value || ''
      const isEnteredPhoneNumberValid = PhoneNumberSchemas.PhoneNumberRequiredLength.safeParse(enteredPhoneNumber)

      if (!isEnteredPhoneNumberValid.success) setErrorWithZodValidationSchema(isEnteredPhoneNumberValid)
   }

   const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      const enteredPhoneNumber = event.target.value || ''
      const isEnteredPhoneNumberValid = PhoneNumberSchemas.PhoneNumberRegex.safeParse(enteredPhoneNumber)

      if (!isEnteredPhoneNumberValid.success) {
         setErrorWithZodValidationSchema(isEnteredPhoneNumberValid)
         return
      }

      if (!PhoneNumberSchemas.PhoneNumberMaxLength.safeParse(enteredPhoneNumber).success) return

      setPhoneNumber(String(enteredPhoneNumber))
      clearError()
   }

   return (
      <CustomInput
         type={'tel'}
         name={'phone'}
         value={phoneNumber}
         errorStatus={error.status}
         errorMessage={error.message}
         handleOnBlur={handleOnBlur}
         handleOnChange={handleOnChange}
         t={t}
      />
   )
}
