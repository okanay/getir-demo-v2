import { ButtonHTMLAttributes } from 'react'

export type Person = {
   name: String
   age: Number
   alive: Boolean
}

export type Category = {
   key: string
   languageCode: string
   image: any
   imageSmall: any
   url: string
}

export type Categories = Category[]

export type Card = {
   key: string
   cardImage: string
   cardTitle: string
   cardAlt: string
}

export type Cards = Card[]

export type PhoneFormError = {
   status: boolean
   errorMessage: string
}

export type MobilePhoneAuth = {
   phoneCode: string
   phoneNumber: string
}

export type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>
