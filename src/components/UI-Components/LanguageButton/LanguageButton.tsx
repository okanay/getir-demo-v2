import { LanguageButtonCompound } from '@/components/UI-Components/LanguageButton/LanguageButtonCompound'
import { useDispatch } from 'react-redux'
import { setMenu } from '../../../../redux/slices/PopUpMenuSlice'

type LanguageButtonType = 'header' | 'footer'

export const LanguageButton = ({ type }: { type: LanguageButtonType }) => {
   const dispatch = useDispatch()
   const handleOnClick = () => {
      dispatch(setMenu('language'))
   }

   return (
      <LanguageButtonCompound>
         {type === 'header' && (
            <LanguageButtonCompound.HeaderButton onClick={handleOnClick}></LanguageButtonCompound.HeaderButton>
         )}
         {type === 'footer' && (
            <LanguageButtonCompound.FooterButton onClick={handleOnClick}></LanguageButtonCompound.FooterButton>
         )}
      </LanguageButtonCompound>
   )
}