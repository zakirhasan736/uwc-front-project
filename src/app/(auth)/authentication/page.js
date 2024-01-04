'use client';

import PrimaryButton from '@/components/element/button-items/PrimaryButton';
import PrimaryInput from '@/components/element/input-items/PrimaryInput';
import { updateFormData } from '@/redux/features/registration/slice';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RegistaretionPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const registration = useSelector(state => state.registration);

  const personalDetails = useSelector(state => state.personalDetails);

  const handleInputChange = e => {
    const { name, value } = e.target;
    dispatch(updateFormData({ name, value }));
  };

  const handleSubmit = () => {
    if (registration.submitted) {
      if (personalDetails.submitted) {
            // before check all data is valid by backend api
        router.push('/signin');
      } else {
            // before check all data is valid by backend api
        router.push('/personal-details');
      }
    } else {
      return;
    }
  };

  return (
    <>
      <div className='auth-form-screen box-shadow max-w-[460px] mx-auto mt-[65px] bg-uwc-white px-[38px] pt-9 pb-10 rounded-[15px] border border-accend-color-4'>
        <h1 className='auth-screen-title'>Welcome to UWC</h1>
        <p className='auth-screen-desc'>
          You've been invited as a UWC admin. Please set your password to get
          started
        </p>
        <form className='screens-form-main-box mt-[44px]'>
          <PrimaryInput
            label='Email'
            name='email'
            placeholder='john@gmail.com'
            inputType='email'
            onChange={handleInputChange}
            getInputIcon='/images/icons/envelop.svg'
            iconWidth='20'
            iconHeight='15'
          />
          <PrimaryInput
            label='Create Password'
            name='password'
            placeholder='*************'
            inputType='password'
            getInputIcon='/images/icons/lock.svg'
            iconWidth='17'
            onChange={handleInputChange}
            iconHeight='18'
          />
          <PrimaryInput
            label='Confirm Password'
            name='confirmPassword'
            placeholder='*************'
            inputType='password'
            getInputIcon='/images/icons/lock.svg'
            onChange={handleInputChange}
            iconWidth='17'
            iconHeight='18'
          />

          <PrimaryButton
            btnText='Confirm'
            btnClasses='bg-accend-color mt-[35px]'
            handleSubmit={handleSubmit}
          />
        </form>
      </div>
    </>
  );
};
export default RegistaretionPage;
