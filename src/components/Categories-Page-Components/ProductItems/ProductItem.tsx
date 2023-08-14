import { PlusIcon } from '@heroicons/react/20/solid'
import { ImageOptimization } from '@/components/UI-Components/ImageOptimization'
import { twMerge } from 'tailwind-merge'
import { useLocale } from 'next-intl'
import { TProduct } from '../../../../libs/constants/DummyProducts'

type TProps = {
   product: TProduct
}

export const ProductItem = ({ product }: TProps) => {
   const { imageDetails, price, productDetails } = product
   const locale = useLocale()

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
            <button className={'absolute right-1.5 top-1.5 h-[32px] w-[32px] rounded-lg border border-gray-200 bg-white'}>
               <PlusIcon className={'w-full p-1 text-skin-theme-700 '} />
            </button>
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
