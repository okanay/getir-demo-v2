import { useTranslations } from 'next-intl'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../../../redux/slices/PopUpMenuSlice'
import { XMarkIcon } from '@heroicons/react/20/solid'

export const MenuTitleAndCloseButton = ({ locale }: { locale: string }) => {
   const t = useTranslations(locale)

   const dispatch = useDispatch()
   const handleOnClose = () => {
      dispatch(closeMenu())
   }

   return (
      <div className={'relative flex w-full flex-row items-center justify-center'}>
         <h2 className={'text-[16px] font-semibold text-skin-theme-700'}>{t('title')}</h2>
         <button
            onClick={handleOnClose}
            className={'absolute right-0 flex items-center justify-center rounded-lg bg-slate-100 p-[4px]'}>
            <XMarkIcon className={'h-[24px] w-[24px]'} />
         </button>
      </div>
   )
}
