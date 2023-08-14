'use client'

import { useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'

type TProps = {
   className?: string
}
export const MenuTitle = ({ className }: TProps) => {
   const t = useTranslations('Categories')
   return <h4 className={twMerge('', className)}>{t('CategoriesMenuTitle')}</h4>
}
