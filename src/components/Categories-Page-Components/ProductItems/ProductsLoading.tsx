import { ProductItemLoadingSkeleton } from '@/components/Categories-Page-Components/ProductItems/ProductItemLoadingSkeleton'
import { nanoid } from '@reduxjs/toolkit'
import { useState } from 'react'

export const ProductsLoading = () => {
   return (
      <div className="flex h-full w-full w-full flex-col items-start justify-start">
         <div className={'ml-4 h-4 w-[200px] animate-pulse bg-slate-400/40'} />
         <div className="grid h-fit w-full grid-cols-2 gap-[1px] rounded-lg bg-gray-100 smTablet:grid-cols-3 baseLaptop:grid-cols-4">
            <DummyDataRender copyCount={32} />
         </div>
      </div>
   )
}

export const DummyDataRender = ({ copyCount }: { copyCount: number }) => {
   const divs = []
   for (let i = 0; i < copyCount; i++) {
      divs.push(<ProductItemLoadingSkeleton key={nanoid()} />)
   }
   return divs
}
