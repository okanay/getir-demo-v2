import { useTranslations } from 'next-intl'
import { FlagIcon } from 'react-flag-kit'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export const MobilePhoneAuthorization = () => {
   const t = useTranslations('Index.landing')

   return (
      <form className="flex w-full flex-col items-center justify-center gap-2 baseTablet:w-[25rem]">
         <div className={'flex w-full items-center gap-2'}>
            <button className="flex w-32 items-center justify-between rounded border-2 border-slate-200 bg-white py-4 pl-2 pr-1 transition-colors duration-200 hover:border-skin-theme-700 baseTablet:rounded-lg baseTablet:px-2 baseTablet:py-4">
               <span className={'flex items-center gap-2 text-[14px]'}>
                  <FlagIcon code="TR" size={16} />
                  <span>+90</span>
               </span>
               <ChevronDownIcon className={'h-6 w-6 text-skin-theme-700'} />
            </button>
            <input
               type="text"
               className="w-full rounded border-2 border-gray-200 px-2 py-4 transition-colors duration-200 hover:border-skin-theme-700 baseTablet:rounded-lg baseTablet:py-4"
               placeholder={t('phonePlaceholder')}
            />
         </div>
         <button
            type={'button'}
            className="group w-full rounded border border-gray-200 bg-yellow-400 py-4 text-center text-[14px] text-skin-theme-700 transition-colors duration-200 hover:bg-skin-theme-700 hover:text-yellow-400 baseTablet:rounded-lg">
            {t('loginButton')}
         </button>
      </form>
   )
}
