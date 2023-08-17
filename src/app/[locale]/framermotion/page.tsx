'use client'
import { MouseEvent, useState } from 'react'
import { motion, useMotionValue, useMotionTemplate, useSpring } from 'framer-motion'

export default function FramerPage() {


   let xPos = useMotionValue(0)
   let yPos = useMotionValue(0)


   const handleOnMouseMove = ({clientX, clientY, currentTarget} : MouseEvent) => {
      const {left, top} = currentTarget.getBoundingClientRect()

      xPos.set(clientX - left)
      yPos.set(clientY - top)


   }
   return (
      <RadialGradientEffectContainer>
         <div onMouseMove={handleOnMouseMove} className={'h-96 w-64 rounded-3xl bg-gray-800 relative overflow-hidden'}>
            <motion.div className={'absolute inset-0'}
               style={{background : useMotionTemplate`radial-gradient(100px at ${xPos}px ${yPos}px, green, transparent)`}}
            />


         </div>
      </RadialGradientEffectContainer>
   )
}

const RadialGradientCard = () => {
   const xPos = useMotionValue(0)
   const yPos = useMotionValue(0)

   const handleOnMouseMove = ({ clientX, clientY, currentTarget }: MouseEvent) => {
      const { left, top } = currentTarget.getBoundingClientRect()

      xPos.set(clientX - left)
      yPos.set(clientY - top)
   }

   return (
      <div
         className={'group relative h-96 w-64 overflow-hidden rounded-3xl border border-transparent bg-gray-800'}
         onMouseMove={handleOnMouseMove}
      >
         <motion.div
            className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
               background: useMotionTemplate`radial-gradient(200px at ${xPos}px ${yPos}px, rgba(170, 208, 219, 0.4) 0%, transparent 100%)`,
            }}
         />
      </div>
   )
}

const RadialGradientEffectContainer = ({ children }: { children: React.ReactNode }) => {
   return (
      <main className={'mx-auto h-screen max-w-7xl bg-slate-100'}>
         <section className={'flex h-full w-full flex-col items-center justify-center'}>
            <div className={'flex h-full w-full flex-row items-center justify-center space-x-[20px]'}>
               <RadialGradientCard />
               {children}
            </div>
         </section>
      </main>
   )
}
