import { MenuLinks } from '@/components/Categories-Page-Components/ProductsMenu/MenuLinks'
import { MenuTitle } from '@/components/Categories-Page-Components/ProductsMenu/MenuTitle'

export const ProductsMenu = () => {
   return (
      <aside className="baseTablet:flex-grow-1 sticky top-0 w-full baseTablet:h-fit baseTablet:max-w-[240px] baseTablet:flex-shrink-0 baseTablet:basis-[100%] baseTablet:py-2">
         <div className={'flex-start flex flex-col gap-y-2'}>
            <MenuTitle className={'hidden baseTablet:block'} />
            <MenuLinks />
         </div>
      </aside>
   )
}