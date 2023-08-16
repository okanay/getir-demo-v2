import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
//
//

import PopUpMenuReducer from './slices/PopUpMenuSlice'
import SelectedAltCatIndexReducer from './slices/SelectedAltCatIndexSlice'
import ShopListReducer from './slices/ShopListSlice'

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['shopListSlice'],
}

const reducers = combineReducers({
   popUpMenu: PopUpMenuReducer,
   selectedAltCatIndexSlice: SelectedAltCatIndexReducer,
   shopListSlice: ShopListReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
   reducer: persistedReducer,
   middleware: [thunk],
})

export const persistor = persistStore(store)
