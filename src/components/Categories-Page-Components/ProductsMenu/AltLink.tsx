import { Dispatch, SetStateAction } from 'react'
import { AltCategory } from '../../../../libs/types/types'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

type TProps = {
   altCategory: AltCategory
   index: number
   selectedIndex: number
   setSelectedIndex: Dispatch<SetStateAction<number>>
}

export const AltLink = ({ altCategory, index, setSelectedIndex, selectedIndex }: TProps) => {
   const handleLinkButtonClick = () => {
      setSelectedIndex(index)
   }

   return (
      <Link
         href={altCategory.url}
         onClick={handleLinkButtonClick}
         className={'flex w-fit flex-shrink-0 baseTablet:w-full baseTablet:flex-row baseTablet:px-2'}>
         <span className={'flex w-full items-center justify-start gap-2'}>
            <div className={'hidden h-8 w-8 baseTablet:block'} />
            <h6
               className={twMerge(
                  'rounded border border-gray-200 bg-white px-2 py-1 text-[12px] font-semibold text-skin-theme-700 ' +
                     'baseTablet:rounded-none baseTablet:border-0 baseTablet:bg-transparent baseTablet:px-0 baseTablet:py-0 baseTablet:py-0 baseTablet:text-[14px] baseTablet:text-slate-600',
                  index === selectedIndex && 'border-skin-theme-600 bg-skin-theme-700 text-white',
               )}>
               {altCategory.languageCode}
            </h6>
         </span>
         <ChevronRightIcon
            className={twMerge(
               'mr-0.5 hidden h-[20px] w-[20px] text-gray-400 baseTablet:block',
               index !== selectedIndex && 'baseTablet:hidden',
            )}
         />
      </Link>
   )
}
