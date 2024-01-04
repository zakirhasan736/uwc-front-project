import React from 'react'
import PrimaryButton from '@/components/element/button-items/PrimaryButton';
import PrimaryInput from '@/components/element/input-items/PrimaryInput';
import { ArrowRightIcons } from '@/icons';

const ForgotPasswordPage = () => {
  return (
    <div className='auth-form-screen box-shadow max-w-[460px] mx-auto mt-[118px] bg-uwc-white px-[38px] pt-9 pb-10 rounded-[15px] border border-accend-color-4'>
      <h1 className='auth-screen-title flex justify-start items-center gap-9'>
        <button type='button' className="accend-icon-button">
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
        />

        <PrimaryButton
          btnText='Send Password Reset Link'
          btnClasses='bg-accend-color mt-[27px]'
        />
      </form>
    </div>
  );
}

export default ForgotPasswordPage
