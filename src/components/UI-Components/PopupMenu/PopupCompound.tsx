import { ReactNode } from 'react'
import { LanguageMenu } from '@/components/UI-Components/LanguageButton/LanguageMenu'
import { LoginMenu } from '@/components/Header-Components/LoginMenu'

type Props = {
   children: ReactNode
}

export const PopUpCompound = ({ children }: Props) => {
   return children
}

PopUpCompound.LanguageMenu = LanguageMenu
PopUpCompound.LoginMenu = LoginMenu
