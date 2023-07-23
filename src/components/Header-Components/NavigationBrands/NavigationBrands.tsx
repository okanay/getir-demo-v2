'use client'

import { NavigationLinks } from '@/components/Header-Components/NavigationBrands/NavigationLinks'
import { LanguageMenuButton } from '@/components/Header-Components/NavigationBrands/LanguageMenuButton'

export const NavigationBrands = () => {
   return (
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between bg-skin-theme-800 font-semibold">
         <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-4 bg-skin-theme-800 pl-4  pr-8 pt-1 font-semibold">
            <ul className="no-scrollbar flex items-center justify-start gap-1 overflow-x-scroll baseTablet:overflow-hidden">
               <NavigationLinks />
            </ul>
            <ul className="hidden items-center justify-end gap-8 text-sm font-normal text-slate-200 baseTablet:flex lgTablet:gap-10">
               <LanguageMenuButton />
               <button className={'flex items-center justify-start gap-2'}>
                  <span className={'h-5 w-5 bg-slate-200'} />
                  <p className={'hidden lgTablet:block'}>Giris Yap</p>
               </button>
               <button className={'flex items-center justify-start gap-2'}>
                  <span className={'h-5 w-5 bg-slate-200'} />
                  <p className={'hidden lgTablet:block'}>Kayit Ol</p>
               </button>
            </ul>
         </div>
      </div>
   )
}
