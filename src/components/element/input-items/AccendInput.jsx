import React from 'react'

const AccendInput = ({
  label = '',
  placeholder = '',
  inputType = '',
  inputClasses = '',
  onChange,
  name,
}) => {
  return (
    <div className={`form-input-group ${inputClasses}`}>
      {label && (
        <label
          className='mb-3 block text-left font-primary text-body-text font-medium capitalize leading-none text-primary-color'
          htmlFor='password'
        >
          {label}
        </label>
      )}
      <div className='input-group-box relative flex items-center'>
        <input
          type={inputType}
          className='form-input-field h-[45px] w-full rounded-[10px] border border-[#EDEDED] bg-[#F6F6F6] px-[22px] py-4 text-left font-primary text-body-text font-normal leading-none text-primary-color placeholder:font-primary placeholder:text-body-text placeholder:text-accend-color-2'
          placeholder={placeholder}
          name={name}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default AccendInput
