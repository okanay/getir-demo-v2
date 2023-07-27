import { configureStore } from '@reduxjs/toolkit'
import SliceReducer from './slices/SliceExample/Slice'
import LanguageMenuReducer from './slices/LanguageMenuSlice'

export default configureStore({
   reducer: {
      slice: SliceReducer,
      languageMenuStatus: LanguageMenuReducer,
   },
})
