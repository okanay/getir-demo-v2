import { NavigationBrands } from '@/components/Index-Page-Components/Header-Components/NavigationBrands/NavigationBrands'
import { MenusManager } from '@/components/Menus-Components/MenusManager'

export const Header = () => {
   return (
      <header className="flex w-full flex-col items-start items-center justify-start bg-skin-theme-800 font-openSans font-semibold">
         <nav className={'w-full bg-skin-theme-800 standalone:mt-11'}>
            <NavigationBrands />
         </nav>
         <MenusManager />
      </header>
   )
}
