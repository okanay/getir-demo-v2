type TProps = {
   children: React.ReactNode
}
export const ProductsContainer = ({ children }: TProps) => {
   return (
      <div className={'bg-gray-50'}>
         <section
            id={'categories'}
            className={'relative top-0 mx-auto flex max-w-7xl flex-col gap-x-4 baseTablet:flex-row baseTablet:px-4'}>
            {children}
         </section>
      </div>
   )
}
