import React, { FormEvent, useState } from 'react'
import { SelectedCode } from '../../../libs/constants/CountriesPhoneCodesList'
import { useTranslations } from 'next-intl'
import { PhoneCodeInput } from '@/components/UI-Components/CustomInput/PhoneCodeInput'
import { PhoneNumberInput } from '@/components/UI-Components/CustomInput/PhoneNumberInput'
import { FullNameInput } from '@/components/UI-Components/CustomInput/FullNameInput'
import { EmailInput } from '@/components/UI-Components/CustomInput/EmailInput'
import { SelectAdsCampaign } from '@/components/UI-Components/CustomInput/SelectAdsCampaign'
import Link from 'next/link'
import { RegisterAuthFormTermInformationTextsAndLinks } from '@/components/Register-Components/RegisterAuthFormTermInformationTextsAndLinks'
import { useDispatch } from 'react-redux'
import { setMenu } from '../../../redux/slices/PopUpMenuSlice'

export const RegisterAuthForm = () => {
   // i18 Language
   const t = useTranslations('Menus.RegisterMenu')
   // STATE's
   const [selectedCode, setSelectedCode] = useState<SelectedCode>({
      flagCode: 'TR',
      phoneCode: '90',
   })
   const [phoneNumber, setPhoneNumber] = useState<string>('')
   const [fullName, setFullName] = useState<string>('')
   const [email, setEmail] = useState<string>('')
   const [adsCampaign, setAdsCampaign] = useState<boolean>(false)

   // HANDLE's
   const handleOnSubmit = (event: FormEvent) => {
      event.preventDefault()
   }

   return (
      <form onSubmit={handleOnSubmit} className={'flex h-full w-full flex-col gap-4'}>
         <div className="flex w-full items-start gap-2">
            <PhoneCodeInput selectedCode={selectedCode} setSelectedCode={setSelectedCode} />
            <PhoneNumberInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
         </div>
         <FullNameInput fullName={fullName} setFullName={setFullName} />
         <EmailInput email={email} setEmail={setEmail} />
         <SelectAdsCampaign adsCampaign={adsCampaign} setAdsCampaign={setAdsCampaign} />
         <RegisterAuthFormTermInformationTextsAndLinks t={t} />
         <div className={'relative flex h-full w-full flex-col items-end justify-end gap-6'}>
            <button
               type="submit"
               className="w-full rounded-lg border border-gray-200 bg-skin-theme-700 px-4 py-3.5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-skin-theme-600 hover:text-white baseTablet:mt-12">
               {t('registerButton')}
            </button>
            <div className="pointer-events-none h-8 w-full bg-transparent baseTablet:hidden" />
         </div>
      </form>
   )
}
