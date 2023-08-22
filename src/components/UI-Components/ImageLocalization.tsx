'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useLocale } from 'next-intl'
import { StaticImageData } from 'next/dist/shared/lib/get-img-props'

type TProps = {
   image: StaticImageData
   alt: {
      tr: string
      en: string
   }
}

export const ImageLocalization = ({ image, alt }: TProps) => {
   const locale = useLocale()

   return (
      <>
         <Image
            src={image}
            alt={locale === 'tr' ? alt.tr : alt.en}
            placeholder={'blur'}
            loading={'eager'}
            className={'h-full w-full'}
         />
      </>
   )
}
