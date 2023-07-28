import { FooterNavigationItem } from '@/components/Footer-Components/FooterNavigationItem'
import { nanoid } from '@reduxjs/toolkit'

export const FooterNavItems = () => {
   return footerNavigation.data.map((data, index) => <FooterNavigationItem data={data} key={nanoid()} index={index} />)
}

const footerNavigation: FooterNavigation = {
   data: [
      {
         title: "Getir'i keşfedin",
         links: [
            {
               languageCode: 'Hakkımızda',
               url: '',
            },
            {
               languageCode: 'Kariyer',
               url: '',
            },
            {
               languageCode: 'Teknoloji Kariyerleri',
               url: '',
            },
            {
               languageCode: 'İletişim',
               url: '',
            },
            {
               languageCode: 'Sosyal Sorumluluk Projeleri',
               url: '',
            },
         ],
      },
      {
         title: 'Yardıma mı ihtiyacınız var?',
         links: [
            {
               languageCode: 'Hakkımızda',
               url: '',
            },
            {
               languageCode: 'Kariyer',
               url: '',
            },
            {
               languageCode: 'Teknoloji Kariyerleri',
               url: '',
            },
            {
               languageCode: 'İletişim',
               url: '',
            },
            {
               languageCode: 'Sosyal Sorumluluk Projeleri',
               url: '',
            },
         ],
      },
      {
         title: 'İş Ortağımız Olun',
         links: [
            {
               languageCode: 'Hakkımızda',
               url: '',
            },
            {
               languageCode: 'Kariyer',
               url: '',
            },
            {
               languageCode: 'Teknoloji Kariyerleri',
               url: '',
            },
            {
               languageCode: 'İletişim',
               url: '',
            },
            {
               languageCode: 'Sosyal Sorumluluk Projeleri',
               url: '',
            },
         ],
      },
   ],
}

export interface FooterNavItem {
   languageCode: string
   url: string
}

export interface FooterNavItems {
   title: string
   links: FooterNavItem[]
}

export interface FooterNavigation {
   data: FooterNavItems[]
}
