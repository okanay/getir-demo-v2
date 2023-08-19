'use client'

import { ReactNode } from 'react'

type TProps = {
   children: ReactNode
}

export const PageContainer = ({ children }: TProps) => {
   return <main className={'h-full w-full bg-white font-openSans'}>{children}</main>
}
