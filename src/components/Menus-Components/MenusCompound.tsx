import { ReactNode, useEffect, useRef } from 'react'
import { LanguageMenu } from '@/components/Menus-Components/LanguageMenu/LanguageMenu'
import { LoginMenu } from '@/components/Login-Components/LoginMenu'
import { RegisterMenu } from '@/components/Register-Components/RegisterMenu'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../../../redux/slices/PopUpMenuSlice'

type Props = {
   children: ReactNode
}

export const MenusCompound = ({ children }: Props) => {
   return children
}

MenusCompound.LanguageMenu = LanguageMenu
MenusCompound.LoginMenu = LoginMenu
MenusCompound.RegisterMenu = RegisterMenu
