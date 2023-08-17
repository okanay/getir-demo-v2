'use client'

import { useEffect } from 'react'

type TProps = {
   children: React.ReactNode
}
export const ProductsContainer = ({ children }: TProps) => {



   return (
      <div className={'bg-gray-50'}>
         <section
            id={'categories'}
            className={
               'relative top-0 mx-auto flex max-w-7xl flex-col font-openSans baseTablet:mt-4 baseTablet:flex-row baseTablet:gap-2 baseTablet:py-2 baseTablet:pl-5'
            }
         >
            {children}
         </section>
      </div>
   )
}
