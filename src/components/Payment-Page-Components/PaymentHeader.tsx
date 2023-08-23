import Link from 'next/link'
import Image from 'next/image'
import GetirIcon from '../../../public/images/LandingImages/getir.svg'
import { SelectShipmentAddress } from '@/components/UI-Components/SelectShipmentAddress'

export const PaymentHeader = () => {
   return (
      <>
         <div className="relative flex h-[64px] w-full flex-col items-center justify-center bg-skin-theme-700 baseTablet:h-[72px]">
            <div className={'absolute flex w-full max-w-5xl flex-row items-center justify-between px-8'}>
               <Link href={'/'}>
                  <Image src={GetirIcon} alt={''} priority={true} className={'baseTablet:scale-110'} />
               </Link>
            </div>
         </div>
         <SelectShipmentAddress />
      </>
   )
}
