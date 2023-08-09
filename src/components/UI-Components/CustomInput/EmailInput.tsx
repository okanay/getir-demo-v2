import { EmailSchemas } from '../../../../libs/validations/ValidationSchemas'
import React, { ChangeEvent } from 'react'

import { CustomInput } from '@/components/UI-Components/CustomInput/CustomInput'
import { useTranslations } from 'next-intl'
import { useCustomErrorHook } from '@/hooks/useCustomErrorHook'

type Props = {
   email: string
   setEmail: React.Dispatch<React.SetStateAction<string>>
}

export const EmailInput = ({ email, setEmail }: Props) => {
   // i18 Language
   const t = useTranslations('Menus.CustomInput.EmailInput')

   // CUSTOM HOOK's
   const { error, clearError, setErrorWithZodValidationSchema } = useCustomErrorHook()

   // Handle's
   const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      const enteredEmail = event.target.value || ''

      const isEnteredEmailValid = EmailSchemas.EmailSchema.safeParse(enteredEmail)
      if (!isEnteredEmailValid.success) setErrorWithZodValidationSchema(isEnteredEmailValid.error)
   }

   const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      const enteredEmail = event.target.value || ''
      const isEnteredEmailValid = EmailSchemas.EmailSchemaRequiredLength.safeParse(enteredEmail)

      if (!isEnteredEmailValid.success && enteredEmail !== '') {
         setErrorWithZodValidationSchema(isEnteredEmailValid.error)
         return
      }

      setEmail(event.target.value)
      clearError()
   }

   return (
      <CustomInput
         type={'email'}
         name={'Email'}
         value={email}
         errorStatus={error.status}
         errorMessage={error.message}
         handleOnBlur={handleOnBlur}
         handleOnChange={handleOnChange}
         t={t}
      />
   )
}
