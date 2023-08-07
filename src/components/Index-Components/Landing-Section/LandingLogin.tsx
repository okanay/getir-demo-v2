import Image from 'next/image'
import { SelectShipmentAddress } from '@/components/Index-Components/Landing-Section/SelectShipmentAddress'
import { LoginAuthForm } from '@/components/Login-Components/LoginAuthForm'
import { LandingSlider } from '@/components/Index-Components/Landing-Section/LandingSlider'
import { useTranslations } from 'next-intl'
import { FlagIcon } from 'react-flag-kit'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export const LandingLogin = () => {
   const t = useTranslations('Index.landing')

   return (
      <section id={'hero-section-login'} className={'relative h-full w-full baseTablet:h-[32rem]'}>
         <LandingSlider />
         <div className="flex h-full w-full flex-col items-center justify-center bg-skin-theme-700 py-6 text-center baseTablet:hidden">
            <Image src={'images/LandingImages/getir.svg'} alt={''} className={''} priority={true} width={49} height={23} />
         </div>
         <SelectShipmentAddress />

         <div className="relative inset-0 z-40 h-full w-full baseTablet:absolute">
            <div className="mx-auto flex h-full w-full max-w-7xl flex-row baseTablet:flex-row baseTablet:items-center baseTablet:justify-between baseTablet:px-8">
               <div className="hidden gap-12 baseTablet:flex baseTablet:flex-col baseTablet:justify-start baseTablet:text-start">
                  <Image src={t('image')} width={160} height={161} alt={'getir bir mutluluk'} className={'scale-110'} priority />
                  <p className={'max-w-[460px] text-[36px] leading-10 tracking-wide text-white'}>{t('title')}</p>
               </div>
               <div className="flex w-full flex-col items-center justify-center bg-gradient-to-tr from-gray-200 via-gray-100 to-gray-200 p-4 text-center text-[16px] font-semibold drop-shadow baseTablet:w-fit baseTablet:rounded-lg baseTablet:px-5 baseTablet:py-6">
                  <h2 className={'mb-4 text-[16px] text-skin-theme-800'}>{t('loginOrRegister')}</h2>
                  <LoginAuthForm />
               </div>
            </div>
         </div>
      </section>
   )
}
