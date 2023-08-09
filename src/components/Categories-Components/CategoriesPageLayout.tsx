import { CategoriesHeader } from '@/components/Categories-Components/CategoriesHeader/CategoriesHeader'
import { CategoriesPromotions } from '@/components/Categories-Components/CategoriesPromotions/CategoriesPromotions'
import { ProductsContainer } from '@/components/Categories-Components/ProductsContainer'
import { ProductsMenu } from '@/components/Categories-Components/ProductsMenu/ProductsMenu'
import { ShoplistAndOldOrders } from '@/components/Categories-Components/ShoplistAndOldOrders'
import { CategoriesFooter } from '@/components/Categories-Components/CategoriesFooter/CategoriesFooter'

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
