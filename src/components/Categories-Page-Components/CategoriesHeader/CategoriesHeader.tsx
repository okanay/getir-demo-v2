import Image from 'next/image'
import Link from 'next/link'
import { Bars3Icon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { HeaderGetirIcon } from '@/components/Categories-Page-Components/CategoriesHeader/HeaderGetirIcon'
import { SelectShipmentAddress } from '@/components/UI-Components/SelectShipmentAddress'

export const CategoriesHeader = () => {
   return (
      <>
         <HeaderGetirIcon />
         <SelectShipmentAddress />
      </>
   )
}
