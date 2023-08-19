'use client'
import Image from 'next/image'
import { getShopListProducts, TSelectedProduct } from '../../../redux/slices/ShopListSlice'
import { useSelector } from 'react-redux'
import { useUserSelectedProducts } from '@/hooks/useUserSelectedProducts'
import { useGetTotalPrice } from '@/hooks/useGetTotalPrice'

export const RightAsideShopList = () => {
   const { isProductExistInShopList, totalPrice } = useGetTotalPrice()

   return (
      <aside className="sticky top-0 z-[200] mb-16 hidden w-full baseLaptop:block baseLaptop:h-fit baseLaptop:max-w-[300px] baseLaptop:flex-shrink-0 baseLaptop:flex-grow baseLaptop:basis-[100%]">
         <div className={'flex h-full flex-col items-start justify-start gap-16'}>
            <div className={'flex-start flex h-full flex-shrink-0 flex-col gap-y-2'}>
               <h4 className={'text-[14px] font-semibold text-slate-900'}>Sepetim</h4>
               <div className={'max-w-[280px] rounded-lg border-2 border-amber-400 bg-white px-4 py-16'}>
                  {!isProductExistInShopList ? <EmptyShopList /> : <ShopList />}
               </div>
            </div>
         </div>
      </aside>
   )
}

function ShopList() {
   return (
      <div className={'flex h-full w-[280px] flex-col items-center justify-center gap-8'}>
         <div className={'flex h-full w-full flex-col items-center justify-center gap-1 text-center'}></div>
      </div>
   )
}

function EmptyShopList() {
   return (
      <div className={'flex h-full w-full flex-col items-center justify-center gap-8'}>
         <Image src={'/images/shoplist-bg-image.svg'} width={72} height={86} alt={''} className={'scale-125'} />
         <div className={'flex h-full w-full flex-col items-center justify-center gap-1 text-center'}>
            <span className={'text-[16px] font-semibold text-skin-theme-700'}>Sepetiniz şu an boş</span>
            <span className={'text-[14px] font-semibold text-gray-400'}>Sipariş vermek için sepetinize ürün ekleyin</span>
         </div>
      </div>
   )
}
