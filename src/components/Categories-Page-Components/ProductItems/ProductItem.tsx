'use client'

import { TProduct, TProducts } from '../../../../libs/constants/DummyProducts'
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/20/solid'
import { useDispatch, useSelector } from 'react-redux'
import { ImageOptimization } from '@/components/UI-Components/ImageOptimization'
import { twMerge } from 'tailwind-merge'
import { useLocale } from 'next-intl'
import {
   addProductsToShopList,
   getShopListProducts,
   minusProductsToShopList,
   TSelectedProduct,
} from '../../../../redux/slices/ShopListSlice'
import { useEffect, useState } from 'react'

type TProps = {
   product: TProduct
}

export const ProductItem = ({ product }: TProps) => {
   const [selectedCount, setSelectedCount] = useState<number>(0)

   const { imageDetails, price, productDetails } = product
   const locale = useLocale()

   const dispatch = useDispatch()
   const products: TSelectedProduct[] = useSelector(getShopListProducts)

   const handleAddShopListButton = () => {
      dispatch(addProductsToShopList(product.productId))
   }

   const handleMinusShopListButton = () => {
      dispatch(minusProductsToShopList(product.productId))
   }

   useEffect(() => {
      const selectedProductCount = products.find(p => p.productId === product.productId)

      if (selectedProductCount !== undefined) {
         setSelectedCount(selectedProductCount.quantity)
      } else {
         setSelectedCount(0)
      }
   }, [product.productId, products])

   return (
      <article className={'grid h-[210px] w-full grid-rows-2 bg-white'}>
         <div className={'relative row-span-1 flex h-full w-full flex-col items-center justify-center'}>
            <div className={'mt-4 h-[96px] w-[96px]'}>
               <ImageOptimization
                  imageSmall={imageDetails.imageSmall}
                  imageNormal={imageDetails.imageNormal}
                  alt={imageDetails.alt}
               />
            </div>
            <div className={'absolute right-1.5 top-1.5 h-[32px] w-[32px]'}>
               <div className={'flex flex-col items-center justify-center'}>
                  <button onClick={handleAddShopListButton} className={'rounded-lg border border-gray-200 bg-white'}>
                     <PlusIcon className={'w-full p-1 text-skin-theme-700 '} />
                  </button>
                  {selectedCount !== 0 && (
                     <>
                        <h4>{selectedCount}</h4>
                        <button onClick={handleMinusShopListButton} className={'rounded-lg border border-gray-200 bg-white'}>
                           {selectedCount === 1 ? (
                              <TrashIcon className={'w-full p-1 text-skin-theme-700 '} />
                           ) : (
                              <MinusIcon className={'w-full p-1 text-skin-theme-700 '} />
                           )}
                        </button>
                     </>
                  )}
               </div>
            </div>
         </div>
         <div className="row-span-1 flex h-full w-full flex-col items-center justify-center gap-0.5 px-4 text-[14px]">
            <div className={'flex flex-row items-center justify-center gap-1'}>
               <h1
                  className={twMerge(
                     'font-semibold text-skin-theme-700 ',
                     price.discount.status && 'text-gray-400 line-through',
                  )}>
                  ₺{price.fullPrice}
               </h1>
               {product.price.discount.status && (
                  <h1 className={'font-semibold text-skin-theme-700'}>₺{price.discount.discountedPrice}</h1>
               )}
            </div>
            <h1 className={'font-semibold text-slate-900'}>
               {locale === 'tr' ? productDetails[0].text : productDetails[1].text}
            </h1>
            <h1 className={'text-gray-600'}>{locale === 'tr' ? productDetails[0].description : productDetails[1].description}</h1>
         </div>
      </article>
   )
}
