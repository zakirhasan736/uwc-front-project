'use client';

import React from 'react';
import PrimaryButton from '@/components/element/button-items/PrimaryButton';
import PrimaryInput from '@/components/element/input-items/PrimaryInput';
import AccendInput from '@/components/element/input-items/AccendInput';
import TextAreaInputField from '@/components/element/input-items/TextAreaInputField';
import DropDownSelectItem from '@/components/element/dropdown-items/DropdownSelectItem';
import DropzoneComponent from '@/components/element/dropdown-items/DropzoneComponent';
import { updateFormData } from '@/redux/features/personalDetails/slice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const PersonalDetailsPage = () => {
  const cuntryOption = [{ text: 'UK' }, { text: 'US' }, { text: 'FR' }];

  const dispatch = useDispatch();
  const router = useRouter();

  const { submitted, ...formData } = useSelector(
    state => state.personalDetails
  );

  const handleInputChange = e => {
    const { name, value } = e.target;
    dispatch(updateFormData({ name, value }));
  };

  const handleSubmit = () => {
    if (submitted) {
          // before check all data is valid by backend api
      router.push('/update-success');
    } else {
      return;
    }
  };

  return (
    <div className='auth-form-screen box-shadow max-w-[537px]  mx-auto mt-[58px] bg-uwc-white px-[38px] pt-9 pb-10 rounded-[15px] border border-accend-color-4'>
      <h1 className='auth-screen-title'>Enter Personal Details</h1>
      <form className='screens-form-main-box mt-[65px]'>
        <div className='input-gragdrop-field-group'>
          <label
            htmlFor=''
            className='mb-3 block capitalize text-body-text text-left font-primary font-medium leading-none text-primary-color'
          >
            Profile picture
          </label>
          <DropzoneComponent onChange={handleInputChange} />
        </div>
        <AccendInput
          label='Full Name'
          placeholder='John Doe'
          inputType='text'
          name='fullName'
          onChange={handleInputChange}
        />
        <DropDownSelectItem
          DrpPlaceholder='Select a Country'
          dropDownLabel='Country'
          options={cuntryOption}
          heightClass='mt-[35px]'
          onChange={handleInputChange}
        />
        <AccendInput
          label='Role'
          placeholder='UWC Admin'
          inputType='desable'
          name='role'
          onChange={handleInputChange}
          disabled
        />

        <AccendInput
          label='Phone Number'
          placeholder='41251512344'
          inputType='text'
          name='phoneNumber'
          onChange={handleInputChange}
        />
        <TextAreaInputField
          label='Address'
          placeholder='49 Featherstone Street EC1Y 8SY UNITED KINGDOM'
          inputType='text'
          name='address'
          onChange={handleInputChange}
        />

        <PrimaryButton
          btnText='Confirm'
          btnClasses='bg-accend-color mt-[35px]'
          handleSubmit={handleSubmit}
        />
      </form>
    </div>
  );
};

export default PersonalDetailsPage;
