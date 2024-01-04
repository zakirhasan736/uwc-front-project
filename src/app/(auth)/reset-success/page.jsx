'use client'

import React from 'react'
import PrimaryButton from '@/components/element/button-items/PrimaryButton'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const ResetSuccessPage = () => {
  const router = useRouter()
  const handleSubmit = () => {
    // before check all data is valid by backend api
    router.push('/signin')
  }
  return (
    <div className='auth-form-screen box-shadow mx-auto mt-[102px] max-w-[460px] rounded-[15px] border border-accend-color-4 bg-uwc-white px-[38px] pb-10 pt-9'>
      <Image
        className='mx-auto mb-[19px] block'
        src='/images/icons/checked-mask.svg'
        alt='success massage icons image'
        width={53}
        height={53}
      />
      <h1 className='auth-screen-title mx-auto mb-1 max-w-[249px]'>
        Password <br /> Set Successfully!
      </h1>
      <p className='auth-screen-desc mx-auto max-w-[327px]'>
        You have successfully reset your password. You can now use the platform.
      </p>
      <PrimaryButton
        btnText='Continue'
        btnClasses='bg-accend-color mt-[28px]'
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default ResetSuccessPage
