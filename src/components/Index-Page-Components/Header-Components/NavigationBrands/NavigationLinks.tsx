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
import Link from 'next/link'

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
         isSelectable: true,
         href: '/[key]',
         as: '../categories/beverages',
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
         isSelectable: false,
         href: '/',
         as: '../',
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
         isSelectable: false,
         href: '/',
         as: '../',
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
         isSelectable: false,
         href: '/',
         as: '../',
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
         isSelectable: false,
         href: '/',
         as: '../',
      },
   ]

   return links.map(link => (
      <li
         key={link.key}
         className={`group flex h-full w-auto flex-shrink-0 flex-col items-center justify-center rounded-t-[0.3rem] px-3 py-3 transition duration-300 baseTablet:px-5 baseTablet:py-3 ${
            link.isSelectable
               ? 'cursor-pointer bg-skin-theme-700'
               : 'pointer-events-none cursor-not-allowed hover:bg-skin-theme-700'
         }`}>
         <Link href={'/[key]'} as={link.isSelectable ? '../categories/beverages' : '/'}>
            <Image
               src={locale === 'tr' ? link.image?.tr.src : link.image?.en.src}
               alt={''}
               className={`h-[14px] w-auto transition duration-300 baseTablet:h-[16px] ${
                  !link.isSelectable && 'contrast-[30%] grayscale group-hover:contrast-100 group-hover:grayscale-0'
               }`}
            />
         </Link>
      </li>
   ))
}
