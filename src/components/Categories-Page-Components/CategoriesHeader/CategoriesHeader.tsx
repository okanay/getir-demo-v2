import Image from 'next/image'
import Link from 'next/link'
import { Bars3Icon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

export const CategoriesHeader = () => {
   return (
      <div className="relative flex h-[64px] w-full flex-col items-center justify-center bg-skin-theme-700">
         <div className={'absolute flex w-full max-w-7xl flex-row items-center justify-between px-4'}>
            <MagnifyingGlassIcon
               className={'h-[23px] w-[49px] bg-transparent text-white baseTablet:hidden'}></MagnifyingGlassIcon>
            <Link href={'/'}>
               <Image src={'/images/LandingImages/getir.svg'} alt={''} priority={true} width={49} height={23} className={''} />
            </Link>
            <Bars3Icon className={'h-[23px] w-[49px] bg-transparent text-white baseTablet:hidden'}></Bars3Icon>
         </div>
      </div>
   )
}
