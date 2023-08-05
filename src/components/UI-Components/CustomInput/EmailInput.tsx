import React, { ChangeEvent, useState } from 'react'
import { ValidationSchemas } from '../../../../libs/validation/ValidationSchemas'
import { useTranslations } from 'next-intl'
import { CustomInput } from '@/components/UI-Components/CustomInput/CustomInput'

type Props = {
   email: string
   setEmail: (newValue: string) => void
}

export const EmailInput = ({ email, setEmail }: Props) => {
   // i18 Language
   const t = useTranslations('Menus.CustomInput.EmailInput')

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
      const enteredEmail = event.target.value || ''

      const isEnteredEmailValid = ValidationSchemas.EmailSchema.safeParse(enteredEmail)
      if (!isEnteredEmailValid.success) handleSetError(isEnteredEmailValid)
   }

   const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      const enteredEmail = event.target.value || ''
      const isEnteredEmailValid = ValidationSchemas.EmailSchemaRequiredLength.safeParse(enteredEmail)

      if (!isEnteredEmailValid.success && enteredEmail !== '') {
         handleSetError(isEnteredEmailValid)
         return
      }

      setEmail(event.target.value)
      handleClearError()
   }

   return (
      <CustomInput
         type={'email'}
         name={'Full Name'}
         value={email}
         errorStatus={error.status}
         errorMessage={error.message}
         handleOnBlur={handleOnBlur}
         handleOnChange={handleOnChange}
         t={t}
      />
   )
}
