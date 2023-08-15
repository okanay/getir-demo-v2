import { createSlice } from '@reduxjs/toolkit'
import { BodyTypeElement } from '../../libs/types/types'

export type MenuEnum = 'closed' | 'language' | 'login' | 'register'

const initialState = {
   menu: 'closed' as MenuEnum,
}

export const PopUpMenuSlice = createSlice({
   name: 'languageMenuStatus',
   initialState,
   reducers: {
      closeMenu: state => {
         const body: BodyTypeElement = document.querySelector('body')

         if (body !== null) {
            body.classList.remove('overflow-hidden')
         }

         state.menu = 'closed'
      },

      setMenu: (state, action: { payload: Exclude<MenuEnum, 'closed'> }) => {
         const body: BodyTypeElement = document.querySelector('body')

         if (body !== null) {
            body.classList.add('overflow-hidden')
         }

         state.menu = action.payload
      },
   },
})
export const getMenuName = (state: any) => state.popUpMenu.menu
export const { closeMenu, setMenu } = PopUpMenuSlice.actions
export default PopUpMenuSlice.reducer
