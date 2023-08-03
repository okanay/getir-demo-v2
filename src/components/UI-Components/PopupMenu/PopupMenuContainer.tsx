import { motion } from 'framer-motion'

type Props = {
   children: React.ReactNode
}

export const PopupMenuContainer = ({ children }: Props) => {
   return (
      <motion.div
         initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
         animate={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
         className={'fixed left-0 top-0 z-40 z-[201] h-screen w-full font-openSans'}>
         <div className={'flex h-full w-full flex-col items-center justify-start baseTablet:justify-center'}>
            <div className="flex h-screen w-full flex-col items-center justify-start border border-slate-200 bg-white px-8 py-8 baseTablet:h-fit baseTablet:w-[28rem] baseTablet:justify-center baseTablet:rounded-lg">
               {children}
            </div>
         </div>
      </motion.div>
   )
}
