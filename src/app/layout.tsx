import { ReactNode } from 'react'
import './[locale]/globals.css'

type Props = {
   children: ReactNode
}
export default function RootLayout({ children }: Props) {
   return children
}
