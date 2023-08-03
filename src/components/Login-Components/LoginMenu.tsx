'use client'

import { PopupMenuContainer } from '@/components/UI-Components/PopupMenu/PopupMenuContainer'
import { MobilePhoneAuthorization } from '@/components/UI-Components/MobilePhoneAuthorization/MobilePhoneAuthorization'
import { MenuTitleAndCloseButton } from '@/components/UI-Components/PopupMenu/MenuTitleAndCloseButton'

export const LoginMenu = () => {
   return (
      <PopupMenuContainer>
         <MenuTitleAndCloseButton locale={'UI.MobilePhoneAuth'} />
         <MobilePhoneAuthorization />
      </PopupMenuContainer>
   )
}
