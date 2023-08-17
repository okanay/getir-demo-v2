import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'

export const HeaderGetirIcon = () => {
   return (
      <div className="relative flex h-[64px] w-full flex-col items-center justify-center bg-skin-theme-700 baseTablet:h-[72px]">
         <div className={'absolute flex w-full max-w-7xl flex-row items-center justify-between px-4 baseTablet:px-8'}>
            <MagnifyingGlassIcon
               className={'h-[23px] w-[49px] bg-transparent text-white baseTablet:hidden'}
            ></MagnifyingGlassIcon>
            <Link href={'/'}>
               <Image
                  src={'/images/LandingImages/getir.svg'}
                  alt={''}
                  priority={true}
                  width={49}
                  height={23}
                  className={'baseTablet:scale-125'}
               />
            </Link>
            <Bars3Icon className={'h-[23px] w-[49px] bg-transparent text-white baseTablet:hidden'}></Bars3Icon>
         </div>
      </div>
   )
}
