'use client'

import Image from 'next/image'
import { useState } from 'react'

export const LandingPosterImage = ({ t }: { t: any }) => {
   const [loading, setLoading] = useState(true)

   const handleOnComplete = () => {
      setLoading(false)
   }

   return (
      <>
         <Image
            src={t('images.landingPoster')}
            alt={''}
            height={288}
            width={605}
            loading={'eager'}
            onLoadingComplete={handleOnComplete}
            className={`absolute h-full w-full ${
               loading ? 'hidden ' : 'flex-shrink-0 flex-grow-0 object-contain object-cover object-left'
            }"`}
         />

         <Image
            src={'/images/PromotionImages/image-getir-landing-small.png'}
            alt={''}
            height={288}
            width={605}
            className={`${
               !loading ? 'hidden' : 'absolute h-full w-full flex-shrink-0 flex-grow-0 object-contain object-cover object-left'
            }`}
         />
      </>
   )
}
