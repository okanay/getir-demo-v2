import { Landing } from '@/components/Index-Page-Components/Landing-Section/Landing'
import { Categories } from '@/components/Index-Page-Components/Categories-Section/Categories'
import { Promotions } from '@/components/Index-Page-Components/Promotions-Section/Promotions'

export default function Index() {
   return (
      <main className={'bg-white'}>
         <Landing />
         <Categories />
         <Promotions />
      </main>
   )
}
