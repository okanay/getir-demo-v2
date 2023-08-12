'use client'

import { useEffect, useState } from 'react'

import Image1 from '../../../../public/images/LandingImages/SlideImages/SlideImageFirst.jpg'
import Image2 from '../../../../public/images/LandingImages/SlideImages/SlideImageSecond.jpg'
import Image3 from '../../../../public/images/LandingImages/SlideImages/SlideImageThird.jpg'
import Image4 from '../../../../public/images/LandingImages/SlideImages/SlideImageFourth.jpg'
const images = [Image1, Image2, Image3, Image4]

import Image from 'next/image'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'

export const LandingSlider = () => {
   const [index, setIndex] = useState(0)

   useEffect(() => {
      const imageIndexTimeout = setTimeout(() => {
         setIndex(index + 1)
      }, 5000)

      return () => {
         clearTimeout(imageIndexTimeout)
      }
   }, [index])

   return (
      <MotionConfig>
         <div className="relative hidden h-[32rem] w-screen overflow-hidden baseTablet:block">
            <div className="absolute left-0 top-0 z-30 z-[9] h-full w-full overflow-hidden bg-gradient-to-tr from-skin-theme-700 to-skin-theme-900/30">
               <AnimatePresence custom={index}>
                  <motion.div
                     key={index}
                     variants={imagesAnimationVariants}
                     initial={'enter'}
                     animate={'center'}
                     exit={'exit'}
                     custom={index}
                     className={`absolute inset-0`}>
                     <div className={'absolute inset-0'}>
                        <Image src={images[index % 4]} alt={''} className={'h-full w-full object-cover'} />
                     </div>
                  </motion.div>
               </AnimatePresence>
            </div>
            <div className="absolute left-0 top-0 z-30 z-[10] h-full w-full overflow-hidden bg-gradient-to-tr from-skin-theme-700 to-skin-theme-900/30"></div>
         </div>
      </MotionConfig>
   )
}

const imagesAnimationVariants = {
   enter: (index: number) => ({
      x: index === 0 ? '0%' : '100%',
   }),
   center: { x: '0%', transition: { duration: 2 } },
   exit: { x: '-100%', transition: { duration: 2 } },
}
