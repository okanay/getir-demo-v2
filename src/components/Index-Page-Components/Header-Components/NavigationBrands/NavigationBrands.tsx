'use client'

import { NavigationLinks } from '@/components/Index-Page-Components/Header-Components/NavigationBrands/NavigationLinks'
import { useTranslations } from 'next-intl'
import { LoginMenuButton } from '@/components/Index-Page-Components/Header-Components/NavigationBrands/LoginMenuButton'
import { RegisterMenuButton } from '@/components/Index-Page-Components/Header-Components/NavigationBrands/RegisterMenuButton'
import { LanguageButton } from '@/components/UI-Components/LanguageMenuOpenButton/LanguageButton'

export const NavigationBrands = () => {
   const t = useTranslations('Header.Options')

   return (
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between bg-skin-theme-800 font-spaceGrotesk font-medium tracking-wide text-gray-300">
         <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-4 bg-skin-theme-800">
            <ul className="mt-1 flex h-full w-full flex-row items-center justify-start gap-1 overflow-x-auto px-2 baseTablet:px-6">
               <NavigationLinks />
            </ul>
            <ul className="hidden flex-shrink-0 items-center justify-end gap-8 pr-4 font-openSans text-sm baseTablet:flex baseLaptop:gap-10 baseLaptop:pr-8">
               <LanguageButton type={'header'} />
               <LoginMenuButton t={t} />
               <RegisterMenuButton t={t} />
            </ul>
         </div>
      </div>
   )
}
