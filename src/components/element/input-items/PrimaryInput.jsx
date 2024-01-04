'use client';
import {Image} from '@utils/packages';
import { useState } from 'react';

const PrimaryInput = ({
  label = '',
  placeholder = '',
  inputType = '',
  iconWidth = '',
  iconHeight = '',
  inputClasses = '',
  getInputIcon = '' // Pass the function for determining the icon
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(prev => !prev);

  return (
    <div className={`form-input-group ${inputClasses}`}>
      {label && (
        <label
          className='mb-3 block capitalize text-body-text text-left font-primary font-medium leading-none text-primary-color'
          htmlFor='password'
        >
          {label}
        </label>
      )}
      <div className='input-group-box relative flex items-center'>
        {getInputIcon && ( // Check if getInputIcon function is provided
          <span className='input-field-icons absolute top-0 bottom-0 my-auto flex items-center left-[15px]'>
            <Image
              src={getInputIcon}
              alt='inputs icons'
              width={iconWidth}
              height={iconHeight}
            />
          </span>
        )}
        <input
          type={showPassword ? 'text' : inputType}
          className='form-input-field h-[45px] px-[49px] bg-[#F6F6F6] w-full border border-[#EDEDED] rounded-[10px] text-body-text text-left font-primary font-normal leading-none text-primary-color placeholder:text-accend-color-2 placeholder:font-primary placeholder:text-body-text py-4'
          placeholder={placeholder}
        />
        {inputType === 'password' && (
          <button
            type='button'
            onClick={togglePasswordVisibility}
            className='input-field-right-btn absolute top-0 bottom-0 my-auto block right-5'
          >
              <Image
                src='/images/icons/eye.svg'
                alt='inputs icons'
                width={21}
                height={13}
              />
          </button>
        )}
      </div>
    </div>
  );
};

export default PrimaryInput;
