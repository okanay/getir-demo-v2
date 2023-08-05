import { z } from 'zod'

export class ValidationSchemas {
   // PhoneNumber
   static PhoneNumberRequiredLength = z.string().length(10, { message: 'Error101' })
   static PhoneNumberMaxLength = z.string().max(10, { message: 'Error102' })
   static PhoneNumberRegex = z.string().refine(value => /^[0-9]*$/.test(value), { message: 'Error103' })

   // NameInput
   static InputValidationRegex = z.string().refine(value => /^[A-Za-z\s]+$/.test(value), {
      message: 'Error104',
   })

   static InputRequiredLength = z.string().max(36, { message: 'Error101' })

   static InputValidation = z
      .string()
      .max(36, { message: 'Error101' })
      .refine(
         value => {
            const nameParts = value.split(' ')
            return nameParts.length >= 2 && nameParts.every(part => part.length > 0)
         },
         {
            message: 'Error102',
         },
      )
      .refine(
         value => {
            const nameParts = value.split(' ')
            return nameParts.length < 4 && nameParts.every(part => part.length > 0)
         },
         {
            message: 'Error103',
         },
      )

   static EmailSchema = z.string().email({ message: 'Error101' })
   static EmailSchemaRequiredLength = z.string().max(36, { message: 'Error102' })
}
