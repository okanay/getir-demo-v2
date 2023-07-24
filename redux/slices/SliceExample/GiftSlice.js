import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   selected: false,
   giftId: -1,
}

export const GiftSlice = createSlice({
   name: 'gift',
   initialState,
   reducers: {
      closeGift: state => {
         state.selected = false
         state.giftId = -1
      },
      selectGift: (state, action) => {
         console.log(action.payload.giftId)
         state.selected = true
         state.giftId = action.payload.giftId
      },
   },
})

export const giftSlice = state => state.gift
export const { selectGift, closeGift } = GiftSlice.actions

export default GiftSlice.reducer
