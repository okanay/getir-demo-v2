import { nanoid } from '@reduxjs/toolkit'
import { AltCategory } from '../../../../libs/types/types'
import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/20/solid'
import { ProductLoadingContainer } from '@/components/Categories-Page-Components/ProductItems/ProductLoadingContainer'

type TProps = {
   index: number
   altCategory: AltCategory
}

export const ProductAltMenu = ({ index, altCategory }: TProps) => {
   const [dummyCount, setDummyCount] = useState(4)

   const DummyDataRender = () => {
      const divs = []
      for (let i = 0; i < dummyCount; i++) {
         divs.push(<ProductLoadingContainer key={nanoid()} />)
      }
      return divs
   }

   return (
      <section key={nanoid()} className={'my-2 flex flex-col items-start justify-start gap-2'}>
         {index !== 0 ? <h1 className={'text-[14px] text-slate-900'}>{altCategory.name}</h1> : null}
         <div className="grid h-fit w-full grid-cols-4 gap-[1px] rounded-lg bg-gray-100 baseTablet:grid-cols-3 lgTablet:grid-cols-4">
            <DummyDataRender />
         </div>
      </section>
   )
}
