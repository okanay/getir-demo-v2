import { NavigationBrands } from '@/components/Header-Components/NavigationBrands/NavigationBrands'
import { LanguageMenu } from '@/components/UI-Components/LanguageButton/LanguageMenu'
import { LoginMenu } from '@/components/Header-Components/LoginMenu'
import { PopupManager } from '@/components/UI-Components/PopupMenu/PopupManager'

export const Header = () => {
   return (
      <header
         className={'flex w-full flex-col items-start items-center justify-start bg-skin-theme-700 font-openSans font-semibold'}>
         <nav className={'w-full bg-skin-theme-800'}>
            <NavigationBrands />
         </nav>
         <PopupManager />
      </header>
   )
}
