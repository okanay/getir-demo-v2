'use client'

import { useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'

type TProps = {
   languageCode: string
   className?: string
}
export const ProductMenuItemText = ({ className, languageCode }: TProps) => {
   const t = useTranslations('Index.categories')
   return <h4 className={twMerge('', className)}>{t('categoriesItems.' + languageCode)}</h4>
}
