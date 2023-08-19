'use client'

import { MenuLinks } from '@/components/Categories-Page-Components/ProductsMenu/MenuLinks'
import { MenuTitle } from '@/components/Categories-Page-Components/ProductsMenu/MenuTitle'
import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryOpenCloseIndex, setCategoryOpenCloseIndex } from '../../../../redux/slices/CategoryOpenCloseSlice'
import { CategoryList } from '../../../../libs/constants/CategoriesList'
import { Category } from '../../../../libs/types/types'

export const ProductsMenu = () => {
   return (
      <aside className="sticky top-0 z-[200] mb-16 w-full baseTablet:h-fit baseTablet:max-w-[240px] baseTablet:flex-shrink-0 baseTablet:flex-grow baseTablet:basis-[100%]">
         <div className={'flex-start flex flex-col gap-y-2'}>
            <MenuTitle className={'hidden text-[14px] font-semibold text-slate-900 baseTablet:block'} />
            <MenuLinks />
         </div>
      </aside>
   )
}
