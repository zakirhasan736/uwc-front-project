import React from 'react'
import PrimaryButton from '@/components/element/button-items/PrimaryButton';
import Image from 'next/image';
const DetailsUpdateSuccessPage = () => {
  return (
    <div className='auth-form-screen box-shadow max-w-[460px] mx-auto mt-[89px] bg-uwc-white px-[38px] pt-9 pb-10 rounded-[15px] border border-accend-color-4'>
      <Image
        className='mb-[19px] block mx-auto'
        src='/images/icons/checked-mask.svg'
        alt='success massage icons image'
        width={53}
        height={53}
      />
      <h1 className='auth-screen-title mb-4 max-w-[255px] mx-auto'>
        Details Updated <br /> Successfully!
      </h1>
      <p className='auth-screen-desc max-w-[400px] mx-auto'>
        Thank you for providing us your personal details. We value your privacy
        and assure you that all information shared is stored securely and will
        only be used for official UWC purposes.
      </p>
      <PrimaryButton
        btnText='Proceed to Home'
        btnClasses='bg-accend-color mt-[28px]'
      />
    </div>
  );
}

export default DetailsUpdateSuccessPage
