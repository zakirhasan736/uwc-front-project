import PrimaryButton from '@/components/element/button-items/PrimaryButton';
import PrimaryInput from '@/components/element/input-items/PrimaryInput'
import React from 'react'

const RegistaretionPage = () => (
  <>
    <div className='auth-form-screen box-shadow max-w-[460px] mx-auto mt-[65px] bg-uwc-white px-[38px] pt-9 pb-10 rounded-[15px] border border-accend-color-4'>
      <h1 className='auth-screen-title'>
        Welcome to UWC
      </h1>
      <p className='auth-screen-desc'>
        You've been invited as a UWC admin. Please set your password to get
        started
      </p>
      <form className='screens-form-main-box mt-[44px]'>
        <PrimaryInput
          label='Email'
          placeholder='john@gmail.com'
          inputType='email'
          getInputIcon='/images/icons/envelop.svg'
          iconWidth='20'
          iconHeight='15'
        />
        <PrimaryInput
          label='Create Password'
          placeholder='*************'
          inputType='password'
          getInputIcon='/images/icons/lock.svg'
          iconWidth='17'
          iconHeight='18'
        />
        <PrimaryInput
          label='Confirm Password'
          placeholder='*************'
          inputType='password'
          getInputIcon='/images/icons/lock.svg'
          iconWidth='17'
          iconHeight='18'
        />

        <PrimaryButton btnText='Confirm' btnClasses='bg-accend-color mt-[35px]' />
      </form>
    </div>
  </>
);

export default RegistaretionPage
