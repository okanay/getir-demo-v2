import { Category } from '../../../../libs/types/types'
import { CategoryList } from '../../../../libs/constants/CategoriesList'
import { nanoid } from '@reduxjs/toolkit'
import { MenuTitle } from '@/components/Categories-Page-Components/ProductsMenu/MenuTitle'
import { MenuLink } from '@/components/Categories-Page-Components/ProductsMenu/MenuLink'

export async function MenuLinks() {
   return (
      <div className="h-full w-full overflow-y-auto border border-skin-theme-700 bg-gradient-to-tr from-skin-theme-400 to-skin-theme-600 baseTablet:rounded-lg baseTablet:border-gray-200 baseTablet:from-gray-100 baseTablet:to-white">
         <div className="flex w-full flex-row items-center justify-start gap-x-4 overflow-x-auto px-2 baseTablet:flex-col baseTablet:px-0">
            {CategoryList.map(category => (
               <MenuLink key={nanoid()} category={category} />
            ))}
         </div>
      </div>
   )
}