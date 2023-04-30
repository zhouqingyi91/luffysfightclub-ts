import { configureStore } from '@reduxjs/toolkit'
import { galleryDataReducer } from '../features/galleryCollection'


export const store = configureStore({
  reducer: {
    galleryData: galleryDataReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch