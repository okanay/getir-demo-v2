import { FooterNavigationItem } from '@/components/Index-Components/Footer-Components/FooterNavigationItem'
import { nanoid } from '@reduxjs/toolkit'
import { FooterNavigationList } from '../../../../libs/constants/FooterNavigationList'

export const FooterNavItems = () => {
   return FooterNavigationList.data.map((data, index) => <FooterNavigationItem data={data} key={nanoid()} index={index} />)
}
