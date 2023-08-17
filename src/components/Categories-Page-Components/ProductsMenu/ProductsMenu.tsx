'use client'

import { MenuLinks } from '@/components/Categories-Page-Components/ProductsMenu/MenuLinks'
import { MenuTitle } from '@/components/Categories-Page-Components/ProductsMenu/MenuTitle'
import { useEffect } from 'react'

export const ProductsMenu = () => {

   useEffect(() => {
      console.log('render')
      return () => {
         console.log('unmount')
      }
   }, [])

   return (
      <aside className="sticky top-0 z-[200] mb-16 w-full baseTablet:h-fit baseTablet:max-w-[240px] baseTablet:flex-shrink-0 baseTablet:flex-grow baseTablet:basis-[100%]">
         <div className={'flex-start flex flex-col gap-y-2'}>
            <MenuTitle className={'hidden text-[14px] font-semibold text-slate-900 baseTablet:block'} />
            <MenuLinks />
         </div>
      </aside>
   )
}
