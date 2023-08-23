import { ReactNode } from 'react'

import { PaymentFooter } from '@/components/Payment-Page-Components/PaymentFooter'
import { PaymentHeader } from '@/components/Payment-Page-Components/PaymentHeader'

type TProps = {
   children: ReactNode
}

function PaymentLayout({ children }: TProps) {
   return (
      <div className={'max-screen-all-devices-types flex flex-col'}>
         <PaymentHeader />
         {children}
         <PaymentFooter />
      </div>
   )
}

export default PaymentLayout
