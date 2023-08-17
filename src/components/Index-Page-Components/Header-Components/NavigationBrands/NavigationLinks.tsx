import { useLocale, useTranslations } from 'next-intl'

import Image from 'next/image'

import getir from '../../../../../public/images/HeaderImages/getir.svg'
import getirfood from '../../../../../public/images/HeaderImages/getirfood.svg'
import getiryemek from '../../../../../public/images/HeaderImages/getiryemek.svg'
import getirmore from '../../../../../public/images/HeaderImages/getirmore.svg'
import getirbuyuk from '../../../../../public/images/HeaderImages/getirbuyuk.svg'
import getirwater from '../../../../../public/images/HeaderImages/getirwater.svg'
import getirsu from '../../../../../public/images/HeaderImages/getirsu.svg'
import getirlocals from '../../../../../public/images/HeaderImages/getirlocals.svg'
import getircarsi from '../../../../../public/images/HeaderImages/getircarsi.svg'

export const NavigationLinks = () => {
   const t = useTranslations('Header.NavigationBrands')
   const locale = useLocale()

   const links = [
      {
         key: 'link-getir',
         image: {
            tr: {
               src: getir,
            },
            en: {
               src: getir,
            },
         },
         isSelected: true,
      },
      {
         key: 'link-getiryemek',
         image: {
            tr: {
               src: getiryemek,
            },
            en: {
               src: getirfood,
            },
         },
         isSelected: false,
      },
      {
         key: 'link-getirbuyuk',
         image: {
            tr: {
               src: getirbuyuk,
            },
            en: {
               src: getirmore,
            },
         },
         isSelected: false,
      },
      {
         key: 'link-getirsu',
         image: {
            tr: {
               src: getirsu,
            },
            en: {
               src: getirwater,
            },
         },
         isSelected: false,
      },
      {
         key: 'link-getircarsi',
         image: {
            tr: {
               src: getircarsi,
            },
            en: {
               src: getirlocals,
            },
         },
         isSelected: false,
         width: 120,
         height: 24,
      },
   ]

   return links.map(link => (
      <li
         key={link.key}
         className={`group flex h-full w-auto flex-col items-center justify-center rounded-t-[0.3rem] px-3 py-3 transition duration-300 baseTablet:px-5 baseTablet:py-3 ${
            link.isSelected ? 'cursor-pointer bg-skin-theme-700' : 'cursor-not-allowed hover:bg-skin-theme-700'
         }`}>
         <Image
            src={locale === 'tr' ? link.image?.tr.src : link.image?.en.src}
            alt={''}
            className={`h-[14px] w-auto transition duration-300 baseTablet:h-[16px] ${
               !link.isSelected && 'contrast-[30%] grayscale group-hover:contrast-100 group-hover:grayscale-0'
            }`}
         />
      </li>
   ))
}
