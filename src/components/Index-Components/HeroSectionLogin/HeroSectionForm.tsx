import { useTranslations } from 'next-intl'
import { FlagIcon } from 'react-flag-kit'
import { ArrowDownCircleIcon, ArrowDownIcon, ArrowSmallDownIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

export const HeroSectionForm = () => {
   const t = useTranslations('Index.landing')

   return (
      <form className="flex flex-col items-center justify-center gap-2 bg-gray-100 px-4 py-4 text-center text-[16px] font-semibold baseTablet:w-[25rem] baseTablet:gap-2 baseTablet:rounded-lg baseTablet:px-5 baseTablet:py-6">
         <h2 className={'text-[16px] text-skin-theme-800'}>{t('loginTitle')}</h2>
         <div className={'flex w-full items-center gap-2'}>
            <button className="flex w-32 items-center justify-between rounded border-2 border-slate-200 bg-white p-4 transition-colors duration-200 hover:border-skin-theme-700 baseTablet:rounded-lg baseTablet:px-2 baseTablet:py-4">
               <span className={'flex items-center gap-2 pl-1 text-[14px]'}>
                  <FlagIcon code="TR" size={16} />
                  <span>+90</span>
               </span>
               <ChevronDownIcon className={'relative h-5 w-5 translate-x-[20%] text-skin-theme-700'} />
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
