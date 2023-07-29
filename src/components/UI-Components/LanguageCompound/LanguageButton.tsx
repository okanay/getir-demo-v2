import { LanguageCompoundButton } from '@/components/UI-Components/LanguageCompound/LanguageCompoundButton'
import { useDispatch } from 'react-redux'
import { setLanguageMenuStatus } from '../../../../redux/slices/LanguageMenuSlice'

type LanguageButtonType = 'header' | 'footer'

export const LanguageButton = ({ type }: { type: LanguageButtonType }) => {
   const dispatch = useDispatch()
   const handleOnClick = () => {
      dispatch(setLanguageMenuStatus(true))

      const body: any = document.querySelector('body')
      body.classList.add('overflow-hidden')
   }

   return (
      <LanguageCompoundButton>
         {type === 'header' && (
            <LanguageCompoundButton.HeaderButton onClick={handleOnClick}></LanguageCompoundButton.HeaderButton>
         )}
         {type === 'footer' && (
            <LanguageCompoundButton.FooterButton onClick={handleOnClick}></LanguageCompoundButton.FooterButton>
         )}
      </LanguageCompoundButton>
   )
}
