'use client'

import Image from 'next/image'
import { useState } from 'react'

type TProps = {
   imageSmall: string
   imageNormal: string
   alt: {
      tr: string
      en: string
   }
}

export const ImageOptimization = ({ imageNormal, imageSmall, alt }: TProps) => {
   const [loading, setLoading] = useState(true)

   const handleOnComplete = () => {
      setLoading(false)
   }

   return (
      <>
         <Image src={imageSmall} alt={alt.tr} width={20} height={20} priority className={!loading ? 'hidden' : 'w-full'} />

         <Image
            src={imageNormal}
            alt={alt.tr}
            width={100}
            height={100}
            loading={'eager'}
            onLoadingComplete={handleOnComplete}
            className={loading ? 'hidden' : ''}
         />
      </>
   )
}
