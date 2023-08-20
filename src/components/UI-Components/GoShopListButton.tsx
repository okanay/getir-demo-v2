import { useGetTotalPrice } from '@/hooks/useGetTotalPrice'

export const GoShopListButton = () => {
   const { totalPrice } = useGetTotalPrice()

   return (
      <button className={'pointer-events-auto h-[48px] w-full '}>
         <div className={'flex h-full w-full items-center justify-between rounded-lg bg-skin-theme-700'}>
            <span />
            <h4 className={'w-full text-center text-[14px] font-semibold text-white'}>Sepete Git</h4>
            <div className={'h-full w-[100px] flex-shrink-0  px-0.5 py-0.5'}>
               <div
                  className={
                     'flex h-full w-full items-center justify-center rounded-lg border border-gray-200 bg-white text-center text-[14px] text-skin-theme-700'
                  }>
                  {totalPrice}
               </div>
            </div>
         </div>
      </button>
   )
}
