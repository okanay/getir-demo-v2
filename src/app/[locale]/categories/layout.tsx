import { CategoriesHeader } from '@/components/Categories-Page-Components/CategoriesHeader/CategoriesHeader'
import { ProductsContainer } from '@/components/Categories-Page-Components/ProductsContainer'
import { ProductsMenu } from '@/components/Categories-Page-Components/ProductsMenu/ProductsMenu'
import { RightAsideShopList } from '@/components/Categories-Page-Components/RightAsideShopList'
import { CategoriesFooter } from '@/components/Categories-Page-Components/CategoriesFooter/CategoriesFooter'

type TProps = {
   children: React.ReactNode
}

export default function CategoriesLayout({ children }: TProps) {
   return (
      <main className={'h-full w-full bg-white'}>
         <CategoriesHeader />
         {/*<CategoriesPromotions />*/}
         <ProductsContainer>
            <ProductsMenu />
            {children}
            <RightAsideShopList />
         </ProductsContainer>
         <CategoriesFooter />
      </main>
   )
}
