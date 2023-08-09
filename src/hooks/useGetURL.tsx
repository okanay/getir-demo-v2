import { useEffect, useRef } from 'react'

export const useGetURL = () => {
   const urlRef = useRef<string>('')

   useEffect(() => {
      urlRef.current = window.location.href
   }, [])

   return { urlRef }
}
