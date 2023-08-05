import React, { ChangeEvent, useState } from 'react'
import { ValidationSchemas } from '../../../../libs/validation/ValidationSchemas'
import { useTranslations } from 'next-intl'
import { CustomInput } from '@/components/UI-Components/CustomInput/CustomInput'

type Props = {
   fullName: string
   setFullName: (newValue: string) => void
}

export const FullNameInput = ({ fullName, setFullName }: Props) => {
   // i18 Language
   const t = useTranslations('Menus.CustomInput.NameInput')

   // STATE's
   const [error, setError] = useState({
      status: false,
      message: '',
   })

   // HANDLE's
   const handleSetError = (schema: any) => {
      setError({ status: true, message: schema.error?.formErrors?.formErrors[0] || 'Error100' })
   }

   const handleClearError = () => setError({ status: false, message: '' })

   const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      const enteredFullName = event.target.value || ''

      const isEnteredFullNameValid = ValidationSchemas.InputValidation.safeParse(enteredFullName)
      if (!isEnteredFullNameValid.success) handleSetError(isEnteredFullNameValid)
   }

   const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      const enteredFullName = event.target.value || ''
      const isEnteredFullNameRegexValid = ValidationSchemas.InputValidationRegex.safeParse(enteredFullName)

      if (!isEnteredFullNameRegexValid.success && enteredFullName !== '') {
         handleSetError(isEnteredFullNameRegexValid)
         return
      }
      if (!ValidationSchemas.InputRequiredLength.safeParse(enteredFullName).success) return

      setFullName(event.target.value)
      handleClearError()
   }

   return (
      <CustomInput
         type={'text'}
         name={'Full Name'}
         value={fullName}
         errorStatus={error.status}
         errorMessage={error.message}
         handleOnBlur={handleOnBlur}
         handleOnChange={handleOnChange}
         t={t}
      />
   )
}
