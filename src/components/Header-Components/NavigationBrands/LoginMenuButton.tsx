import { useDispatch } from 'react-redux'
import { setMenu } from '../../../../redux/slices/PopUpMenuSlice'

export const LoginMenuButton = ({ t }: { t: any }) => {
   const dispatch = useDispatch()
   const handleOnClick = () => {
      dispatch(setMenu('login'))
   }

   return (
      <button onClick={handleOnClick} className={'flex items-center justify-start gap-2.5'}>
         <svg
            data-testid="icon"
            name="profile"
            width="16"
            height="16"
            fill="#DBDBFF"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="">
            <path
               d="M24 8.846c0 4.39-3.582 7.948-8 7.948s-8-3.559-8-7.948c0-4.39 3.582-7.948 8-7.948s8 3.558 8 7.948z M0.027 28.896c-0.207 1.16 0.83 2.206 2.116 2.206h27.713c1.327 0 2.324-1.048 2.116-2.206-1.204-6.696-7.884-10.511-15.974-10.511s-14.77 3.815-15.972 10.511h-0z"
               className="style__Path-sc-__sc-hqksj3-2 lcjQMU"></path>
         </svg>
         <p className={'hidden lgTablet:block'}>{t('login')}</p>
      </button>
   )
}
