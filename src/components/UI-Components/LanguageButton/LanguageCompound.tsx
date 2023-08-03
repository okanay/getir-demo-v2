import { ReactNode } from 'react'
import { FooterButton } from '@/components/UI-Components/LanguageButton/FooterButton'
import { HeaderButton } from '@/components/UI-Components/LanguageButton/HeaderButton'

type Props = {
   children: ReactNode
}
export const LanguageCompound = ({ children }: Props) => {
   return children
}

LanguageCompound.HeaderButton = HeaderButton
LanguageCompound.FooterButton = FooterButton
