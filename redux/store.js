import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
//
//

import PopUpMenuReducer from './slices/PopUpMenuSlice'
import SelectedAltCatIndexReducer from './slices/SelectedAltCatIndexSlice'
import CategoryOpenCloseReducer from './slices/CategoryOpenCloseSlice'

import ShopListReducer from './slices/ShopListSlice'

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['shopListSlice'],
   blacklist: ['popUpMenu', 'selectedAltCatIndexSlice', 'CategoryOpenCloseReducer'],
}

const reducers = combineReducers({
   popUpMenu: PopUpMenuReducer,
   selectedAltCatIndexSlice: SelectedAltCatIndexReducer,
   categoryOpenCloseSlice: CategoryOpenCloseReducer,

   shopListSlice: ShopListReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
   reducer: persistedReducer,
   middleware: [thunk],
})

export const persistor = persistStore(store)
