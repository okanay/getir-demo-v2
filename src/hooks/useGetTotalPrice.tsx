import { useEffect, useState } from 'react'
import { getShopListProducts, TSelectedProduct } from '../../redux/slices/ShopListSlice'
import { useSelector } from 'react-redux'

export const useGetTotalPrice = () => {
   const products: TSelectedProduct[] = useSelector(getShopListProducts)
   const isProductExistInShopList: boolean = products.length > 0

   const initialPrice = new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
   }).format(0)

   const [totalPrice, setTotalPrice] = useState<number | string>(initialPrice)

   useEffect(() => {
      if (isProductExistInShopList) {
         let price = 0

         products.forEach(p => {
            let isDiscount = p.product.price.discount.status

            if (isDiscount) {
               price += p.quantity * p.product.price.discount.discountedPrice
            } else {
               price += p.quantity * p.product.price.fullPrice
            }
         })

         const fixedPrice = parseFloat(price.toFixed(2))

         const formattedPrice = new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
         }).format(fixedPrice)

         setTotalPrice(formattedPrice)
      } else {
         setTotalPrice(initialPrice)
      }
   }, [products, isProductExistInShopList])

   return { isProductExistInShopList, totalPrice }
}
