import { z, ZodType } from 'zod'

export type LoginFormType = z.infer<typeof LoginValidationSchemas.LoginFormSchema>
export type IsFormSuccessFunction = (data: LoginFormType) => boolean | LoginFormType

export class LoginValidationSchemas {
   static LoginFormSchema: ZodType = z.object({
      flagCode: z.string().min(1).max(4),
      phoneCode: z.string().min(1).max(4),
      phoneNumber: z.string().min(10).max(10),
   })

   static IsLoginFormSuccess: IsFormSuccessFunction = (data: LoginFormType) => {
      const schemaCheck = this.LoginFormSchema.safeParse(data)
      if (!schemaCheck.success) return false
      return schemaCheck.data
   }
}

export class PhoneNumberSchemas {
   static PhoneNumberRequiredLength = z.string().length(10, { message: 'Error101' })
   static PhoneNumberMaxLength = z.string().max(10, { message: 'Error102' })
   static PhoneNumberRegex = z.string().refine(value => /^[0-9]*$/.test(value), { message: 'Error103' })
}

export class FullNameSchemas {
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
}

export class EmailSchemas {
   static EmailSchema = z.string().email({ message: 'Error101' })
   static EmailSchemaRequiredLength = z.string().max(36, { message: 'Error102' })
}
