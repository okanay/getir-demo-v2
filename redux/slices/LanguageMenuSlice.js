import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   status: false,
}
export const LanguageMenuSlice = createSlice({
   name: 'languageMenuStatus',
   initialState,
   reducers: {
      toggleLanguageMenuStatus: state => {
         state.status = !state.status
      },
      setLanguageMenuStatus: (state, action) => {
         state.status = action.payload
      },
   },
})
export const getLanguage = state => state.languageMenuStatus
export const getLanguageMenuStatus = state => state.languageMenuStatus.status
export const { toggleLanguageMenuStatus, setLanguageMenuStatus } = LanguageMenuSlice.actions
export default LanguageMenuSlice.reducer
