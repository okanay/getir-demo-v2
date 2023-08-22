import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'
import GetirIcon from '../../../../public/images/LandingImages/getir.svg'
import { HeaderShopList } from '@/components/Categories-Page-Components/CategoriesHeader/HeaderShopList'

export const HeaderGetirIcon = () => {
   return (
      <div className="relative flex h-[64px] w-full flex-col items-center justify-center bg-skin-theme-700 baseTablet:h-[72px]">
         <div className={'absolute flex w-full max-w-7xl flex-row items-center justify-between px-4 baseTablet:px-8'}>
            <Bars3Icon className={'h-[23px] w-[49px] bg-transparent text-white baseTablet:hidden'}></Bars3Icon>

            <Link href={'/'}>
               <Image src={GetirIcon} alt={''} priority={true} className={'baseTablet:scale-125'} />
            </Link>
            <MagnifyingGlassIcon className={'h-[23px] w-[49px] bg-transparent text-white baseTablet:hidden'} />
            <HeaderShopList />
         </div>
      </div>
   )
}
