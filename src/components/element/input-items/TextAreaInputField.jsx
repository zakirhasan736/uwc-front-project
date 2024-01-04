import React from 'react';

const TextAreaInputField = ({
  label = '',
  placeholder = '',
  inputType = '',
  inputClasses = '',
  onChange,
  name
}) => {
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
        <textarea
          type={inputType}
          className='form-textarea-field h-[92px] px-[22px] bg-[#F6F6F6] w-full border border-[#EDEDED] rounded-[10px] text-body-text text-left font-primary font-normal leading-none text-primary-color placeholder:text-accend-color-2 placeholder:font-primary placeholder:text-body-text py-4'
          placeholder={placeholder}
          name={name}
          onChange={onChange}
        ></textarea>
      </div>
    </div>
  );
};

export default TextAreaInputField;
