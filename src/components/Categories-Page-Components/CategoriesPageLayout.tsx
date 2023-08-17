'use client'

import { CategoriesHeader } from '@/components/Categories-Page-Components/CategoriesHeader/CategoriesHeader'
import { ProductsContainer } from '@/components/Categories-Page-Components/ProductsContainer'
import { ProductsMenu } from '@/components/Categories-Page-Components/ProductsMenu/ProductsMenu'
import { RightAsideShopList } from '@/components/Categories-Page-Components/RightAsideShopList'
import { CategoriesFooter } from '@/components/Categories-Page-Components/CategoriesFooter/CategoriesFooter'

type TProps = {
   children: React.ReactNode
}

export const CategoriesPageLayout = ({ children }: TProps) => {
   return (
      <>
         <CategoriesHeader />
         {/*<CategoriesPromotions />*/}
         <ProductsContainer>
            <ProductsMenu />
            {children}
            <RightAsideShopList />
         </ProductsContainer>
         <CategoriesFooter />
      </>
   )
}
