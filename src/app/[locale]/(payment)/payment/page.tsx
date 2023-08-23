function PaymentPage() {
   return (
      <div className={'h-full flex-grow-0 bg-gray-50'}>
         <div className="mx-auto flex h-full w-full max-w-5xl flex-col gap-4 px-8 py-4 baseTablet:flex-row">
            <div className={'flex h-full w-full flex-col'}>
               <div className={'h-fit w-full bg-rose-100'}>1</div>
               <div className={'h-full w-full bg-sky-100'}>2</div>
            </div>
            <div className={'flex w-full flex-col baseTablet:h-[300px] baseTablet:w-[300px] baseTablet:flex-shrink-0'}>
               <div className={'flex h-full w-full flex-col'}>
                  <div className={'h-fit w-full bg-yellow-100'}>3</div>
                  <div className={'h-full w-full bg-yellow-300'}>4</div>
               </div>
               <div className={'flex h-full w-full flex-col'}>
                  <div className={'h-fit w-full bg-lime-100'}>5</div>
                  <div className={'hidden h-full w-full bg-lime-300 baseTablet:block'}>6</div>
                  <div className={'h-full w-full bg-lime-500'}>7</div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default PaymentPage
