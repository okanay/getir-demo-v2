import { ButtonHTMLAttributes } from 'react'

export type Category = {
   unique: string
   languageCode: string
   image: any
   imageSmall: any
   url: string
   altCategories: number
}

export type Categories = Category[]

export type Card = {
   key: string
   cardImage: string
   cardWidth: number
   cardHeight: number
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
