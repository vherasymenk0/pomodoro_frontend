import storage from 'redux-persist/lib/storage'
import { PersistConfig, persistReducer, persistStore } from 'redux-persist'
import { rootReducer } from './rooReducer'
import { configureStore } from '@reduxjs/toolkit'

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage,
  whitelist: ['auth'],
}

// @ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
