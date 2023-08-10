import { nanoid } from '@reduxjs/toolkit'
import { AltCategory } from '../../../../libs/types/types'
import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/20/solid'
import { ProductLoadingContainer } from '@/components/Categories-Page-Components/ProductItems/ProductLoadingContainer'
import { Product, Products } from '@/components/Categories-Page-Components/ProductItems/ProductsItems'

type TProps = {
   index: number
   altCategory: AltCategory
   products: Products
}

export const ProductAltMenu = ({ index, altCategory, products }: TProps) => {
   const [dummyCount, setDummyCount] = useState(4)

   const DummyDataRender = () => {
      const divs = []
      for (let i = 0; i < dummyCount; i++) {
         divs.push(<ProductLoadingContainer key={nanoid()} />)
      }
      return divs
   }

   const data: Products | undefined = products.filter(p => p.altCategoryId === altCategory.id) || undefined

   return (
      <section key={nanoid()} className={'my-2 flex flex-col items-start justify-start gap-2'}>
         {index !== 0 ? <h1 className={'text-[14px] text-slate-900'}>{altCategory.name}</h1> : null}
         <div className="grid h-fit w-full grid-cols-4 gap-[1px] rounded-lg bg-gray-100 baseTablet:grid-cols-3 lgTablet:grid-cols-4">
            {data !== undefined &&
               data.map(d => (
                  <div key={nanoid()} className={'grid h-[210px] w-full grid-rows-2 bg-white'}>
                     <div className={'relative row-span-1 flex h-full w-full flex-col items-center justify-center'}>
                        <div className={'mt-4 h-[96px] w-[96px] animate-pulse rounded-full bg-gray-200'}></div>
                        <button
                           className={'absolute right-1.5 top-1.5 h-[32px] w-[32px] rounded-lg border border-gray-200 bg-white'}>
                           <PlusIcon className={'w-full p-1 text-skin-theme-700 '} />
                        </button>
                     </div>
                     <div className="row-span-1 flex h-full w-full flex-col items-center justify-center gap-0.5 px-4 text-[14px]">
                        <h1 className={'font-semibold text-skin-theme-700'}>₺{d.price.fullPrice}</h1>
                        <h1 className={'font-semibold text-slate-900'}>{d.productDetails[0].text}</h1>
                        <h1 className={'text-gray-600'}>{d.productDetails[0].description}</h1>
                     </div>
                  </div>
               ))}
            <DummyDataRender />
         </div>
      </section>
   )
}
