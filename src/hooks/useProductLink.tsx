import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { usePathname } from 'next-intl/client'

export const useProductLink = (url: string) => {
   const pathname = usePathname()
   const router = useRouter()
   const searchParams = useSearchParams()
   const c = searchParams.get('c')

   const customPathname = pathname + '?c=' + c
   const initialMatch = customPathname === url

   const [open, setOpen] = useState<boolean>(initialMatch)

   useEffect(() => {
      setOpen(customPathname === url)
   }, [pathname, setOpen, url, customPathname])

   return { open, setOpen, router, pathname, customPathname }
}
