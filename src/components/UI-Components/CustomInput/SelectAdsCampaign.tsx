import { CheckIcon } from '@heroicons/react/20/solid'
import { useTranslations } from 'next-intl'

type Props = {
   adsCampaign: boolean
   setAdsCampaign: (newBoolean: boolean) => void
}

export const SelectAdsCampaign = ({ adsCampaign, setAdsCampaign }: Props) => {
   const t = useTranslations('Menus.CustomInput.SelectAdsCampaign')

   const handleOnClick = () => {
      setAdsCampaign(!adsCampaign)
   }

   return (
      <div className={'flex w-full flex-col justify-center'}>
         <div className={'pointer-events-none flex flex-row items-center justify-center gap-2.5'}>
            <div onClick={handleOnClick} className={`pointer-events-auto h-6 w-6 cursor-pointer`}>
               {adsCampaign ? (
                  <CheckIcon className={'h-6 w-6 rounded border-2 border-skin-theme-700 bg-skin-theme-700 text-white'} />
               ) : (
                  <div className={'h-6 w-6 rounded border-2 border-gray-200 bg-white'} />
               )}
            </div>
            <p className={'w-full text-[12px] font-normal leading-[20px] text-gray-400'}>{t('text')}</p>
         </div>
      </div>
   )
}
