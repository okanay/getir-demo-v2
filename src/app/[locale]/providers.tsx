'use client'

import React from 'react'

import { Provider as ReduxProvider, useSelector } from 'react-redux'
import { SessionProvider as NextAuthProvider } from 'next-auth/react'

import store from '../../../redux/store'

export const Providers = ({ children }: { children: React.ReactNode }) => {
   return (
      <NextAuthProvider>
         <ReduxProvider store={store}>{children}</ReduxProvider>
      </NextAuthProvider>
   )
}
