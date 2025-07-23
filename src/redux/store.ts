"use client"
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import AutomationReducer from '@/redux/slices/automations'
import { TypedUseSelectorHook, useSelector} from 'react-redux'
import searchTermReducer from './slices/searchTerm' // ✅ Import the reducer

const rootReducer = combineReducers({
  AutomationReducer,
  searchTerm: searchTermReducer
})

// store is essentially state and we create different slices of that state
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false
    })
})

// identify the return type of the store/state & the type of the dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// provide a typed selector hook for accessing state in components
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector