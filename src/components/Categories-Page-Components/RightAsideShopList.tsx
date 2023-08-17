import Image from 'next/image'

export const RightAsideShopList = () => {
   return (
      <aside className="flex-grow-1 sticky top-0 hidden flex-shrink-0 font-openSans baseLaptop:block">
         <div className={'flex h-full flex-col items-start justify-start gap-16'}>
            <div className={'flex-start flex h-full flex-shrink-0 flex-col gap-y-2'}>
               <h4 className={'text-[14px] font-semibold text-slate-900'}>Sepetim</h4>
               <div className={'rounded-lg border-2 border-amber-400 bg-white px-4 py-16'}>
                  <div className={'flex h-full flex-col items-center justify-center gap-8'}>
                     <Image src={'/images/shoplist-bg-image.svg'} width={72} height={86} alt={''} className={'scale-125'} />
                     <div className={'flex h-full max-w-[280px] flex-col items-center justify-center gap-1 text-center'}>
                        <span className={'text-[16px] font-semibold text-skin-theme-700'}>Sepetiniz şu an boş</span>
                        <span className={'text-[14px] font-semibold text-gray-400'}>
                           Sipariş vermek için sepetinize ürün ekleyin
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </aside>
   )
}
