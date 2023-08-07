type TSearchParams = {
   searchParams: { c?: string }
}

type TProps = TSearchParams & {}

function RootPage({ searchParams }: TProps) {
   const selectedCategories = searchParams.c || 'no'

   return <div className={'mx-auto h-40 w-full max-w-7xl'}></div>
}

export default RootPage
