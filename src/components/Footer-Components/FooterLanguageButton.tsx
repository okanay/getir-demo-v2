import { useDispatch } from 'react-redux'
import { setLanguageMenuStatus } from '../../../redux/slices/LanguageMenuSlice'

export const FooterLanguageButton = ({ t }: { t: any }) => {
   const dispatch = useDispatch()
   const handleOnClick = () => {
      dispatch(setLanguageMenuStatus(true))

      const body: any = document.querySelector('body')
      body.classList.add('overflow-hidden')
   }

   return (
      <button
         onClick={handleOnClick}
         className="flex h-8 w-fit flex-shrink-0 items-center justify-center gap-2 rounded-lg border border-slate-100 bg-white px-4 text-center baseTablet:ml-2">
         <span className="relative h-4 w-4 translate-x-0 bg-slate-400 baseTablet:-translate-x-1/4 lgTablet:translate-x-0" />
         <span className={'block baseTablet:hidden lgTablet:block'}>English (EN)</span>
      </button>
   )
}
