import { CategoryList } from '../../../../../libs/constants/CategoriesList'
import { redirect } from 'next/navigation'
import { ProductItemsFetch } from '@/components/Categories-Page-Components/ProductItems/ProductItemsFetch'
import { LoadingItems } from '@/components/Categories-Page-Components/ProductItems/LoadingItems'

type TProps = {
   params: { categories: string }
   searchParams: { [key: string]: string | string[] | undefined }
}

export default async function CategoriesRootPage({ searchParams, params: { categories } }: TProps) {
   // const validCategory = await CategoryList.find(c => c.slugName === categories)
   // if (validCategory === undefined) redirect('/')
   // if (validCategory.slugName !== categories) redirect('/')


   return <h1 className={'w-full h-screen'}>{categories}</h1>
   // return <ProductItemsFetch searchParams={searchParams} category={validCategory} />
   // return <LoadingItems />
}
