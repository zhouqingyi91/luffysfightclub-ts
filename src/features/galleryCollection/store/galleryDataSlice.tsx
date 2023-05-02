import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../store'

export type ImgDataType = { imgName: string };

// Define a type for the slice state
interface GalleryImageDataState {
  imgData: ImgDataType[]
}

// Define the initial state using that type
const initialState: GalleryImageDataState = {
  imgData: [],
}

export const galleryDataSlice = createSlice({
  name: 'galleryImgData',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setGalleryImgData(state, action: PayloadAction<ImgDataType[]>) {
      state.imgData = action.payload
    },
  },
})

export const { setGalleryImgData } = galleryDataSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectGalleryImageData = (state: RootState) => state.galleryData.imgData

export default galleryDataSlice.reducer