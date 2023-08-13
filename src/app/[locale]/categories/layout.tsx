import { CategoriesPageLayout } from '@/components/Categories-Page-Components/CategoriesPageLayout'

type TProps = {
   children: React.ReactNode
}

export default function CategoriesLayout({ children }: TProps) {
   return <CategoriesPageLayout>{children}</CategoriesPageLayout>
}
