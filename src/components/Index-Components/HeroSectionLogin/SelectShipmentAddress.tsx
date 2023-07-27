import { useTranslations } from 'next-intl'

export const SelectShipmentAddress = () => {
   const t = useTranslations('Index.landing')

   return (
      <button className="flex w-full items-center justify-between border-b border-b-slate-100 bg-white px-2 py-2 baseTablet:hidden">
         <span className={'flex items-center justify-start gap-2 text-[14px] text-slate-700'}>
            <span className={'h-4 w-4 bg-slate-200'} />
            <span>{t('deliveryButton')}</span>
         </span>
         <span className={'h-4 w-4 bg-slate-200'} />
      </button>
   )
}
