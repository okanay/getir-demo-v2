'use client'
import { LandingLogin } from '@/components/Index-Components/Landing/LandingLogin'
import { Categories } from '@/components/Index-Components/CategoriesSection/Categories'
import { Promotions } from '@/components/Index-Components/Promotions/Promotions'
import { LoginAuthForm } from '@/components/Login-Components/LoginAuthForm'

export default function Index({ params }: { params: { locale: string } }) {
   return (
      <>
         <LandingLogin />
         <Categories />
         <Promotions />
      </>
   )
}
