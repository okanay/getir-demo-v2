import { LanguageCompound } from '@/components/UI-Components/LanguageButton/LanguageCompound'
import { useDispatch } from 'react-redux'
import { setMenu } from '../../../../redux/slices/PopUpMenuSlice'

type LanguageButtonType = 'header' | 'footer'

export const LanguageButton = ({ type }: { type: LanguageButtonType }) => {
   const dispatch = useDispatch()
   const handleOnClick = () => {
      dispatch(setMenu('language'))
   }

   return (
      <LanguageCompound>
         {type === 'header' && <LanguageCompound.HeaderButton onClick={handleOnClick}></LanguageCompound.HeaderButton>}
         {type === 'footer' && <LanguageCompound.FooterButton onClick={handleOnClick}></LanguageCompound.FooterButton>}
      </LanguageCompound>
   )
}
