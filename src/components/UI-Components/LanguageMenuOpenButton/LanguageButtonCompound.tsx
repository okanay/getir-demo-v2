import { ReactNode } from 'react'
import { FooterButton } from '@/components/UI-Components/LanguageMenuOpenButton/FooterButton'
import { HeaderButton } from '@/components/UI-Components/LanguageMenuOpenButton/HeaderButton'

type Props = {
   children: ReactNode
}
export const LanguageButtonCompound = ({ children }: Props) => {
   return children
}

LanguageButtonCompound.HeaderButton = HeaderButton
LanguageButtonCompound.FooterButton = FooterButton
