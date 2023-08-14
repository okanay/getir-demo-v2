import { PlusIcon } from '@heroicons/react/20/solid'
import { nanoid } from '@reduxjs/toolkit'

export const LoadingItems = () => {
   return (
      <div className="flex h-full w-full w-full flex-col items-start justify-start gap-2">
         <div className={'h-4 w-[200px] animate-pulse bg-slate-400/40'} />
         <div className="grid h-fit w-full grid-cols-2 gap-[1px] rounded-lg bg-gray-100 smTablet:grid-cols-3 baseLaptop:grid-cols-4">
            <DummyDataRender copyCount={12} />
         </div>
      </div>
   )
}

export const ProductItemSkeleton = () => {
   return (
      <article className={'grid h-[210px] w-full grid-rows-2 bg-white'}>
         <div className={'relative row-span-1 flex h-full w-full flex-col items-center justify-center'}>
            <div className={'mt-4 h-[80px] w-[80px] animate-pulse bg-gray-200'}></div>
            <div className={'absolute right-1.5 top-1.5 h-[32px] w-[32px] rounded-lg border border-gray-200 bg-slate-300'}>
               <PlusIcon className={'w-full p-1 text-white '} />
            </div>
         </div>
         <div className={'row-span-1 flex h-full w-full flex-col items-center justify-center gap-2 px-4'}>
            <div style={{ width: '90%' }} className={`h-4 rounded bg-slate-200`}></div>
            <div style={{ width: '60%' }} className={`h-4 animate-pulse rounded bg-slate-400`}></div>
            <div style={{ width: '30%' }} className={`h-4 rounded bg-slate-200`}></div>
         </div>
      </article>
   )
}

export const DummyDataRender = ({ copyCount }: { copyCount: number }) => {
   const divs = []
   for (let i = 0; i < copyCount; i++) {
      divs.push(<ProductItemSkeleton key={nanoid()} />)
   }
   return divs
}
