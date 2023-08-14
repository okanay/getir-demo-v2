'use client'

import { PointerEventHandler } from 'react'

export const CategoriesFooter = () => {
   const onPointerDown: PointerEventHandler<HTMLDivElement> = event => {
      const isOpen = event.currentTarget.getAttribute('category-open')
      event.currentTarget.setAttribute('category-open', isOpen === 'true' ? 'false' : 'true')
   }

   return (
      <>
         {/*<div*/}
         {/*    onPointerDown={onPointerDown}*/}
         {/*className={'h-20 w-40 bg-red-400 transition-all duration-500 data-[open=true]:h-40 data-[open=true]:bg-blue-400'}></div>*/}
         )
      </>
   )
}
