'use client'

import { useSelector } from 'react-redux'

import { MenusCompound } from '@/components/Menus-Components/MenusCompound'
import { getMenuName, MenuEnum } from '../../../redux/slices/PopUpMenuSlice'

export const MenusManager = () => {
   const selectedMenu: MenuEnum = useSelector(getMenuName)

   return (
      <MenusCompound>
         {selectedMenu === 'language' && <MenusCompound.LanguageMenu></MenusCompound.LanguageMenu>}
         {selectedMenu === 'login' && <MenusCompound.LoginMenu></MenusCompound.LoginMenu>}
         {selectedMenu === 'register' && <MenusCompound.RegisterMenu></MenusCompound.RegisterMenu>}
      </MenusCompound>
   )
}
