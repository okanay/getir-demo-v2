'use client'

import { PopUpCompound } from '@/components/UI-Components/PopupMenu/PopupCompound'
import { useSelector } from 'react-redux'
import { getMenuName } from '../../../../redux/slices/PopUpMenuSlice'

export const PopupManager = () => {
   const selectedMenu: string = useSelector(getMenuName)

   return (
      <PopUpCompound>
         {selectedMenu === 'language' && <PopUpCompound.LanguageMenu></PopUpCompound.LanguageMenu>}
         {selectedMenu === 'login' && <PopUpCompound.LoginMenu></PopUpCompound.LoginMenu>}
      </PopUpCompound>
   )
}
