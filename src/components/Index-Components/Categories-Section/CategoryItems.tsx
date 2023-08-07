import { CategoryList } from '../../../../libs/constants/CategoriesList'
import { CategoryItem } from '@/components/Index-Components/Categories-Section/CategoryItem'
import { nanoid } from '@reduxjs/toolkit'

export const CategoryItems = ({ t }: { t: any }) => {
   return CategoryList.map(category => <CategoryItem key={nanoid()} category={category} t={t} />)
}
