export const HeroSectionForm = () => {
   return (
      <form className="flex flex-col items-center justify-center gap-2 bg-slate-100 px-4 py-4 text-center baseTablet:w-[24rem] baseTablet:gap-2 baseTablet:rounded-lg baseTablet:py-6">
         <h2 className={'font-theme-weight text-lg text-skin-theme-800'}>Giriş yap veya kayıt ol</h2>
         <div className={'flex w-full items-center gap-4'}>
            <button className="flex w-32 items-center justify-between rounded-lg border-2 border-slate-200 bg-white p-4 transition-colors duration-200 hover:border-skin-theme-700 baseTablet:px-2 baseTablet:py-3">
               <span className={'flex items-center gap-2'}>
                  <span className={'h-3 w-3 bg-slate-200'} />
                  <span>+90</span>
               </span>
               <span className={'h-3 w-3 bg-slate-200'} />
            </button>
            <input
               type="text"
               className="w-full rounded-lg border-2 border-slate-200 px-2 py-4 transition-colors duration-200 hover:border-skin-theme-700 baseTablet:py-3"
               placeholder={'Telefon Numarası'}
            />
         </div>
         <button
            type={'button'}
            className="font-theme-weight group w-full rounded-lg border border-slate-200 bg-yellow-400 py-3 text-center text-[0.9rem] text-skin-theme-700 transition-colors duration-200 hover:bg-skin-theme-700 hover:text-yellow-400">
            Telefon numarasi ile devam et
         </button>
      </form>
   )
}
