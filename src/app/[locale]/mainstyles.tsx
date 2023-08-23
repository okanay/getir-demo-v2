'use client'

import { ReactNode } from 'react'

type TProps = {
   children: ReactNode
}

export const Mainstyles = ({ children }: TProps) => {
   return <main className={'h-full w-full bg-white font-openSans'}>{children}</main>
}
