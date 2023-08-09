import { headers } from 'next/headers'

type TProps = {
   categories?: string
   searchParams?: { [key: string]: string | string[] | undefined }
}

export const ProductsItems = async ({ categories = 'beverages' }: TProps) => {
   return (
      <div className={'mt-12 h-96 w-full px-6 py-2 baseTablet:mt-0 baseTablet:px-4'}>
         <h1>{categories}</h1>
      </div>
   )
}
