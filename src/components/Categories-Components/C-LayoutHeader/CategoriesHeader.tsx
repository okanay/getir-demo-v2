import Image from 'next/image'
import Link from 'next/link'

export const CategoriesHeader = () => {
   return (
      <div className="flex h-full w-full bg-skin-theme-700 py-[24px]">
         <div className={'mx-auto flex h-full w-full max-w-7xl flex-col items-center baseTablet:items-start baseTablet:px-8'}>
            <Link href={'/'}>
               <Image
                  src={'/images/LandingImages/getir.svg'}
                  alt={''}
                  className={'baseTablet:scale-125'}
                  priority={true}
                  width={49}
                  height={23}
               />
            </Link>
         </div>
      </div>
   )
}
