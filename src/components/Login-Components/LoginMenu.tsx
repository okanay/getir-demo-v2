'use client'
import Link from 'next/link'

import { PopupMenuContainer } from '@/components/UI-Components/PopupMenu/PopupMenuContainer'
import { MobilePhoneAuthorization } from '@/components/UI-Components/MobilePhoneAuthorization/MobilePhoneAuthorization'
import { MenuTitleAndCloseButton } from '@/components/UI-Components/PopupMenu/MenuTitleAndCloseButton'
import { useTranslations } from 'next-intl'

export const LoginMenu = () => {
   const t = useTranslations('UI.MobilePhoneAuth')

   return (
      <PopupMenuContainer>
         <div className="relative flex h-screen w-full flex-col items-center justify-start gap-4 bg-white px-4 py-8 baseTablet:h-fit baseTablet:w-[28rem] baseTablet:justify-center baseTablet:rounded-t-lg">
            <MenuTitleAndCloseButton locale={'UI.MobilePhoneAuth'} />
            <MobilePhoneAuthorization />
            <p className={'w-full pt-2 text-start text-[12px] font-normal text-gray-400'}>
               {t('information.text')}
               <Link href={'/'} className={'font-semibold text-skin-theme-700 underline'}>
                  {t('information.link')}
               </Link>
            </p>
            <div
               className={
                  'absolute bottom-0 z-[203] flex h-14 w-full flex-col items-center justify-center gap-1 rounded-b-lg border-t border-gray-200 bg-gray-100 text-[14px] font-normal text-gray-600 baseTablet:translate-y-full'
               }>
               <div className={'flex flex-row gap-1'}>
                  <span> {t('sign.text')}</span>
                  <button className={'font-semibold text-skin-theme-700'}> {t('sign.button')}</button>
               </div>
            </div>
         </div>
      </PopupMenuContainer>
   )
}
