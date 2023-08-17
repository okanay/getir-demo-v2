import { useTranslations } from 'next-intl'

export const NavigationLinks = () => {
   const t = useTranslations('Header.NavigationBrands')

   const links = [
      {
         key: 'link-getir',
         localizationId: 'brand-1',
         isSelected: true,
      },
      {
         key: 'link-getiryemek',
         localizationId: 'brand-2',
         isSelected: false,
      },
      {
         key: 'link-getirbuyuk',
         localizationId: 'brand-3',
         isSelected: false,
      },
      {
         key: 'link-getirsu',
         localizationId: 'brand-4',
         isSelected: false,
      },
      {
         key: 'link-getircarsi',
         localizationId: 'brand-5',
         isSelected: false,
      },
   ]

   return links.map(link => (
      <li
         key={link.key}
         className={`flex cursor-pointer flex-col items-center justify-center rounded-t py-[8px] ${
            link.isSelected ? 'bg-skin-theme-700' : 'hover:bg-skin-theme-700'
         } px-4`}
      >
         <span
            className={`${
               link.isSelected ? 'text-yellow-400' : 'text-slate-300'
            }  -tracking-wide smPhone:text-sm baseTablet:text-base`}
         >
            {t(link.localizationId)}
         </span>
      </li>
   ))
}
