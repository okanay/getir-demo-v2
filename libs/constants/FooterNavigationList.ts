export const FooterNavigationList: FooterNavigation = {
   data: [
      {
         title: '1.title',
         links: [
            {
               languageCode: '1.link1',
               url: '',
            },
            {
               languageCode: '1.link2',
               url: '',
            },
            {
               languageCode: '1.link3',
               url: '',
            },
            {
               languageCode: '1.link4',
               url: '',
            },
            {
               languageCode: '1.link5',
               url: '',
            },
         ],
      },
      {
         title: '2.title',
         links: [
            {
               languageCode: '2.link1',
               url: '',
            },
            {
               languageCode: '2.link2',
               url: '',
            },
            {
               languageCode: '2.link3',
               url: '',
            },
            {
               languageCode: '2.link4',
               url: '',
            },
            {
               languageCode: '2.link5',
               url: '',
            },
         ],
      },
      {
         title: '3.title',
         links: [
            {
               languageCode: '3.link1',
               url: '',
            },
            {
               languageCode: '3.link2',
               url: '',
            },
            {
               languageCode: '3.link3',
               url: '',
            },
            {
               languageCode: '3.link4',
               url: '',
            },
            {
               languageCode: '3.link5',
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
