import { PlusIcon } from '@heroicons/react/20/solid'

export const ProductLoadingContainer = () => {
   const getRandomNumber = (max: number, min: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + max
   }

   const randomBigWidth = getRandomNumber(85, 70)
   const randomRegularWidth = getRandomNumber(60, 40)
   const randomSmallWidth = getRandomNumber(30, 15)

   return (
      <div className={'grid h-[210px] w-full grid-rows-2 bg-white'}>
         <div className={'relative row-span-1 flex h-full w-full flex-col items-center justify-center'}>
            <div className={'mt-4 h-[96px] w-[96px] animate-pulse rounded-full bg-gray-200'}></div>
            <div className={'absolute right-1.5 top-1.5 h-[32px] w-[32px] rounded-lg border border-gray-200 bg-slate-300'}>
               <PlusIcon className={'w-full p-1 text-white '} />
            </div>
         </div>
         <div className={'row-span-1 flex h-full w-full flex-col items-center justify-center gap-2 px-4'}>
            <div style={{ width: '90%' }} className={`h-4 rounded bg-slate-200`}></div>
            <div style={{ width: '60%' }} className={`h-4 animate-pulse rounded bg-slate-400`}></div>
            <div style={{ width: '30%' }} className={`h-4 rounded bg-slate-200`}></div>
         </div>
      </div>
   )
}
