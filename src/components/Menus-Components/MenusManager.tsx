'use client'

import { useSelector } from 'react-redux'

import { MenusCompound } from '@/components/Menus-Components/MenusCompound'
import { getMenuName, MenuEnum } from '../../../redux/slices/PopUpMenuSlice'
import { MenuContainer } from '@/components/Menus-Components/MenuContainer'

export const MenusManager = () => {
   const selectedMenu: MenuEnum = useSelector(getMenuName)

   return (
      selectedMenu !== 'closed' && (
         <MenuContainer>
            <MenusCompound>
               {selectedMenu === 'language' && <MenusCompound.LanguageMenu></MenusCompound.LanguageMenu>}
               {selectedMenu === 'login' && <MenusCompound.LoginMenu></MenusCompound.LoginMenu>}
               {selectedMenu === 'register' && <MenusCompound.RegisterMenu></MenusCompound.RegisterMenu>}
            </MenusCompound>
         </MenuContainer>
      )
   )
}
