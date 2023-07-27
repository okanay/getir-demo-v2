import Image from 'next/image'
import getirMutluluk from '../../../../public/images/HeroLoginImages/getir-mutluluk-en.svg'
import { SelectShipmentAddress } from '@/components/Index-Components/HeroSectionLogin/SelectShipmentAddress'
import { HeroSectionForm } from '@/components/Index-Components/HeroSectionLogin/HeroSectionForm'
import { NavigationSlider } from '@/components/Index-Components/HeroSectionLogin/NavigationSlider'
import { useTranslations } from 'next-intl'

export const HeroSectionLogin = () => {
   const t = useTranslations('Index.landing')

   return (
      <section
         id={'hero-section-login'}
         className={'relative flex h-full w-full flex-col overflow-x-hidden font-openSans font-medium'}>
         <NavigationSlider />
         <div className="flex h-full w-full flex-col items-center justify-center bg-skin-theme-700 py-4 text-center baseTablet:hidden">
            <h1 className={'text-2xl text-yellow-400'}>getir</h1>
         </div>
         <SelectShipmentAddress />
         <div className=" relative z-20 flex flex-col items-center justify-center bg-gradient-to-tr from-skin-theme-700/90 to-slate-400/20 baseTablet:h-[32rem] baseTablet:px-4 lgTablet:px-8">
            <div className="mx-auto h-full w-full max-w-7xl gap-8 baseTablet:flex baseTablet:flex-row baseTablet:items-center baseTablet:justify-between baseLaptop:px-8">
               <div className="hidden gap-12 baseTablet:flex baseTablet:flex-col baseTablet:justify-start baseTablet:text-start">
                  <Image src={t('image')} width={160} height={160} alt={'getir bir mutluluk'} className={'scale-110'} priority />
                  <p className={'max-w-[460px] text-[36px] leading-10 tracking-wide text-white'}>{t('title')}</p>
               </div>
               <HeroSectionForm />
            </div>
         </div>
      </section>
   )
}
