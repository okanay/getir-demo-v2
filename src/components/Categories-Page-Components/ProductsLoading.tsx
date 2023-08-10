import { ProductLoadingContainer } from '@/components/Categories-Page-Components/ProductItems/ProductLoadingContainer'
import { nanoid } from '@reduxjs/toolkit'
import { useState } from 'react'

export const ProductsLoading = () => {
   const DummyDataRender = () => {
      const divs = []
      for (let i = 0; i < 8; i++) {
         divs.push(<ProductLoadingContainer key={nanoid()} />)
      }
      return divs
   }

   return (
      <div className="mt-14 flex h-full w-full w-full flex-col items-start justify-start gap-4 px-6 py-2 baseTablet:mt-0 baseTablet:px-4">
         <div className={'h-4 w-[200px] animate-pulse bg-slate-400'} />
         <div className="grid h-fit w-full grid-cols-3 gap-[1px] rounded-lg bg-gray-100 baseLaptop:grid-cols-4">
            <DummyDataRender />
         </div>
      </div>
   )
}
