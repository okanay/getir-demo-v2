export const CategoriesPromotions = () => {
   return (
      <section id={'promotions'} className={'relative h-40 w-full overflow-hidden bg-amber-400'}>
         <div className={'absolute inset-0 bg-rose-400'}>
            <div className={'flex flex-row items-center justify-start overflow-y-auto'}>
               <div className="h-40 w-1/3 flex-shrink-0 flex-grow bg-yellow-400"></div>
               <div className="h-40 w-1/3 flex-shrink-0 flex-grow bg-slate-400"></div>
               <div className="h-40 w-1/3 flex-shrink-0 flex-grow bg-blue-400"></div>

               <div className="h-40 w-1/3 flex-shrink-0 flex-grow bg-yellow-400"></div>
               <div className="h-40 w-1/3 flex-shrink-0 flex-grow bg-slate-400"></div>
               <div className="h-40 w-1/3 flex-shrink-0 flex-grow bg-blue-400"></div>
            </div>
         </div>
      </section>
   )
}
