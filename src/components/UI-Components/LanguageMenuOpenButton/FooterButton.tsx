import { useTranslations } from 'next-intl'
import { GlobeAltIcon } from '@heroicons/react/20/solid'
import { ButtonTypeElement } from '../../../../libs/types/types'
export function FooterButton({ className = '', ...props }: ButtonTypeElement) {
   const t = useTranslations('Header.Options')

   return (
      <button
         {...props}
         className={
            'flex h-8 w-fit flex-shrink-0 items-center justify-center gap-2 rounded-lg border border-slate-100 bg-white px-4 text-center transition-colors duration-300 hover:bg-skin-theme-100 baseTablet:ml-2' +
            className
         }
      >
         <GlobeAltIcon className="relative h-4 w-4 translate-x-0 text-slate-400 baseTablet:-translate-x-1/4 lgTablet:translate-x-0" />
         <span className={'block baseTablet:hidden lgTablet:block'}>{t('selectedLanguage')}</span>
      </button>
   )
}
