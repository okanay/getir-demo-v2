import { configureStore } from '@reduxjs/toolkit'
import SliceReducer from './slices/SliceExample/Slice'
import PopUpMenuReducer from './slices/PopUpMenuSlice'
import SelectedAltCatIndexReducer from './slices/SelectedAltCatIndexSlice'

export default configureStore({
   reducer: {
      slice: SliceReducer,
      popUpMenu: PopUpMenuReducer,
      selectedAltCatIndexSlice: SelectedAltCatIndexReducer,
   },
})
