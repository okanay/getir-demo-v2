import { CategoriesHeader } from '@/components/Categories-Components/CategoriesHeader/CategoriesHeader'
import { CategoriesFooter } from '@/components/Categories-Components/CategoriesFooter/CategoriesFooter'
import { ProductsContainer } from '@/components/Categories-Components/ProductsContainer'
import { ProductsMenu } from '@/components/Categories-Components/ProductsMenu/ProductsMenu'
import { ShoplistAndOldOrders } from '@/components/Categories-Components/ShoplistAndOldOrders'
import { CategoriesPromotions } from '@/components/Categories-Components/CategoriesPromotions/CategoriesPromotions'
import { CategoriesPageLayout } from '@/components/Categories-Components/CategoriesPageLayout'

type TProps = {
   children: React.ReactNode
}

export default function CategoriesLayout({ children }: TProps) {
   return <CategoriesPageLayout>{children}</CategoriesPageLayout>
}
