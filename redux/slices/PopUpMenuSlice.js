import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   menu: 'closed',
}
export const PopUpMenuSlice = createSlice({
   name: 'languageMenuStatus',
   initialState,
   reducers: {
      closeMenu: state => {
         const body = document.querySelector('body')
         body.classList.remove('overflow-hidden')

         state.menu = 'close'
      },
      setMenu: (state, action) => {
         const body = document.querySelector('body')
         body.classList.add('overflow-hidden')

         state.menu = action.payload
      },
   },
})
export const getMenu = state => state.popUpMenu
export const getMenuName = state => state.popUpMenu.menu
export const { closeMenu, setMenu } = PopUpMenuSlice.actions
export default PopUpMenuSlice.reducer
