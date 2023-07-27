import { NavigationBrands } from '@/components/Header-Components/NavigationBrands/NavigationBrands'
import { HeroSectionLogin } from '@/components/Index-Components/HeroSectionLogin/HeroSectionLogin'
import { LanguageSelect } from '@/components/Header-Components/LanguageSelect'

export const Header = () => {
   return (
      <header
         className={'flex w-full flex-col items-start items-center justify-start bg-skin-theme-700 font-openSans font-semibold'}>
         <nav className={'w-full bg-skin-theme-800'}>
            <NavigationBrands />
         </nav>
         <LanguageSelect />
      </header>
   )
}
