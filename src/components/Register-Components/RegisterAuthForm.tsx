import React, { FormEvent, useState } from 'react'
import { SelectedCode } from '../../../libs/constants/CountriesPhoneCodesList'
import { useTranslations } from 'next-intl'
import { PhoneCodeInput } from '@/components/UI-Components/CustomInput/PhoneCodeInput'
import { PhoneNumberInput } from '@/components/UI-Components/CustomInput/PhoneNumberInput'
import { FullNameInput } from '@/components/UI-Components/CustomInput/FullNameInput'
import { EmailInput } from '@/components/UI-Components/CustomInput/EmailInput'
import { SelectAdsCampaign } from '@/components/UI-Components/CustomInput/SelectAdsCampaign'
import { RegisterInformationAndTerm } from '@/components/Register-Components/RegisterInformationAndTerm'

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
      <form onSubmit={handleOnSubmit} className={'flex h-full w-full flex-col gap-[12px]'}>
         <div className="flex w-full items-start gap-[8px]">
            <PhoneCodeInput selectedCode={selectedCode} setSelectedCode={setSelectedCode} />
            <PhoneNumberInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
         </div>
         <FullNameInput fullName={fullName} setFullName={setFullName} />
         <EmailInput email={email} setEmail={setEmail} />
         <SelectAdsCampaign adsCampaign={adsCampaign} setAdsCampaign={setAdsCampaign} />
         <RegisterInformationAndTerm t={t} />
         <button
            type="submit"
            className="w-full rounded-lg border border-gray-200 bg-skin-theme-700 px-4 py-3.5 text-[16px] font-semibold text-white transition-colors duration-200 hover:bg-skin-theme-600 hover:text-white baseTablet:mb-12"
         >
            {t('registerButton')}
         </button>
      </form>
   )
}
