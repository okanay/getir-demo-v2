'use client'
import { HeroSectionLogin } from '@/components/Index-Components/HeroSectionLogin/HeroSectionLogin'
import { Categories } from '@/components/Index-Components/CategoriesSection/Categories'
import { Promotions } from '@/components/Index-Components/Promotions/Promotions'
import { MobilePhoneAuthorization } from '@/components/Index-Components/HeroSectionLogin/MobilePhoneAuthorization'

export default function Index({ params }: { params: { locale: string } }) {
   return (
      <>
         <HeroSectionLogin />
         <Categories />
         <Promotions />
      </>
   )
}
