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
         className={`flex h-10 flex-col items-center justify-center rounded-t ${
            link.isSelected ? 'bg-skin-theme-700' : 'hover:bg-skin-theme-700'
         } px-2.5 baseTablet:px-4`}>
         <span
            className={`${
               link.isSelected ? 'text-yellow-400' : 'text-slate-200'
            }  font-theme-weight tracking-wider smPhone:text-sm baseTablet:text-base`}>
            {t(link.localizationId)}
         </span>
      </li>
   ))
}
