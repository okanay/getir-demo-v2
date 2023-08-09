import { CategoriesHeader } from '@/components/Categories-Page-Components/CategoriesHeader/CategoriesHeader'
import { CategoriesFooter } from '@/components/Categories-Page-Components/CategoriesFooter/CategoriesFooter'
import { ProductsContainer } from '@/components/Categories-Page-Components/ProductsContainer'
import { ProductsMenu } from '@/components/Categories-Page-Components/ProductsMenu/ProductsMenu'
import { ShoplistAndOldOrders } from '@/components/Categories-Page-Components/ShoplistAndOldOrders'
import { CategoriesPromotions } from '@/components/Categories-Page-Components/CategoriesPromotions/CategoriesPromotions'
import { CategoriesPageLayout } from '@/components/Categories-Page-Components/CategoriesPageLayout'

type TProps = {
   children: React.ReactNode
}

export default function CategoriesLayout({ children }: TProps) {
   return <CategoriesPageLayout>{children}</CategoriesPageLayout>
}
