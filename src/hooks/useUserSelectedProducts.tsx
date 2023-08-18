import { useSelector } from 'react-redux'
import { DummyData, TProduct } from '../../libs/constants/DummyProducts'
import { getShopListProducts, TSelectedProduct } from '../../redux/slices/ShopListSlice'
import { useEffect, useState } from 'react'

export type TUserSelectedProduct = {
   product: TProduct
   quantity: number
}

export function useUserSelectedProducts() {}
