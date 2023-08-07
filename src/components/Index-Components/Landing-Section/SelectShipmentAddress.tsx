import { useTranslations } from 'next-intl'
import { ChevronDownIcon, ChevronRightIcon, MapIcon, MapPinIcon } from '@heroicons/react/20/solid'
import { useDispatch } from 'react-redux'
import { setMenu } from '../../../../redux/slices/PopUpMenuSlice'

export const SelectShipmentAddress = () => {
   const t = useTranslations('Index.landing.delivery')

   const dispatch = useDispatch()
   const handleOnClick = () => {
      dispatch(setMenu('login'))
   }
   return (
      <button
         onClick={handleOnClick}
         className="flex w-full items-center justify-between border-b border-b-slate-100 bg-white px-2 py-2 baseTablet:hidden">
         <span className={'flex items-center justify-start gap-2 text-[13px] text-slate-700'}>
            <MapPinIcon className={'h-4 w-4 text-skin-theme-700'} />
            <span className={'font-semibold'}>{t('deliveryButton')}</span>
         </span>
         <ChevronRightIcon className={'h-6 w-6 text-skin-theme-700'} />
      </button>
   )
}
