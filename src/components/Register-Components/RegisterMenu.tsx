import { useTranslations } from 'next-intl'
import { MenuTitleAndCloseButton } from '@/components/Menus-Components/MenuTitleAndCloseButton'
import { RegisterAuthForm } from '@/components/Register-Components/RegisterAuthForm'
import { useDispatch } from 'react-redux'
import { setMenu } from '../../../redux/slices/PopUpMenuSlice'

export function RegisterMenu() {
   const t = useTranslations('Menus.RegisterMenu')

   const dispatch = useDispatch()
   const handleOpenLoginMenu = () => dispatch(setMenu('login'))

   return (
      <div className="relative flex h-full w-full flex-col items-center justify-start gap-4 bg-white px-4 py-8 baseTablet:h-fit baseTablet:w-[28rem] baseTablet:justify-center baseTablet:rounded-t-lg">
         <MenuTitleAndCloseButton locale={'Menus.RegisterMenu'} />
         <RegisterAuthForm />
         <div className="pointer-events-none absolute bottom-0 z-[203] flex h-14 w-full flex-col items-center justify-center gap-1 rounded-b-lg border-t border-gray-200 bg-gray-100 text-[14px] font-normal text-gray-600 baseTablet:translate-y-full">
            <div className={'flex flex-row gap-1'}>
               <span> {t('signin.text')}</span>
               <button onClick={handleOpenLoginMenu} className={'pointer-events-auto font-semibold text-skin-theme-700'}>
                  {' '}
                  {t('signin.button')}
               </button>
            </div>
         </div>
      </div>
   )
}
