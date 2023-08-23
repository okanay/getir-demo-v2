import { CategoryList } from '../../../../../../libs/constants/CategoriesList'
import { redirect } from 'next/navigation'
import { ProductItemsFetch } from '@/components/Categories-Page-Components/ProductItems/ProductItemsFetch'

type TProps = {
   params: { categories: string }
   searchParams: { [key: string]: string | string[] | undefined }
}

export default async function CategoriesRootPage({ searchParams, params: { categories } }: TProps) {
   const validCategory = await CategoryList.find(c => c.slugName === categories)
   if (validCategory === undefined) redirect('/')
   if (validCategory.slugName !== categories) redirect('/')

   return <ProductItemsFetch searchParams={searchParams} category={validCategory} />
}
