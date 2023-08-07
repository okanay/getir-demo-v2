import { FullNameSchemas } from '../../../../libs/validations/ValidationSchemas'
import React, { ChangeEvent } from 'react'

import { CustomInput } from '@/components/UI-Components/CustomInput/CustomInput'
import { useTranslations } from 'next-intl'
import { useCustomErrorHook } from '@/hooks/useCustomErrorHook'

type Props = {
   fullName: string
   setFullName: (newValue: string) => void
}

export const FullNameInput = ({ fullName, setFullName }: Props) => {
   // i18 Language
   const t = useTranslations('Menus.CustomInput.NameInput')

   // CUSTOM HOOK's
   const { error, clearError, setErrorWithZodValidationSchema } = useCustomErrorHook()

   // Handle's
   const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      const enteredFullName = event.target.value || ''

      const isEnteredFullNameValid = FullNameSchemas.InputValidation.safeParse(enteredFullName)
      if (!isEnteredFullNameValid.success) setErrorWithZodValidationSchema(isEnteredFullNameValid)
   }

   const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      const enteredFullName = event.target.value || ''
      const isEnteredFullNameRegexValid = FullNameSchemas.InputValidationRegex.safeParse(enteredFullName)

      if (!isEnteredFullNameRegexValid.success && enteredFullName !== '') {
         setErrorWithZodValidationSchema(isEnteredFullNameRegexValid)
         return
      }
      if (!FullNameSchemas.InputRequiredLength.safeParse(enteredFullName).success) return

      setFullName(event.target.value)
      clearError()
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
