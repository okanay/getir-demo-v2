import Image from 'next/image'

import { useTranslations } from 'next-intl'
import { CardsList } from '../../../../libs/constants/CardsList'
import { useState } from 'react'
import { LandingPosterImage } from '@/components/Index-Components/Promotions/LandingPosterImage'

export const Promotions = () => {
   //
   const t = useTranslations('Index.promotions')
   //

   return (
      <section id={'promotions'} className={'border-y border-gray-100 bg-gray-100 font-openSans'}>
         <div
            className={'mx-auto flex w-full max-w-7xl flex-col items-start justify-start gap-1 baseTablet:px-8 baseTablet:py-12'}>
            {/* Promotions Text*/}
            <div className="hidden h-full w-full grid-cols-4 baseTablet:grid baseTablet:grid-cols-5 lgTablet:grid-cols-10 lgTablet:gap-4 lgTablet:px-0">
               <div className="flex h-full w-full flex-col items-center py-2 text-center">
                  <h4 className={'text-[14px] font-semibold leading-[19px] text-slate-800'}>{t('title')}</h4>
               </div>
            </div>
            {/* Download Getir! */}
            <div className={'h-full w-full bg-skin-theme-700 bg-promotions bg-cover pt-10 baseTablet:rounded-lg'}>
               <div className={'flex h-full w-full flex-row justify-between gap-4'}>
                  <div className={'flex flex-col items-start justify-center px-8 baseTablet:flex-shrink-0'}>
                     <h2 className={'text-[26px] font-bold text-white'}>{t('altTitle')}</h2>
                     <p className={'pb-4 pt-2 text-lg text-white baseTablet:max-w-[300px]'}>{t('altText')}</p>
                     <div className={'flex flex-col items-center justify-start gap-2 pb-10 baseTablet:flex-row'}>
                        <Image src={t('images.appleDownload')} width={160} height={48} alt={''} className={''} />
                        <Image src={t('images.googleDownload')} width={160} height={48} alt={''} className={''} />
                        <Image src={t('images.huaweiDownload')} width={160} height={48} alt={''} className={''} />
                     </div>
                  </div>

                  <div className={'relative hidden h-[288px] w-[605px] overflow-hidden baseTablet:flex'}>
                     <LandingPosterImage t={t} />
                  </div>
               </div>
            </div>
            {/* Cards List*/}
            <div className={'mb-6 mt-12 grid h-full w-full grid-cols-1 gap-4 px-4 baseTablet:grid-cols-3 baseTablet:px-0'}>
               {CardsList.map(card => (
                  <div
                     key={card.key}
                     className="flex h-[24rem] w-full flex-col items-center justify-start gap-4 rounded-lg border border-slate-100 bg-white px-8 py-16 text-center">
                     <Image
                        src={card.cardImage}
                        alt={''}
                        className={''}
                        width={card.cardWidth}
                        height={card.cardHeight}
                        priority={true}
                     />
                     <h1 className={'text-[18px] font-semibold text-skin-theme-700'}>{t(card.cardTitle)}</h1>
                     <p className={'text-[15px] tracking-wide text-slate-500'}>{t(card.cardAlt)}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}
