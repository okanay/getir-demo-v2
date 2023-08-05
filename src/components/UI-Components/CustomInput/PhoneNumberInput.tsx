import React, { ChangeEvent, useState } from 'react'
import { CustomError } from '../../../../libs/types/types'
import { ValidationSchemas } from '../../../../libs/validation/ValidationSchemas'

import { useTranslations } from 'next-intl'
import { CustomInput } from '@/components/UI-Components/CustomInput/CustomInput'

type Props = {
   phoneNumber: string
   setPhoneNumber: (newPhoneNumber: string) => void
}

export const PhoneNumberInput = ({ phoneNumber, setPhoneNumber }: Props) => {
   // i18 Language
   const t = useTranslations('Menus.CustomInput.PhoneNumberInput')

   // STATE's
   const [error, setError] = useState<CustomError>({
      status: false,
      message: '',
   })

   // HANDLE's
   const handleSetError = (schema: any) => {
      setError({ status: true, message: schema.error?.formErrors?.formErrors[0] || 'Error100' })
   }

   const handleClearError = () => setError({ status: false, message: '' })

   const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      const enteredPhoneNumber = event.target.value || ''
      const isEnteredPhoneNumberValid = ValidationSchemas.PhoneNumberRequiredLength.safeParse(enteredPhoneNumber)

      if (!isEnteredPhoneNumberValid.success) handleSetError(isEnteredPhoneNumberValid)
   }

   const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      const enteredPhoneNumber = event.target.value || ''
      const isEnteredPhoneNumberValid = ValidationSchemas.PhoneNumberRegex.safeParse(enteredPhoneNumber)

      if (!isEnteredPhoneNumberValid.success) {
         handleSetError(isEnteredPhoneNumberValid)
         return
      }

      if (!ValidationSchemas.PhoneNumberMaxLength.safeParse(enteredPhoneNumber).success) return

      setPhoneNumber(String(enteredPhoneNumber))
      handleClearError()
   }

   return (
      <CustomInput
         type={'tel'}
         name={'Phone Number'}
         value={phoneNumber}
         errorStatus={error.status}
         errorMessage={error.message}
         handleOnBlur={handleOnBlur}
         handleOnChange={handleOnChange}
         t={t}
      />
   )
}
