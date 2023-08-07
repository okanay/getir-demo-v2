import { CategoriesHeader } from '@/components/Categories-Components/C-LayoutHeader/CategoriesHeader'
import { CategoriesFooter } from '@/components/Categories-Components/C-LayoutFooter/CategoriesFooter'

type TProps = {
   children: React.ReactNode
}

export default function CategoriesLayout({ children }: TProps) {
   return (
      <section className={''}>
         <CategoriesHeader />
         {children}
         <CategoriesFooter />
      </section>
   )
}
