import { ReactNode } from 'react'
import { FooterButton } from '@/components/UI-Components/LanguageButton/FooterButton'
import { HeaderButton } from '@/components/UI-Components/LanguageButton/HeaderButton'

type Props = {
   children: ReactNode
}
export const LanguageButtonCompound = ({ children }: Props) => {
   return children
}

LanguageButtonCompound.HeaderButton = HeaderButton
LanguageButtonCompound.FooterButton = FooterButton
