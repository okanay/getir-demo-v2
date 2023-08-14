'use client'

import { AltCategory } from '../../../../libs/types/types'
import { TProducts } from '../../../../libs/constants/DummyProducts'

import { nanoid } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery, useScrollIntoView } from '@mantine/hooks'

import { getSelectedAltCategoryIndex, resetSelectedAltCategoryIndex } from '../../../../redux/slices/SelectedAltCatIndexSlice'

import { Product } from '@/components/Categories-Page-Components/ProductItems/Product'
import { DummyDataRender } from '@/components/Categories-Page-Components/ProductItems/ProductsLoading'

type TProps = {
   index: number
   altCategory: AltCategory
   products: TProducts
}

export const AltCategoryContainer = ({ index, altCategory, products }: TProps) => {
   // FILTER FETCH PRODUCT LIKE, WATER, SODA,
   const data: TProducts | undefined = products.filter(p => p.altCategoryId === altCategory.id) || undefined
   //
   const dispatch = useDispatch()
   const selectedIndexValue = useSelector(getSelectedAltCategoryIndex)
   //
   const matches = useMediaQuery('(min-width: 760px)')
   const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
      offset: matches ? (index === 0 ? 50 : 0) : 140,
   })
   //
   useEffect(() => {
      if (selectedIndexValue === index) {
         scrollIntoView({
            alignment: 'start',
         })
      }
   }, [index, scrollIntoView, selectedIndexValue])
   useEffect(() => {
      return () => {
         dispatch(resetSelectedAltCategoryIndex())
      }
   }, [dispatch])

   return (
      <section
         id={altCategory.url}
         ref={targetRef}
         className={'my-2 flex flex-col items-start justify-start gap-2 overflow-y-hidden'}>
         {index !== 0 ? (
            <h1 className={'px-4 text-[14px] font-semibold text-slate-900 baseTablet:px-0'}>{altCategory.name}</h1>
         ) : null}
         <div className="grid h-fit w-full grid-cols-2 gap-[1px] rounded-lg bg-gray-100 smTablet:grid-cols-3 desktop:grid-cols-4">
            {data !== undefined && data.map(d => <Product product={d} key={nanoid()} />)}
            <DummyDataRender copyCount={6} />
         </div>
      </section>
   )
}
