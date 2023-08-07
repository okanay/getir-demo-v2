import { NavigationBrands } from '@/components/Index-Components/Header-Components/NavigationBrands/NavigationBrands'
import { LanguageMenu } from '@/components/Menus-Components/LanguageMenu/LanguageMenu'
import { LoginMenu } from '@/components/Login-Components/LoginMenu'
import { MenusManager } from '@/components/Menus-Components/MenusManager'

export const Header = () => {
   return (
      <header
         className={'flex w-full flex-col items-start items-center justify-start bg-skin-theme-700 font-openSans font-semibold'}>
         <nav className={'w-full bg-skin-theme-800'}>
            <NavigationBrands />
         </nav>
         <MenusManager />
      </header>
   )
}
