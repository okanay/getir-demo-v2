import { useRef } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { twMerge } from 'tailwind-merge'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { AltCategory } from '../../../../libs/types/types'
import { useRouter, useSearchParams } from 'next/navigation'
import { usePathname } from 'next-intl/client'

type TProps = {
   altCategory: AltCategory
   index: number
}

export const AltLink = ({ altCategory, index }: TProps) => {
   const router = useRouter()
   const pathname = usePathname()
   const searchParams = useSearchParams()

   const ref = useRef<HTMLButtonElement | null>(null)

   const handleLinkButtonClick = () => {
      const targetUrl = ref?.current?.getAttribute('data-target-url') || '#'
      const url = `${pathname}?${searchParams}${targetUrl}`

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
                  index === 0 && 'border-skin-theme-600 bg-skin-theme-700 text-white',
               )}>
               {altCategory.languageCode}
            </h6>
         </span>
         <ChevronRightIcon className={'mr-0.5 hidden h-[20px] w-[20px] text-gray-400'} />
      </button>
   )
}
