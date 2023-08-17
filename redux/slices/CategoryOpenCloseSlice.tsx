import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   index: -1 as number,
}

export const CategoryOpenCloseSlice = createSlice({
   name: 'categoryOpenCloseSlice',
   initialState,
   reducers: {
      resetCategoryOpenCloseIndex: state => {
         state.index = -1
      },

      setCategoryOpenCloseIndex: (state, action: { payload: number }) => {
         state.index = action.payload
      },
   },
})

export const getCategoryOpenCloseIndex = (state: any) => state.categoryOpenCloseSlice.index
export const { resetCategoryOpenCloseIndex, setCategoryOpenCloseIndex } = CategoryOpenCloseSlice.actions
export default CategoryOpenCloseSlice.reducer
