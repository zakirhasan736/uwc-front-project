'use client'

import React from 'react'
import PrimaryButton from '@/components/element/button-items/PrimaryButton'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const DetailsUpdateSuccessPage = () => {
  const router = useRouter()
  const handleSubmit = () => {
    // before check all data is valid by backend api

    router.push('/dashboard/overview')
  }
  return (
    <div className='auth-form-screen box-shadow mx-auto mt-[89px] max-w-[460px] rounded-[15px] border border-accend-color-4 bg-uwc-white px-[38px] pb-10 pt-9'>
      <Image
        className='mx-auto mb-[19px] block'
        src='/images/icons/checked-mask.svg'
        alt='success massage icons image'
        width={53}
        height={53}
      />
      <h1 className='auth-screen-title mx-auto mb-4 max-w-[255px]'>
        Details Updated <br /> Successfully!
      </h1>
      <p className='auth-screen-desc mx-auto max-w-[400px]'>
        Thank you for providing us your personal details. We value your privacy
        and assure you that all information shared is stored securely and will
        only be used for official UWC purposes.
      </p>
      <PrimaryButton
        btnText='Proceed to Home'
        btnClasses='bg-accend-color mt-[28px]'
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default DetailsUpdateSuccessPage
