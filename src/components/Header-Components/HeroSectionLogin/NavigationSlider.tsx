'use client'

import { useEffect, useState } from 'react'
import { useAnimate } from 'framer-motion'

import Image1 from '../../../../public/getir-mainpage-1.jpg'
import Image2 from '../../../../public/getir-mainpage-2.jpg'
import Image3 from '../../../../public/getir-mainpage-3.jpg'
import Image4 from '../../../../public/getir-mainpage-4.jpg'
import Image from 'next/image'

export const NavigationSlider = () => {
   const [index, setIndex] = useState(0)
   const [duration, setDuration] = useState(0.4)
   const [scope, animate] = useAnimate()

   useEffect(() => {
      animate(scope.current, { x: index * -12.5 + '%' }, { ease: 'linear', duration: duration })
   }, [index])

   useEffect(() => {
      const nextIndex = () => {
         if (index <= 3) {
            setDuration(0.4)
            setIndex(index + 1)
         } else {
            setDuration(0)
            setIndex(0)
         }
      }

      const animateTimeout = setTimeout(nextIndex, index === 0 ? 1000 : 4000)

      return () => {
         clearTimeout(animateTimeout)
      }
   }, [index])

   return (
      <div className={'absolute z-10 hidden h-full w-screen overflow-hidden baseTablet:block'}>
         <div ref={scope} className="absolute flex h-full w-[800%] overflow-hidden">
            <Image src={Image1} alt={'image-1'} priority className="h-full w-screen object-cover object-center" />
            <Image src={Image2} alt={'image-2'} priority className="h-full w-screen object-cover object-center" />
            <Image src={Image3} alt={'image-3'} priority className="h-full w-screen object-cover object-center" />
            <Image src={Image4} alt={'image-4'} priority className="h-full w-screen object-cover object-center" />
            <Image src={Image1} alt={'image-1'} priority className="h-full w-screen object-cover object-center" />
            <Image src={Image2} alt={'image-2'} priority className="h-full w-screen object-cover object-center" />
            <Image src={Image3} alt={'image-3'} priority className="h-full w-screen object-cover object-center" />
            <Image src={Image4} alt={'image-4'} priority className="h-full w-screen object-cover object-center" />
         </div>
      </div>
   )
}
