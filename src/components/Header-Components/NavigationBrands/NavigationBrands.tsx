'use client'

import { NavigationLinks } from '@/components/Header-Components/NavigationBrands/NavigationLinks'
import { LanguageMenuButton } from '@/components/Header-Components/NavigationBrands/LanguageMenuButton'
import { useTranslations } from 'next-intl'
import { LoginMenuButton } from '@/components/Header-Components/NavigationBrands/LoginMenuButton'
import { RegisterMenuButton } from '@/components/Header-Components/NavigationBrands/RegisterMenuButton'

export const NavigationBrands = () => {
   const t = useTranslations('Header.Options')

   return (
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between bg-skin-theme-800 font-spaceGrotesk font-medium tracking-wide text-slate-300">
         <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-4 bg-skin-theme-800 px-1 pt-1 baseTablet:px-4">
            <ul className="no-scrollbar flex items-center justify-start gap-1 overflow-x-scroll baseTablet:overflow-hidden">
               <NavigationLinks />
            </ul>
            <ul className="hidden items-center justify-end gap-8 font-openSans text-sm baseTablet:flex lgTablet:gap-10">
               <LanguageMenuButton t={t} />
               <LoginMenuButton t={t} />
               <RegisterMenuButton t={t} />
            </ul>
         </div>
      </div>
   )
}
