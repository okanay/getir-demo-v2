import { createSlice } from '@reduxjs/toolkit'
import { TProduct } from '../../libs/constants/DummyProducts'

export type TSelectedProduct = {
   product: TProduct
   quantity: number
}

const initialState = {
   products: [] as TSelectedProduct[],
}

export const ShopListSlice = createSlice({
   name: 'shopListSlice',
   initialState,
   reducers: {
      clearShopList: state => {
         state.products = []
      },

      addProductsToShopList: (state, action: { payload: TProduct }) => {
         const { payload } = action

         const existingProduct = state.products.find(p => p.product.productId === payload.productId)

         if (existingProduct) {
            existingProduct.quantity += 1
         } else {
            state.products.push({
               product: payload,
               quantity: 1,
            })
         }
      },

      minusProductsToShopList: (state, action: { payload: TProduct }) => {
         const { payload } = action

         const existingProduct = state.products.find(p => p.product.productId === payload.productId)

         if (existingProduct) {
            if (existingProduct.quantity > 1) {
               existingProduct.quantity -= 1
            } else {
               state.products = state.products.filter(p => p.product.productId !== payload.productId)
            }
         }
      },
   },
})

export const getShopListProducts = (state: any) => state.shopListSlice.products

export const { clearShopList, addProductsToShopList, minusProductsToShopList } = ShopListSlice.actions
export default ShopListSlice.reducer
