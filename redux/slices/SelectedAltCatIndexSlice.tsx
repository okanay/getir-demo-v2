import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   index: 0 as number,
}

export const SelectedAltCatIndexSlice = createSlice({
   name: 'selectedAltCatIndexSlice',
   initialState,
   reducers: {
      resetSelectedAltCategoryIndex: state => {
         state.index = 0
      },

      setSelectedAltCategoryIndex: (state, action: { payload: number }) => {
         state.index = action.payload
      },
   },
})

export const getSelectedAltCategoriesIndexSlice = (state: any) => state.selectedAltCatIndexSlice
export const getSelectedAltCategoryIndex = (state: any) => state.selectedAltCatIndexSlice.index
export const { resetSelectedAltCategoryIndex, setSelectedAltCategoryIndex } = SelectedAltCatIndexSlice.actions
export default SelectedAltCatIndexSlice.reducer
