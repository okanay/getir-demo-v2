import { CategoryList } from '../../../../libs/constants/CategoriesList'
import { CategoryItem } from '@/components/Index-Page-Components/Categories-Section/CategoryItem'
import { nanoid } from '@reduxjs/toolkit'

export const CategoryItems = () => {
   return CategoryList.map(category => <CategoryItem key={nanoid()} category={category} />)
}
