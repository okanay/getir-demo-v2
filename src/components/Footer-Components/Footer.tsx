'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FooterNavItems } from '@/components/Footer-Components/FooterNavItems'
import { LanguageButton } from '@/components/UI-Components/LanguageMenuOpenButton/LanguageButton'
export const Footer = () => {
   const t = useTranslations('Footer.Navigations')

   return (
      <footer className={'h-fit w-full bg-white font-openSans'}>
         <div className="mx-auto grid h-fit w-full max-w-7xl grid-cols-1 items-start gap-4 px-8 py-8 baseTablet:grid-cols-2 lgTablet:grid-cols-4 desktop:grid-cols-9">
            <div className={'flex h-full w-full flex-col items-start justify-start gap-4 desktop:col-span-2'}>
               <h4 className={'text-[18px] text-skin-theme-700'}>{t('0.title')}</h4>
               <Link href={'/'}>
                  <Image src={t('0.imageSrc1')} alt={''} width={160} height={48} className={''} />
               </Link>
               <Link href={'/'}>
                  <Image src={t('0.imageSrc2')} alt={''} width={160} height={48} className={''} />
               </Link>
               <Link href={'/'}>
                  <Image src={t('0.imageSrc3')} alt={''} width={160} height={48} className={''} />
               </Link>
            </div>
            <FooterNavItems />
            <div className="flex hidden h-fit w-fit flex-col items-start justify-start rounded-lg border border-slate-100 bg-white p-4 text-start shadow shadow-slate-100  desktop:block">
               <Image src={'/images/FooterImages/etbis.png'} alt={''} width={130} height={150} className={''} />
            </div>
         </div>
         <div className={'mx-auto max-w-7xl bg-gray-100 baseTablet:bg-white'}>
            <hr className={'my-4 w-full border-gray-200'} />
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-6 pb-4 text-center text-[13px] text-slate-600 baseTablet:flex-row baseTablet:justify-between">
               <div className="flex flex-col items-center space-y-2 baseTablet:flex-row baseTablet:space-x-2 baseTablet:space-y-0">
                  <h4>© 2023 Getir</h4>
                  <div className={'hidden h-1 w-1 space-x-2 rounded-full bg-black baseTablet:block'} />
                  <h4 className={'text-skin-theme-700'}>Information Society Services</h4>
               </div>
               <div className="flex flex-col items-center space-y-2 baseTablet:flex-row baseTablet:justify-end baseTablet:space-y-0">
                  <ul className={'flex h-full w-full flex-row items-center justify-center gap-2 baseTablet:justify-end'}>
                     <li className={'h-6 w-6 bg-white baseTablet:bg-slate-200'} />
                     <li className={'h-6 w-6 bg-white baseTablet:bg-slate-200'} />
                     <li className={'h-6 w-6 bg-white baseTablet:bg-slate-200'} />
                  </ul>
                  <LanguageButton type={'footer'} />
               </div>
            </div>
         </div>
      </footer>
   )
}
