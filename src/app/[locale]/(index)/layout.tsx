import { Header } from '@/components/Index-Page-Components/Header-Components/Header'
import { Footer } from '@/components/Index-Page-Components/Footer-Components/Footer'
import { ReactNode } from 'react'
import { Mainstyles } from '@/app/[locale]/mainstyles'

type TProps = {
   children: ReactNode
}

function IndexLayout({ children }: TProps) {
   return (
      <>
         <Header />
         <Mainstyles>{children}</Mainstyles>
         <Footer />
      </>
   )
}

export default IndexLayout
