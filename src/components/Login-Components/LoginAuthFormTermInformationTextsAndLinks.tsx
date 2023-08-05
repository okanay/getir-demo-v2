import Link from 'next/link'
import React from 'react'

export const LoginAuthFormTermInformationTextsAndLinks = ({ t }: { t: any }) => {
   return (
      <p className={'w-full text-start text-[12px] font-normal text-gray-400'}>
         {t('information.info-first')}
         <Link href={'/'} className={'font-semibold text-skin-theme-700 underline'}>
            {t('information.link-first')}
         </Link>
      </p>
   )
}
