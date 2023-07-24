import { configureStore } from '@reduxjs/toolkit'
import SliceReducer from './slices/SliceExample/Slice'
import GiftReducer from './slices/SliceExample/GiftSlice'

export default configureStore({
   reducer: {
      slice: SliceReducer,
      gift: GiftReducer,
   },
})
