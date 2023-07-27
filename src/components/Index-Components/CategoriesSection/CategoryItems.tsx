import { CategoryList } from '../../../../libs/constants/CategoriesList'
import { CategoryItem } from '@/components/Index-Components/CategoriesSection/CategoryItem'

export const CategoryItems = ({ t }: { t: any }) => {
   return CategoryList.map(category => <CategoryItem key={category.key} category={category} t={t} />)
}
