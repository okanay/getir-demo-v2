'use client'

import { useTranslations } from 'next-intl'
export default function Index({ params }: { params: { locale: string } }) {
   const t = useTranslations('Index')

   return <></>
}
