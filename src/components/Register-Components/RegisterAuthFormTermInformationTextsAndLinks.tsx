import Link from 'next/link'
import React from 'react'

export const RegisterAuthFormTermInformationTextsAndLinks = ({ t }: { t: any }) => {
   return (
      <p className={'text-start text-[12px] font-normal text-gray-400'}>
         <span>{t('information.info-first')}</span>
         <Link href={'/'} className={'font-semibold text-skin-theme-700 underline'}>
            {t('information.link-first')}
         </Link>
         <span>{t('information.info-second')}</span>
         <Link href={'/'} className={'font-semibold text-skin-theme-700 underline'}>
            {t('information.link-second')}
         </Link>
         <span>{t('information.info-third')}</span>
      </p>
   )
}
