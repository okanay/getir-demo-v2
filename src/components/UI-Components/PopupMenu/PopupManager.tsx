'use client'

import { useSelector } from 'react-redux'

import { PopUpCompound } from '@/components/UI-Components/PopupMenu/PopupCompound'
import { getMenuName, MenuEnum } from '../../../../redux/slices/PopUpMenuSlice'

export const PopupManager = () => {
   const selectedMenu: MenuEnum = useSelector(getMenuName)

   return (
      <PopUpCompound>
         {selectedMenu === 'language' && <PopUpCompound.LanguageMenu></PopUpCompound.LanguageMenu>}
         {selectedMenu === 'login' && <PopUpCompound.LoginMenu></PopUpCompound.LoginMenu>}
         {selectedMenu === 'register' && <></>}
      </PopUpCompound>
   )
}
