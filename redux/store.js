import { configureStore } from '@reduxjs/toolkit'
import SliceReducer from './slices/SliceExample/Slice'
import PopUpMenuReducer from './slices/PopUpMenuSlice'

export default configureStore({
   reducer: {
      slice: SliceReducer,
      popUpMenu: PopUpMenuReducer,
   },
})
