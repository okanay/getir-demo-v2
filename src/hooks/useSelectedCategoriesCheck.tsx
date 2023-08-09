'use client'

import { useEffect, useState } from 'react'
import { CategoryList } from '../../libs/constants/CategoriesList'
import { useRouter } from 'next/navigation'

export const useSelectedCategoriesCheck = (selectedCategories: string, defaultSelectedCategories: string) => {
   const router = useRouter()
   const [isCategoryExist, setIsCategoryExist] = useState<boolean>(false)

   useEffect(() => {
      if (selectedCategories === defaultSelectedCategories) return setIsCategoryExist(true)

      const possibleCategories: string[] = [...CategoryList.map(c => c.url)]
      let isMatch: boolean = false

      possibleCategories.map(p => {
         if (p.match(selectedCategories)) isMatch = true
      })

      if (!isMatch) return router.push('/categories')
      else setIsCategoryExist(true)
   }, [selectedCategories, defaultSelectedCategories, router])

   return { isCategoryExist }
}
