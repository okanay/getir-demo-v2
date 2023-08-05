import { ButtonHTMLAttributes } from 'react'

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

export type CustomError = {
   status: boolean
   message: string
}

export type PhoneLoginData = {
   flagCode: string
   phoneCode: string
   phoneNumber: string
}

export type ButtonTypeElement = ButtonHTMLAttributes<HTMLButtonElement>

export type BodyTypeElement = HTMLBodyElement | null
