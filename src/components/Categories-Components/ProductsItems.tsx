import { headers } from 'next/headers'

type TProps = {
   categories?: string
   searchParams?: { [key: string]: string | string[] | undefined }
}

export const ProductsItems = async ({ categories = 'beverages' }: TProps) => {
   return <div className={'h-[96rem] w-full'}>{categories}</div>
}
