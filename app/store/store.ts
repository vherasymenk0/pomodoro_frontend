import storage from 'redux-persist/lib/storage'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
      },
    }),
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
