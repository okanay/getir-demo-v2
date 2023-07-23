
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
   params: { id: string }
   searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
   { params, searchParams }: Props,
   parent?: ResolvingMetadata
): Promise<Metadata> {

   console.log(searchParams)
   console.log(params)


   const tr = {
      title : "Giris Yap | Getir"
   }

   const en = {
      title : "Login | Getir"
   }

   // const data = locale === "tr" ? {...tr} : {...en}

   return {
      title : "..."
   }
}

export default function Login() {
   return <main>
      Login Page
   </main>
}
