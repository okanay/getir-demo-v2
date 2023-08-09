import { ProductsNavigationLinks } from '@/components/Categories-Components/ProductsMenu/ProductsNavigationLinks'

export const ProductsMenu = () => {
   return (
      <aside className="baseTablet:flex-grow-1 sticky top-0 w-full baseTablet:h-fit baseTablet:max-w-[240px] baseTablet:flex-shrink-0 baseTablet:basis-[100%] baseTablet:py-2">
         <div className={'flex-start flex flex-col gap-y-2'}>
            <h4 className={'hidden baseTablet:block'}>Kategoriler</h4>
            <ProductsNavigationLinks />
         </div>
      </aside>
   )
}
