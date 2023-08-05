'use client'

import { useSelector } from 'react-redux'

import { MenusCompound } from '@/components/Menus-Components/MenusCompound'
import { getMenuName, MenuEnum } from '../../../redux/slices/PopUpMenuSlice'
import { MenuMainContainer } from '@/components/Menus-Components/MenuMainContainer'

export const MenusManager = () => {
   const selectedMenu: MenuEnum = useSelector(getMenuName)

   return (
      selectedMenu !== 'closed' && (
         <MenuMainContainer>
            <MenusCompound>
               {selectedMenu === 'language' && <MenusCompound.LanguageMenu></MenusCompound.LanguageMenu>}
               {selectedMenu === 'login' && <MenusCompound.LoginMenu></MenusCompound.LoginMenu>}
               {selectedMenu === 'register' && <MenusCompound.RegisterMenu></MenusCompound.RegisterMenu>}
            </MenusCompound>
         </MenuMainContainer>
      )
   )
}
