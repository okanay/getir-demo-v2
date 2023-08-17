import { useTranslations } from 'next-intl'

import Image from 'next/image'

export const NavigationLinks = () => {
   const t = useTranslations('Header.NavigationBrands')

   const links = [
      {
         key: 'link-getir',
         localizationId: 'brand-1',
         isSelected: true,
         width: 53,
         height: 24,
      },
      {
         key: 'link-getiryemek',
         localizationId: 'brand-2',
         isSelected: false,
         width: 125,
         height: 40,
      },
      {
         key: 'link-getirbuyuk',
         localizationId: 'brand-3',
         isSelected: false,
         width: 122,
         height: 24,
      },
      {
         key: 'link-getirsu',
         localizationId: 'brand-4',
         isSelected: false,
         width: 92,
         height: 40,
      },
      {
         key: 'link-getircarsi',
         localizationId: 'brand-5',
         isSelected: false,
         width: 112,
         height: 40,
      },
   ]

   return links.map(link => (
      <li
         key={link.key}
         className={`flex flex-shrink-0 cursor-pointer flex-col items-center justify-center overflow-x-auto rounded-t py-[16px] baseTablet:flex-shrink ${
            link.isSelected ? 'bg-skin-theme-700' : 'hover:bg-skin-theme-700'
         } px-4`}>
         <figure className={'h-[12px] w-auto lgPhone:h-[14px] baseTablet:h-[16px]'}>
            <Image
               src={t(link.localizationId)}
               alt={link.localizationId}
               width={100}
               height={25}
               className={`h-full w-full object-fill ${link.isSelected ? '' : 'grayscale'}`}
            />
         </figure>
      </li>
   ))
}
