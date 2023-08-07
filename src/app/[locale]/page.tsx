'use client'
import { LandingLogin } from '@/components/Index-Components/Landing-Section/LandingLogin'
import { Categories } from '@/components/Index-Components/Categories-Section/Categories'
import { Promotions } from '@/components/Index-Components/Promotions-Section/Promotions'
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
