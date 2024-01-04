import React from 'react'
import PrimaryButton from '@/components/element/button-items/PrimaryButton';
import PrimaryInput from '@/components/element/input-items/PrimaryInput';
const ResetPasswordPage = () => {
  return (
    <div className='auth-form-screen box-shadow max-w-[460px] mx-auto mt-[65px] bg-uwc-white px-[38px] pt-9 pb-10 rounded-[15px] border border-accend-color-4'>
      <h1 className='auth-screen-title'>Reset Password</h1>
      <form className='screens-form-main-box mt-[40px]'>
        <PrimaryInput
          label='New Password'
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
        <PrimaryButton
          btnText='Confirm'
          btnClasses='bg-accend-color mt-[28px]'
        />
      </form>
    </div>
  );
}

export default ResetPasswordPage
