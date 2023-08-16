import { createSlice } from '@reduxjs/toolkit'

export type TSelectedProduct = {
   productId: number
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

      addProductsToShopList: (state, action: { payload: number }) => {
         const isNewProductAlreadyExist: boolean = Boolean(state.products.find(p => p.productId === action.payload))

         if (isNewProductAlreadyExist) {
            state.products = state.products.map(p => {
               if (p.productId === action.payload) {
                  return { ...p, quantity: p.quantity + 1 }
               }
               return p
            })
         } else {
            state.products = [...state.products, { quantity: 1, productId: action.payload }]
         }
      },

      minusProductsToShopList: (state, action: { payload: number }) => {
         const targetProduct: TSelectedProduct | undefined = state.products.find(p => p.productId === action.payload)

         if (targetProduct !== undefined) {
            if (targetProduct.quantity > 1) {
               state.products = state.products.map(p => {
                  if (p.productId === action.payload) {
                     return {
                        ...p,
                        quantity: p.quantity - 1,
                     }
                  }
                  return p
               })
            } else {
               state.products = state.products.filter(p => p.productId !== action.payload)
            }
         }
      },
   },
})

export const getShopListProducts = (state: any) => state.shopListSlice.products

export const { clearShopList, addProductsToShopList, minusProductsToShopList } = ShopListSlice.actions
export default ShopListSlice.reducer
