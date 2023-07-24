import Image from 'next/image'
import getirMutluluk from '../../../../public/getirmutluluk.svg'
import { SelectShipmentAddress } from '@/components/Header-Components/HeroSectionLogin/SelectShipmentAddress'
import { HeroSectionForm } from '@/components/Header-Components/HeroSectionLogin/HeroSectionForm'
import { NavigationSlider } from '@/components/Header-Components/HeroSectionLogin/NavigationSlider'

export const HeroSectionLogin = () => {
   return (
      <div className={'relative flex h-full w-full flex-col font-openSans'}>
         <NavigationSlider />
         <div className="flex h-full w-full flex-col items-center justify-center bg-skin-theme-700 py-4 text-center baseTablet:hidden">
            <h1 className={'text-2xl text-yellow-400'}>getir</h1>
         </div>
         <SelectShipmentAddress />
         <div className="relative z-20 flex flex-col items-center justify-center bg-gradient-to-tr from-skin-theme-700/90 to-slate-400/20 baseTablet:h-[32rem] baseTablet:px-4 lgTablet:px-8">
            <div className="mx-auto h-full w-full max-w-7xl gap-8 baseTablet:flex baseTablet:flex-row baseTablet:items-center baseTablet:justify-between baseLaptop:px-8">
               <div className="hidden gap-12 baseTablet:flex baseTablet:flex-col baseTablet:justify-start baseTablet:text-start">
                  <Image src={getirMutluluk} alt={'getir bir mutluluk'} className={'scale-110'} priority />
                  <p className={'max-w-[400px] text-[2.3rem] font-medium leading-10 tracking-wide text-white'}>
                     Dakikalar icinde kapinizda
                  </p>
               </div>
               <HeroSectionForm />
            </div>
         </div>
      </div>
   )
}
