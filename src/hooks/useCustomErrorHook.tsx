import { useState } from 'react'

export const useCustomErrorHook = () => {
   const [error, setError] = useState({
      status: false,
      message: '',
   })

   const setErrorWithZodValidationSchema = (schema: any) => {
      setError({
         status: true,
         message: schema.error?.formErrors?.formErrors[0] || schema.formErrors.formErrors[0] || 'Error100',
      })
   }

   const clearError = () => setError({ status: false, message: '' })

   return { error, setErrorWithZodValidationSchema: setErrorWithZodValidationSchema, clearError }
}
