import { NavigationBrands } from '@/components/Header-Components/NavigationBrands/NavigationBrands'
import { HeroSectionLogin } from '@/components/Header-Components/HeroSectionLogin/HeroSectionLogin'

export const Header = () => {
   return (
      <header className={'flex w-full flex-col items-start items-center justify-start bg-skin-theme-700 font-openSans'}>
         <nav className={'w-full bg-skin-theme-800'}>
            <NavigationBrands />
            <HeroSectionLogin />
         </nav>
      </header>
   )
}
