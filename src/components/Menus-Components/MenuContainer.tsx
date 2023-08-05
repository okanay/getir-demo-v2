import { AnimatePresence, motion } from 'framer-motion'

type Props = {
   children: React.ReactNode
}

export const MenuContainer = ({ children }: Props) => {
   return (
      <AnimatePresence>
         <motion.div
            initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            animate={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
            exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            className={'fixed left-0 top-0 z-40 z-[201] h-screen w-full font-openSans'}>
            <div
               className={
                  'max-screen-all-devices-types flex w-full flex-col items-center justify-start overflow-y-scroll baseTablet:justify-center'
               }>
               {children}
            </div>
         </motion.div>
      </AnimatePresence>
   )
}
