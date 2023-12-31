import { CategoryList } from '../../../../libs/constants/CategoriesList'
import { nanoid } from '@reduxjs/toolkit'
import { MenuLink } from '@/components/Categories-Page-Components/ProductsMenu/MenuLink'

export function MenuLinks() {
   return (
      <div className="h-full w-full overflow-x-auto border border-skin-theme-700 bg-skin-theme-700 baseTablet:max-h-[900px] baseTablet:overflow-x-hidden baseTablet:rounded-lg baseTablet:rounded-lg baseTablet:border-gray-200 baseTablet:bg-white">
         <div className="flex h-auto w-full flex-row items-center justify-start gap-x-4 baseTablet:flex-col baseTablet:px-0">
            {CategoryList.map((category, index) => (
               <MenuLink category={category} key={nanoid(4)} />
            ))}
         </div>
      </div>
   )
}
