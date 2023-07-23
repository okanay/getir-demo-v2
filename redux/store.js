import { configureStore } from '@reduxjs/toolkit'
import SliceReducer from './slices/SliceExample/Slice'

export default configureStore({
   reducer: {
      slice: SliceReducer,
   },
})
