'use client'

import { MenuLinks } from '@/components/Categories-Page-Components/ProductsMenu/MenuLinks'
import { MenuTitle } from '@/components/Categories-Page-Components/ProductsMenu/MenuTitle'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { resetSelectedAltCategoryIndex } from '../../../../redux/slices/SelectedAltCatIndexSlice'

export const ProductsMenu = () => {
   const [client, setClient] = useState<boolean>(true)

   return (
      <aside className="sticky top-0 z-[200] w-full baseTablet:h-fit baseTablet:max-w-[240px] baseTablet:flex-shrink-0 baseTablet:flex-grow baseTablet:basis-[100%] baseTablet:py-2">
         <div className={'flex-start flex flex-col gap-y-2'}>
            <MenuTitle className={'hidden text-[14px] text-slate-900 baseTablet:block'} />
            <MenuLinks />
         </div>
      </aside>
   )
}
