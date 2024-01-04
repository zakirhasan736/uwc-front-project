'use client'

import React from 'react'
import PrimaryButton from '@/components/element/button-items/PrimaryButton'
import PrimaryInput from '@/components/element/input-items/PrimaryInput'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { updateFormData } from '@/redux/features/signin/slice'

const SignInPage = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const signin = useSelector((state) => state.signin)

  const personalDetails = useSelector((state) => state.personalDetails)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    dispatch(updateFormData({ name, value }))
  }

  const handleSubmit = () => {
    if (signin.submitted) {
      if (personalDetails.submitted) {
        // before check all data is valid by backend api
        router.push('/dashboard/overview')
      } else {
        // before check all data is valid by backend api
        router.push('/personal-details')
      }
    } else {
      return
    }
  }

  return (
    <>
      <div className='auth-form-screen box-shadow mx-auto mt-[65px] max-w-[460px] rounded-[15px] border border-accend-color-4 bg-uwc-white px-[38px] pb-10 pt-9'>
        <h1 className='auth-screen-title'>Sign In</h1>
        <p className='auth-screen-desc'>Welcome Back! Please Log In</p>
        <form className='screens-form-main-box mt-[65px]'>
          <PrimaryInput
            label='Email'
            placeholder='john@gmail.com'
            inputType='email'
            getInputIcon='/images/icons/envelop.svg'
            iconWidth='20'
            iconHeight='15'
            name='email'
            onChange={handleInputChange}
          />
          <PrimaryInput
            label='Enter Your Password'
            placeholder='*************'
            inputType='password'
            getInputIcon='/images/icons/lock.svg'
            iconWidth='17'
            iconHeight='18'
            name='password'
            onChange={handleInputChange}
          />

          <PrimaryButton
            btnText='Confirm'
            btnClasses='bg-accend-color mt-[35px]'
            handleSubmit={handleSubmit}
          />
        </form>
      </div>
      <p className='forget-password-states mt-10 text-center font-primary text-body-text font-bold leading-none text-primary-color'>
        <span>Forgot Your Password? </span>
        <Link className='text-accend-color-3' href='/forgot-password'>
          Reset{' '}
        </Link>
      </p>
    </>
  )
}

export default SignInPage
