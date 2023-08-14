import { PlusIcon } from '@heroicons/react/20/solid'
import { TProduct } from '@/components/Categories-Page-Components/ProductItems/ProductItemsFetch'
import { ImageOptimization } from '@/components/UI-Components/ImageOptimization'

type TProps = {
   product: TProduct
}

export const Product = ({ product }: TProps) => {
   return (
      <article className={'grid h-[210px] w-full grid-rows-2 bg-white'}>
         <div className={'relative row-span-1 flex h-full w-full flex-col items-center justify-center'}>
            <div className={'mt-4 h-[96px] w-[96px]'}>
               <ImageOptimization
                  imageSmall={product.imageDetails.imageSmall}
                  imageNormal={product.imageDetails.imageNormal}
                  alt={product.imageDetails.alt}
               />
            </div>
            <button className={'absolute right-1.5 top-1.5 h-[32px] w-[32px] rounded-lg border border-gray-200 bg-white'}>
               <PlusIcon className={'w-full p-1 text-skin-theme-700 '} />
            </button>
         </div>
         <div className="row-span-1 flex h-full w-full flex-col items-center justify-center gap-0.5 px-4 text-[14px]">
            <h1 className={'font-semibold text-skin-theme-700'}>₺{product.price.fullPrice}</h1>
            <h1 className={'font-semibold text-slate-900'}>{product.productDetails[0].text}</h1>
            <h1 className={'text-gray-600'}>{product.productDetails[0].description}</h1>
         </div>
      </article>
   )
}
