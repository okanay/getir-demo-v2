import { Category } from '../../../../libs/types/types'
import { CategoryList } from '../../../../libs/constants/CategoriesList'
import { nanoid } from '@reduxjs/toolkit'
import { ProductMenuItemText } from '@/components/Categories-Components/ProductsMenu/ProductMenuItemText'
import { ProductsLinks } from '@/components/Categories-Components/ProductsMenu/ProductsLinks'

export async function ProductsNavigationLinks() {
   return (
      <div className="h-full w-full overflow-y-auto border border-skin-theme-700 bg-gradient-to-tr bg-gradient-to-tr from-skin-theme-400 to-skin-theme-600 baseTablet:rounded-lg baseTablet:border-gray-200 baseTablet:from-gray-100 baseTablet:to-white">
         <div className="flex w-full flex-row items-center justify-start gap-x-4 overflow-x-auto px-2 baseTablet:flex-col baseTablet:px-0">
            {CategoryList.map(category => (
               <ProductsLinks key={nanoid()} category={category} />
            ))}
         </div>
      </div>
   )
}
