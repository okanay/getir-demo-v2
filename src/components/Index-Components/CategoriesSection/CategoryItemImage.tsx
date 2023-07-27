import { Category } from '../../../../libs/types/types'
import Image from 'next/image'
import { useState } from 'react'

export const CategoryItemImage = ({ category }: { category: Category }) => {
   const [loading, setLoading] = useState(true)
   const handleOnComplete = () => {
      setLoading(false)
   }

   return (
      <>
         <Image src={category.imageSmall} alt={category.languageCode} className={!loading ? 'hidden' : 'w-full'} />

         <Image
            src={category.image}
            alt={category.languageCode}
            loading={'eager'}
            onLoadingComplete={handleOnComplete}
            className={loading ? 'hidden' : ''}
         />
      </>
   )
}
