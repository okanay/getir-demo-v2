import './globals.css'
import type { Metadata } from 'next'

import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'
import { Providers } from '@/app/[locale]/providers'
import { Header } from '@/components/Index-Page-Components/Header-Components/Header'
import { Footer } from '@/components/Index-Page-Components/Footer-Components/Footer'

export const metadata: Metadata = {
   title: 'Getir | Okan Ay',
   description: 'Cloned by getir for my portfolio.',
}

type Props = {
   children: ReactNode
   params: { locale: string }
}

async function getMessages(locale: string) {
   try {
      return (await import(`../../../languages/${locale}.json`)).default
   } catch (error) {
      notFound()
   }
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
   const messages = await getMessages(locale)

   return (
      <html className="" lang={locale}>
         <body>
            <NextIntlClientProvider locale={locale} messages={messages}>
               <Providers>
                  <Header />
                  {children}
                  <Footer />
               </Providers>
            </NextIntlClientProvider>
         </body>
      </html>
   )
}
