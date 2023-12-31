import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import Link from 'next/link'

import { useEffect, useState } from 'react'
import { useMediaQuery } from '@mantine/hooks'
import { nanoid } from '@reduxjs/toolkit'
import { useTranslations } from 'next-intl'

import { FooterNavItems } from '../../../../libs/constants/FooterNavigationList'

export const FooterNavigationItem = ({ data, index }: { data: FooterNavItems; index: number }) => {
   const t = useTranslations('Footer.Navigations')

   const matches = useMediaQuery('(min-width: 760px)')
   const [isOpen, setIsOpen] = useState(false)
   const [initialState, setInitialState] = useState(true)
   const isRight = (index + 1) % 2 === 1

   const handleOnClick = () => {
      if (matches) return
      setIsOpen(!isOpen)
   }

   useEffect(() => {
      if (matches) setIsOpen(true)
   }, [matches])

   useEffect(() => {
      if (index !== 0 && !matches) setIsOpen(false)
      else if (index === 0 && !matches) setIsOpen(true)
   }, [matches])

   useEffect(() => {
      setInitialState(false)
   }, [])

   return (
      <div className={`flex w-full flex-col items-start justify-start desktop:col-span-2`}>
         <div className={'mb-4 flex w-full items-center justify-between'}>
            <h4
               className={`w-full text-[18px] text-skin-theme-700 ${
                  isRight ? 'text-start baseTablet:text-end lgTablet:text-start' : 'text-start'
               }`}>
               {t(data.title)}
            </h4>
            <button onClick={handleOnClick} className={'block rounded-lg bg-gray-100 p-1 baseTablet:hidden'}>
               <ChevronDownIcon
                  className={`relative h-5 w-5 ${
                     isOpen ? 'rotate-180' : 'rotate-360'
                  } text-skin-theme-700 transition-all duration-500`}
               />
            </button>
         </div>
         <motion.div
            className={`relative flex w-full origin-top flex-col items-start gap-4 overflow-hidden text-start`}
            initial={{ height: initialState ? (isOpen ? 176 : 0) : 0 }}
            animate={{ height: isOpen ? 176 : 0 }}
            transition={{ delay: 0, ease: 'linear', duration: initialState ? 0 : matches ? 0 : 0.4 }}>
            {data.links.map(link => (
               <h6
                  key={nanoid()}
                  className={`w-full text-[14px] text-black ${
                     isRight ? 'text-start baseTablet:text-end lgTablet:text-start' : 'text-start'
                  }`}>
                  <Link href={link.url}>{t(link.languageCode)}</Link>
               </h6>
            ))}
         </motion.div>
      </div>
   )
}
