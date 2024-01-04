'use client'

import React from 'react'
import PrimaryButton from '@/components/element/button-items/PrimaryButton'
import PrimaryInput from '@/components/element/input-items/PrimaryInput'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { updateFormData } from '@/redux/features/resetPassword/slice'
const ResetPasswordPage = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { submitted, ...formData } = useSelector((state) => state.resetPassword)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    dispatch(updateFormData({ name, value }))
  }

  const handleSubmit = () => {
    if (submitted) {
      // before check all data is valid by backend api
      router.push('/reset-success')
    } else {
      return
    }
  }

  return (
    <div className='auth-form-screen box-shadow mx-auto mt-[65px] max-w-[460px] rounded-[15px] border border-accend-color-4 bg-uwc-white px-[38px] pb-10 pt-9'>
      <h1 className='auth-screen-title'>Reset Password</h1>
      <form className='screens-form-main-box mt-[40px]'>
        <PrimaryInput
          label='New Password'
          placeholder='*************'
          inputType='password'
          getInputIcon='/images/icons/lock.svg'
          iconWidth='17'
          iconHeight='18'
          name='newPassword'
          onChange={handleInputChange}
        />
        <PrimaryInput
          label='Confirm Password'
          placeholder='*************'
          inputType='password'
          getInputIcon='/images/icons/lock.svg'
          iconWidth='17'
          iconHeight='18'
          name='confirmPassword'
          onChange={handleInputChange}
        />
        <PrimaryButton
          btnText='Confirm'
          btnClasses='bg-accend-color mt-[28px]'
          handleSubmit={handleSubmit}
        />
      </form>
    </div>
  )
}

export default ResetPasswordPage
