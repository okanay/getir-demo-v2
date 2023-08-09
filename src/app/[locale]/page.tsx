import { Landing } from '@/components/Index-Components/Landing-Section/Landing'
import { Categories } from '@/components/Index-Components/Categories-Section/Categories'
import { Promotions } from '@/components/Index-Components/Promotions-Section/Promotions'

export default function Index() {
   return (
      <main>
         <Landing />
         <Categories />
         <Promotions />
      </main>
   )
}
