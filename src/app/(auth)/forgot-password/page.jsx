'use client'

import React from 'react'
import PrimaryButton from '@/components/element/button-items/PrimaryButton'
import PrimaryInput from '@/components/element/input-items/PrimaryInput'
import { ArrowRightIcons } from '@/icons'
import { updateFormData } from '@/redux/features/resetPassword/slice'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

const ForgotPasswordPage = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { submitted, ...formData } = useSelector((state) => state.resetPassword)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    dispatch(updateFormData({ name, value }))
  }

  const handleSubmit = () => {
    if (formData.email) {
      // before check and send data and link in email
      // also  check all data is valid by backend api
      router.push('/reset-password')
    } else {
      return
    }
  }

  return (
    <div className='auth-form-screen box-shadow mx-auto mt-[118px] max-w-[460px] rounded-[15px] border border-accend-color-4 bg-uwc-white px-[38px] pb-10 pt-9'>
      <h1 className='auth-screen-title flex items-center justify-start gap-9'>
        <button type='button' className='accend-icon-button'>
          <ArrowRightIcons />
        </button>
        <span>Forgot Password?</span>
      </h1>
      <form className='screens-form-main-box mt-[52px]'>
        <PrimaryInput
          label='Enter Your Email'
          placeholder='john@gmail.com'
          inputType='email'
          getInputIcon='/images/icons/envelop.svg'
          iconWidth='20'
          iconHeight='15'
          name='email'
          onChange={handleInputChange}
        />

        <PrimaryButton
          btnText='Send Password Reset Link'
          btnClasses='bg-accend-color mt-[27px]'
          handleSubmit={handleSubmit}
        />
      </form>
    </div>
  )
}

export default ForgotPasswordPage
