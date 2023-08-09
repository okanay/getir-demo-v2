import { Dispatch, SetStateAction, useRef } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { twMerge } from 'tailwind-merge'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { AltCategory } from '../../../../libs/types/types'
import { useRouter, useSearchParams } from 'next/navigation'
import { usePathname } from 'next-intl/client'

type TProps = {
   altCategory: AltCategory
   index: number
   selectedIndex: number
   setSelectedIndex: Dispatch<SetStateAction<number>>
}

export const AltLink = ({ altCategory, index, setSelectedIndex, selectedIndex }: TProps) => {
   const router = useRouter()
   const ref = useRef<HTMLButtonElement | null>(null)

   const handleLinkButtonClick = () => {
      setSelectedIndex(index)

      const targetUrl = ref?.current?.getAttribute('data-target-url') || '#'

      router.push(targetUrl, {
         scroll: true,
      })
   }

   return (
      <button
         key={nanoid()}
         ref={ref}
         onClick={handleLinkButtonClick}
         data-target-url={altCategory.url}
         className={'flex w-fit flex-shrink-0 baseTablet:w-full baseTablet:flex-row baseTablet:px-2'}>
         <span className={'flex w-full items-center justify-start gap-2'}>
            <div className={'hidden h-8 w-8 baseTablet:block'} />
            <h6
               className={twMerge(
                  'rounded border border-gray-200 bg-white px-2 py-1 text-[12px] font-semibold text-skin-theme-700 baseTablet:rounded-none baseTablet:border-0 baseTablet:bg-transparent baseTablet:px-0 baseTablet:py-0 baseTablet:py-0 baseTablet:text-[14px] baseTablet:text-slate-600',
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
      </button>
   )
}