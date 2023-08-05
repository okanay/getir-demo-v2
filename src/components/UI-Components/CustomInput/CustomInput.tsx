import React, { ChangeEvent } from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'

type Props = {
   type: string
   name: string
   value: string
   errorStatus: boolean
   errorMessage: string
   handleOnBlur: (event: React.FocusEvent<HTMLInputElement>) => void
   handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void
   t: any
}

export const CustomInput = ({ name, type, value, handleOnChange, handleOnBlur, errorStatus, errorMessage, t }: Props) => {
   return (
      <div className={'flex w-full flex-col items-start gap-2'}>
         <div className={'peer relative h-14 w-full'}>
            <input
               value={value}
               onChange={handleOnChange}
               onBlur={handleOnBlur}
               type={type}
               name={name}
               id={name}
               placeholder={t('placeholder')}
               className={`peer  h-full w-full rounded border-2 bg-white px-3.5 text-[14px] font-normal placeholder-transparent transition-colors duration-200 baseTablet:rounded
                                ${errorStatus ? 'border-red-400 outline-red-400' : 'border-gray-200 hover:border-skin-theme-700'}
                                ${String(value).length > 0 ? 'pt-2' : 'pt-0'}`}
            />

            <label
               htmlFor={name}
               className={`peer pointer-events-none absolute left-4 top-1 text-[12px] font-normal transition-all duration-300 peer-placeholder-shown:left-4 peer-placeholder-shown:top-[18px] peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-gray-400
                                ${errorStatus ? 'text-red-400' : 'text-skin-theme-700'}`}>
               {t('placeholder')}
            </label>

            {errorStatus && (
               <ExclamationCircleIcon
                  className={'pointer-events-none absolute right-4 top-5 h-5 w-5 rounded-full bg-red-400 text-white'}
               />
            )}
         </div>

         {errorStatus && (
            <div className={'relative h-4 w-full'}>
               <p className={'absolute text-start text-[11px] font-normal text-red-500'}>{t('Errors.' + errorMessage)}</p>
            </div>
         )}
      </div>
   )
}
