'use client'

import { CategoriesHeader } from '@/components/Categories-Page-Components/CategoriesHeader/CategoriesHeader'
import { ProductsContainer } from '@/components/Categories-Page-Components/ProductsContainer'
import { ProductsMenu } from '@/components/Categories-Page-Components/ProductsMenu/ProductsMenu'
import { ShoplistAndOldOrders } from '@/components/Categories-Page-Components/ShoplistAndOldOrders'
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
            <ShoplistAndOldOrders />
         </ProductsContainer>
         <CategoriesFooter />
      </>
   )
}
