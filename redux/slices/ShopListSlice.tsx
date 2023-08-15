import { createSlice } from '@reduxjs/toolkit'
import { TProduct, TProducts } from '../../libs/constants/DummyProducts'

type TSelectedProduct = {
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

         console.log(state.products)
      },
   },
})

export const getShopListProducts = (state: any) => state.shopListSlice.products

export const { clearShopList, addProductsToShopList } = ShopListSlice.actions
export default ShopListSlice.reducer
