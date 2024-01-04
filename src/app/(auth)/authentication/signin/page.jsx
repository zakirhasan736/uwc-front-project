import React from 'react'
import PrimaryButton from '@/components/element/button-items/PrimaryButton';
import PrimaryInput from '@/components/element/input-items/PrimaryInput';
import Link from 'next/link';

const SignInPage = () => {
  return (
    <>
      <div className='auth-form-screen box-shadow max-w-[460px] mx-auto mt-[65px] bg-uwc-white px-[38px] pt-9 pb-10 rounded-[15px] border border-accend-color-4'>
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
          />
          <PrimaryInput
            label='Enter Your Password'
            placeholder='*************'
            inputType='password'
            getInputIcon='/images/icons/lock.svg'
            iconWidth='17'
            iconHeight='18'
          />

          <PrimaryButton
            btnText='Confirm'
            btnClasses='bg-accend-color mt-[35px]'
          />
        </form>
      </div>
      <p className='forget-password-states text-primary-color text-center text-body-text font-primary font-bold leading-none mt-10'>
        <span>Forgot Your Password? </span>
        <Link className='text-accend-color-3' href='/'>
          Reset{' '}
        </Link>
      </p>
    </>
  );
}

export default SignInPage
