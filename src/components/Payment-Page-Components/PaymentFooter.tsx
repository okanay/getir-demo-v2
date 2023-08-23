import { LanguageButton } from '@/components/UI-Components/LanguageMenuOpenButton/LanguageButton'

export const PaymentFooter = () => {
   return (
      <footer
         className={'relative z-[11] hidden h-fit w-full bg-white py-4 font-openSans shadow shadow-gray-100 baseTablet:block'}>
         <div className={'mx-auto max-w-5xl bg-white px-8 baseTablet:bg-white'}>
            <div className="flex h-full w-full flex-col items-center justify-center text-center text-[13px] text-slate-600 baseTablet:flex-row baseTablet:justify-between">
               <div className="flex flex-col items-center space-y-2 baseTablet:flex-row baseTablet:space-x-2 baseTablet:space-y-0">
                  <h4>© 2023 Getir</h4>
                  <div className={'hidden h-1 w-1 space-x-2 rounded-full bg-black baseTablet:block'} />
                  <h4 className={'text-skin-theme-700'}>Information Society Services</h4>
               </div>
               <div className="flex flex-col items-center space-y-2 baseTablet:flex-row baseTablet:justify-end baseTablet:space-y-0">
                  <ul className={'flex h-full w-full flex-row items-center justify-center gap-2 baseTablet:justify-end'}>
                     <li className={'h-6 w-6 bg-white baseTablet:bg-slate-200'} />
                     <li className={'h-6 w-6 bg-white baseTablet:bg-slate-200'} />
                     <li className={'h-6 w-6 bg-white baseTablet:bg-slate-200'} />
                  </ul>
                  <LanguageButton type={'footer'} />
               </div>
            </div>
         </div>
      </footer>
   )
}
