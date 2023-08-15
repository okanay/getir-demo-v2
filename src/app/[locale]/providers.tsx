'use client'

import React from 'react'

import { Provider as ReduxProvider } from 'react-redux'
import { SessionProvider as NextAuthProvider } from 'next-auth/react'

import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../../../redux/store'

export const Providers = ({ children }: { children: React.ReactNode }) => {
   return (
      <NextAuthProvider>
         <PersistGate persistor={persistor}>
            <ReduxProvider store={store}>{children}</ReduxProvider>
         </PersistGate>
      </NextAuthProvider>
   )
}
