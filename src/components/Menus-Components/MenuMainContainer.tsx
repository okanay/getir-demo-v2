import { AnimatePresence, motion } from 'framer-motion'

type Props = {
   children: React.ReactNode
}

export const MenuMainContainer = ({ children }: Props) => {
   return (
      <AnimatePresence>
         <motion.div
            id={'menu-container'}
            initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            animate={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
            exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            className={'fixed left-0 top-0 z-40 z-[300] h-screen w-full font-openSans standalone:top-11'}>
            <div className="max-screen-all-devices-types pointer-events-auto relative z-[301] flex w-full flex-col items-center justify-start overflow-y-scroll baseTablet:justify-center">
               {children}
            </div>
         </motion.div>
      </AnimatePresence>
   )
}
