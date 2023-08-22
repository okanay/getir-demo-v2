'use client'
import Image from 'next/image'
import {
   addProductsToShopList,
   getShopListProducts,
   minusProductsToShopList,
   TSelectedProduct,
} from '../../../redux/slices/ShopListSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useUserSelectedProducts } from '@/hooks/useUserSelectedProducts'
import { useGetTotalPrice } from '@/hooks/useGetTotalPrice'
import { GoShopListButton } from '@/components/UI-Components/GoShopListButton'
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/20/solid'
import { nanoid } from '@reduxjs/toolkit'
import { useLocale } from 'next-intl'
import { FormatPrice } from '../../../libs/helpers/LiraFormatedPrice'

export const RightAsideShopList = () => {
   const { isProductExistInShopList } = useGetTotalPrice()

   return (
      <aside className="sticky top-0 z-[200] mb-16 hidden w-full baseLaptop:block baseLaptop:h-fit baseLaptop:max-w-[300px] baseLaptop:flex-shrink-0 baseLaptop:flex-grow baseLaptop:basis-[100%]">
         <div className={'flex h-full flex-col items-start justify-start gap-16'}>
            <div className={'flex-start flex h-full flex-shrink-0 flex-col gap-y-2'}>
               <h4 className={'text-[14px] font-semibold text-slate-900'}>Sepetim</h4>
               <div className={'min-w-[300px] rounded-lg border-2 border-amber-400 bg-white px-4'}>
                  {!isProductExistInShopList ? <EmptyShopList /> : <ShopList />}
               </div>
            </div>
         </div>
      </aside>
   )
}

function ShopList() {
   const { products } = useGetTotalPrice()
   const locale = useLocale()

   const dispatch = useDispatch()

   return (
      <div className={'flex h-full w-full flex-col items-center justify-center gap-8 pb-4 pt-2'}>
         <div className={'flex h-full w-full flex-col items-center justify-center gap-4 text-center'}>
            <div className={'max-h-[380px] w-full flex-shrink-0 overflow-y-auto'}>
               {products.map(p => (
                  <div key={nanoid()} className={'flex w-full items-center justify-between border-b border-gray-200 py-4'}>
                     <div className={'flex flex-col justify-start justify-items-start text-start text-[14px]'}>
                        <p className={'text-slate-800'}>
                           {locale === 'tr' ? p.product.productDetails[0].text : p.product.productDetails[1].text}
                        </p>
                        <p className={'text-skin-theme-700'}>
                           {p.product.price.discount.status
                              ? FormatPrice(p.product.price.discount.discountedPrice)
                              : FormatPrice(p.product.price.fullPrice)}
                        </p>
                     </div>
                     <div className={'flex flex-row items-center justify-end'}>
                        <button
                           className={''}
                           onClick={() => {
                              dispatch(minusProductsToShopList(p.product))
                           }}>
                           {p.quantity <= 1 ? (
                              <TrashIcon
                                 className={'h-9 w-9 scale-90 rounded-l-lg border-2 border-gray-100 p-1 text-skin-theme-700'}
                              />
                           ) : (
                              <MinusIcon className={'h-9 w-9 rounded-l-lg border-2 border-gray-100 p-1 text-skin-theme-700'} />
                           )}
                        </button>
                        <p className={'h-9 w-9 border-y-2 border-skin-theme-700 bg-skin-theme-700 p-1 text-white'}>
                           {p.quantity}
                        </p>
                        <button
                           className={''}
                           onClick={() => {
                              dispatch(addProductsToShopList(p.product))
                           }}>
                           <PlusIcon className={'h-9 w-9 rounded-r-lg border-2 border-gray-100 p-1 text-skin-theme-700'} />
                        </button>
                     </div>
                  </div>
               ))}
            </div>

            <GoShopListButton />
         </div>
      </div>
   )
}

function EmptyShopList() {
   return (
      <div className={'flex h-full w-full flex-col items-center justify-center gap-8 py-16'}>
         <Image src={'/images/shoplist-bg-image.svg'} width={72} height={86} alt={''} className={'scale-125'} />
         <div className={'flex h-full w-full flex-col items-center justify-center gap-1 text-center'}>
            <span className={'text-[16px] font-semibold text-skin-theme-700'}>Sepetiniz şu an boş</span>
            <span className={'text-[14px] font-semibold text-gray-400'}>Sipariş vermek için sepetinize ürün ekleyin</span>
         </div>
      </div>
   )
}
