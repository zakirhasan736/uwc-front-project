import React from 'react';
import PrimaryButton from '@/components/element/button-items/PrimaryButton';
import PrimaryInput from '@/components/element/input-items/PrimaryInput';
import AccendInput from '@/components/element/input-items/AccendInput';
import TextAreaInputField from '@/components/element/input-items/TextAreaInputField';
import DropDownSelectItem from '@/components/element/dropdown-items/DropdownSelectItem';
import DropzoneComponent from '@/components/element/dropdown-items/DropzoneComponent';

const PersonalDetailsPage = () => {
  const cuntryOption = [{ text: 'UK' }, { text: 'UK' }, { text: 'UK' }];
  return (
    <div className='auth-form-screen box-shadow max-w-[537px]  mx-auto mt-[58px] bg-uwc-white px-[38px] pt-9 pb-10 rounded-[15px] border border-accend-color-4'>
      <h1 className='auth-screen-title'>Enter Personal Details</h1>
      <form className='screens-form-main-box mt-[65px]'>
        <div className="input-gragdrop-field-group">
          <DropzoneComponent />
        </div>
        <AccendInput
          label='Full Name'
          placeholder='John Doe'
          inputType='text'
        />
        <DropDownSelectItem
          DrpPlaceholder='Select a Country'
          dropDownLabel='Country'
          options={cuntryOption}
          heightClass='mt-[35px]'
        />
        <AccendInput
          label='Role'
          placeholder='UWC Admin'
          inputType='desable'
          disabled
        />

        <AccendInput
          label='Phone Number'
          placeholder='41251512344'
          inputType='text'
        />
        <TextAreaInputField
          label='Address'
          placeholder='49 Featherstone Street EC1Y 8SY UNITED KINGDOM'
          inputType='text'
        />

        <PrimaryButton
          btnText='Confirm'
          btnClasses='bg-accend-color mt-[35px]'
        />
      </form>
    </div>
  );
};

export default PersonalDetailsPage;
