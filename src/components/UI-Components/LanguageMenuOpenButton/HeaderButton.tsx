import { useTranslations } from 'next-intl'
import { ButtonTypeElement } from '../../../../libs/types/types'

export function HeaderButton({ className = '', ...props }: ButtonTypeElement) {
   const t = useTranslations('Header.Options')

   return (
      <button {...props} className={'flex items-center justify-start gap-2.5' + className}>
         <svg
            data-testid="icon"
            name="global"
            width="16"
            height="16"
            fill="#DBDBFF"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="">
            <path
               d="M16 0c-8.873 0-16 7.127-16 16s7.127 16 16 16c8.873 0 16-7.127 16-16s-7.127-16-16-16zM28.945 14.545h-5.818c-0.291-4.073-1.6-7.855-3.927-11.2 5.236 1.309 9.164 5.818 9.745 11.2zM20.218 14.545h-8.436c0.291-3.927 1.745-7.709 4.218-10.764 2.473 3.055 3.927 6.836 4.218 10.764zM12.655 3.345c-2.182 3.345-3.491 7.127-3.782 11.2h-5.818c0.582-5.382 4.509-9.891 9.6-11.2zM3.055 17.455h5.818c0.291 4.073 1.6 7.855 3.927 11.2-5.236-1.309-9.164-5.818-9.745-11.2zM16 28.218c-2.473-3.2-3.927-6.836-4.218-10.764h8.582c-0.436 3.927-1.891 7.709-4.364 10.764zM19.345 28.655c2.182-3.345 3.636-7.127 3.927-11.2h5.818c-0.727 5.382-4.655 9.891-9.745 11.2z"
               className=""></path>
         </svg>
         <p className={'hidden baseLaptop:block'}>{t('selectedLanguage')}</p>
      </button>
   )
}
