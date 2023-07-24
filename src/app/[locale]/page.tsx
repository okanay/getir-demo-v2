'use client'
import Lottie from 'lottie-react'
import { useDispatch, useSelector } from 'react-redux'
import { closeGift, giftSlice, selectGift } from '../../../redux/slices/SliceExample/GiftSlice'
import { XMarkIcon } from '@heroicons/react/20/solid'

import gift1 from '../../components/gift.json'
import confettie from '../../components/confettie.json'
import seriesX from '../../../public/seriesX.png'
import seriesS from '../../../public/seriesS.webp'
import iPadAir from '../../../public/ipadAir.png'
import forma from '../../../public/forma.png'

import dualsense from '../../../public/dualsense.webp'

import Image from 'next/image'
export default function Index({ params }: { params: { locale: string } }) {
   const gift = useSelector(giftSlice)
   const dispatch = useDispatch()

   const handleOnClick = (giftId: number) => {
      dispatch(selectGift({ giftId: giftId }))

      if (typeof window !== 'undefined') {
         window.scrollTo(0, 0)
      }
   }
   const handleClose = () => {
      dispatch(closeGift())
   }

   return (
      <div className={'mx-auto w-full max-w-7xl px-4'}>
         <div className={'flex flex-col items-center gap-8 pb-16 pt-8 text-center'}>
            <h1 className={'font-inconsolata text-3xl text-skin-theme-800'}>Okan Ay Hediye Tercihleri</h1>
            <div className="grid h-full w-full grid-cols-1 items-center gap-12 smTablet:grid-cols-2 baseTablet:grid-cols-3 lgTablet:grid-cols-4">
               <div
                  onClick={() => {
                     handleOnClick(1)
                  }}
                  className="mx-auto h-96 w-3/4 cursor-pointer rounded-lg border-2 border-slate-100 bg-gradient-to-b from-slate-200 to-yellow-500 shadow shadow-slate-100 transition-colors duration-300 hover:border-amber-400 smTablet:w-full">
                  <div className={'flex h-full w-full flex-col items-center justify-between text-center'}>
                     <div className={'relative flex h-48 w-full items-center justify-center overflow-hidden'}>
                        <div className="flex h-48 w-48 -translate-y-1/4 items-center justify-center rounded-full bg-yellow-400">
                           <div className={'absolute z-20 h-full w-full -translate-y-[5%] rounded-full bg-white'}></div>
                           <Lottie animationData={gift1} loop={true} className={'absolute z-30 mt-8 h-32 w-32'} />
                        </div>
                     </div>
                     <h1 className="relative -translate-y-[40%] bg-gradient-to-tr from-slate-600 to-slate-800 bg-clip-text font-gloock text-5xl font-bold text-transparent drop-shadow">
                        Destansı Hediye
                     </h1>
                     <button className="relative w-3/4 translate-y-1/2 rounded-lg border border-slate-200 bg-gradient-to-tr from-slate-100 to-slate-50 py-2 ">
                        <span className="bg-gradient-to-tr from-slate-800 to-slate-900 bg-clip-text font-jost font-bold text-transparent">
                           Hediyeyi Görüntüle
                        </span>
                     </button>
                  </div>
               </div>
               <div
                  onClick={() => {
                     handleOnClick(2)
                  }}
                  className="mx-auto h-96 w-3/4 cursor-pointer rounded-lg border-2 border-slate-100 bg-gradient-to-b from-slate-200 to-yellow-500 shadow shadow-slate-100 transition-colors duration-300 hover:border-amber-400 smTablet:w-full">
                  <div className={'flex h-full w-full flex-col items-center justify-between text-center'}>
                     <div className={'relative flex h-48 w-full items-center justify-center overflow-hidden'}>
                        <div className="flex h-48 w-48 -translate-y-1/4 items-center justify-center rounded-full bg-yellow-400">
                           <div className={'absolute z-20 h-full w-full -translate-y-[5%] rounded-full bg-white'}></div>
                           <Lottie animationData={gift1} loop={true} className={'absolute z-30 mt-8 h-32 w-32'} />
                        </div>
                     </div>
                     <h1 className="relative -translate-y-[40%] bg-gradient-to-tr from-slate-600 to-slate-800 bg-clip-text font-gloock text-5xl font-bold text-transparent drop-shadow">
                        Destansı Hediye
                     </h1>
                     <button className="relative w-3/4 translate-y-1/2 rounded-lg border border-slate-200 bg-gradient-to-tr from-slate-100 to-slate-50 py-2 ">
                        <span className="bg-gradient-to-tr from-slate-800 to-slate-900 bg-clip-text font-jost font-bold text-transparent">
                           Hediyeyi Görüntüle
                        </span>
                     </button>
                  </div>
               </div>
               <div
                  onClick={() => {
                     handleOnClick(3)
                  }}
                  className="mx-auto h-96 w-3/4 cursor-pointer rounded-lg border-2 border-slate-100 bg-gradient-to-b from-slate-200 to-purple-500 shadow shadow-slate-100 transition-colors duration-300 hover:border-purple-400 smTablet:w-full">
                  <div className={'flex h-full w-full flex-col items-center justify-between text-center'}>
                     <div className={'relative flex h-48 w-full items-center justify-center overflow-hidden'}>
                        <div className="flex h-48 w-48 -translate-y-1/4 items-center justify-center rounded-full bg-purple-400">
                           <div className={'absolute z-20 h-full w-full -translate-y-[5%] rounded-full bg-white'}></div>
                           <Lottie animationData={gift1} loop={true} className={'absolute z-30 mt-8 h-32 w-32'} />
                        </div>
                     </div>
                     <h1 className="relative -translate-y-[40%] bg-gradient-to-tr from-slate-600 to-slate-800 bg-clip-text font-gloock text-5xl font-bold text-transparent drop-shadow">
                        Efsanevi Hediye
                     </h1>
                     <button className="relative w-3/4 translate-y-1/2 rounded-lg border border-slate-200 bg-gradient-to-tr from-slate-100 to-slate-50 py-2 ">
                        <span className="bg-gradient-to-tr from-slate-800 to-slate-900 bg-clip-text font-jost font-bold text-transparent">
                           Hediyeyi Görüntüle
                        </span>
                     </button>
                  </div>
               </div>
               <div
                  onClick={() => {
                     handleOnClick(4)
                  }}
                  className="mx-auto h-96 w-3/4 cursor-pointer rounded-lg border-2 border-slate-100 bg-gradient-to-b from-slate-200 to-sky-500 shadow shadow-slate-100 transition-colors duration-300 hover:border-sky-400 smTablet:w-full">
                  <div className={'flex h-full w-full flex-col items-center justify-between text-center'}>
                     <div className={'relative flex h-48 w-full items-center justify-center overflow-hidden'}>
                        <div className="flex h-48 w-48 -translate-y-1/4 items-center justify-center rounded-full bg-sky-400">
                           <div className={'absolute z-20 h-full w-full -translate-y-[5%] rounded-full bg-white'}></div>
                           <Lottie animationData={gift1} loop={true} className={'absolute z-30 mt-8 h-32 w-32'} />
                        </div>
                     </div>
                     <h1 className="relative -translate-y-[40%] bg-gradient-to-tr from-slate-600 to-slate-800 bg-clip-text font-gloock text-5xl font-bold text-transparent drop-shadow">
                        Kıymetli Hediye
                     </h1>
                     <button className="relative w-3/4 translate-y-1/2 rounded-lg border border-slate-200 bg-gradient-to-tr from-slate-100 to-slate-50 py-2 ">
                        <span className="bg-gradient-to-tr from-slate-800 to-slate-900 bg-clip-text font-jost font-bold text-transparent">
                           Hediyeyi Görüntüle
                        </span>
                     </button>
                  </div>
               </div>
               <div
                  onClick={() => {
                     handleOnClick(5)
                  }}
                  className="mx-auto h-96 w-3/4 cursor-pointer rounded-lg border-2 border-slate-100 bg-gradient-to-b from-slate-200 to-emerald-500 shadow shadow-slate-100 transition-colors duration-300 hover:border-emerald-400 smTablet:w-full">
                  <div className={'flex h-full w-full flex-col items-center justify-between text-center'}>
                     <div className={'relative flex h-48 w-full items-center justify-center overflow-hidden'}>
                        <div className="flex h-48 w-48 -translate-y-1/4 items-center justify-center rounded-full bg-emerald-400">
                           <div className={'absolute z-20 h-full w-full -translate-y-[5%] rounded-full bg-white'}></div>
                           <Lottie animationData={gift1} loop={true} className={'absolute z-30 mt-8 h-32 w-32'} />
                        </div>
                     </div>
                     <h1 className="relative -translate-y-[40%] bg-gradient-to-tr from-slate-600 to-slate-800 bg-clip-text font-gloock text-5xl font-bold text-transparent drop-shadow">
                        Sıradan Hediye
                     </h1>
                     <button className="relative w-3/4 translate-y-1/2 rounded-lg border border-slate-200 bg-gradient-to-tr from-slate-100 to-slate-50 py-2 ">
                        <span className="bg-gradient-to-tr from-slate-800 to-slate-900 bg-clip-text font-jost font-bold text-transparent">
                           Hediyeyi Görüntüle
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </div>

         {gift.selected && (
            <div className={'absolute inset-0 top-0 z-40 flex items-center justify-center'}>
               <div className="flex h-72 w-96 flex-col items-center justify-center border-2 border-slate-200 bg-gradient-to-tr from-sky-100/95 to-sky-400/95 drop-shadow">
                  <Lottie animationData={confettie} loop={true} className={'absolute z-50 h-full w-full'} />
                  {gift.giftId === 1 && (
                     <Image src={seriesX} alt={''} priority className={'absolute z-40 h-64 w-64 object-cover'} />
                  )}
                  {gift.giftId === 2 && (
                     <Image src={iPadAir} alt={''} priority className={'absolute z-40 h-64 w-64 object-cover'} />
                  )}
                  {gift.giftId === 3 && (
                     <Image src={seriesS} alt={''} priority className={'absolute z-40 h-64 w-64 object-cover'} />
                  )}
                  {gift.giftId === 4 && (
                     <Image src={dualsense} alt={''} priority className={'absolute z-40 h-64 w-64 object-cover'} />
                  )}
                  {gift.giftId === 5 && (
                     <Image src={forma} alt={''} priority className={'absolute z-40 h-64 w-64 object-contain object-top'} />
                  )}
                  <XMarkIcon
                     onClick={handleClose}
                     className="absolute right-2.5 top-2 z-[60] h-6 w-6 cursor-pointer rounded-full bg-gradient-to-r from-slate-400 to-slate-300 text-slate-800 ring-2 ring-slate-200"
                  />
               </div>
            </div>
         )}
      </div>
   )
}
