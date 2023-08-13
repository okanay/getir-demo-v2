import { ProductItemsFetch } from '@/components/Categories-Page-Components/ProductItems/ProductItemsFetch'
import { CategoryList } from '../../../../../libs/constants/CategoriesList'
import { redirect } from 'next/navigation'

type TProps = {
   params: { categories: string }
   searchParams: { [key: string]: string | string[] | undefined }
}

export default async function CategoriesRootPage({ searchParams, params: { categories } }: TProps) {
   const getCategoryData = await CategoryList.find(c => c.slugName === categories)
   if (getCategoryData === undefined) redirect('/')
   if (getCategoryData.slugName !== categories) redirect('/')

   return <ProductItemsFetch searchParams={searchParams} data={getCategoryData} />
}
