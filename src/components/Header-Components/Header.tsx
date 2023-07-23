import { LanguageSelect } from '@/components/Header-Components/LanguageSelect'
import { NavigationBrands } from '@/components/Header-Components/NavigationBrands/NavigationBrands'
import { HeroSectionLogin } from '@/components/Header-Components/HeroSectionLogin/HeroSectionLogin'

export const Header = () => {
   return (
      <header className={'bg-skin-theme-700 flex w-full flex-col items-start items-center justify-start font-openSans'}>
         <nav className={'bg-skin-theme-800 w-full'}>
            <NavigationBrands />
            <HeroSectionLogin />
         </nav>
      </header>
   )
}
