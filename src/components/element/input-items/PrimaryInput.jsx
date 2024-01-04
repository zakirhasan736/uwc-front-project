'use client'
import { Image } from '@utils/packages'
import { useState } from 'react'

const PrimaryInput = ({
  label = '',
  placeholder = '',
  inputType = '',
  iconWidth = '',
  iconHeight = '',
  inputClasses = '',
  onChange,
  name,
  getInputIcon = '' // Pass the function for determining the icon
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => setShowPassword(prev => !prev)

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
        {getInputIcon && ( // Check if getInputIcon function is provided
          <span className='input-field-icons absolute bottom-0 left-[15px] top-0 my-auto flex items-center'>
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
          className='form-input-field h-[45px] w-full rounded-[10px] border border-[#EDEDED] bg-[#F6F6F6] px-[49px] py-4 text-left font-primary text-body-text font-normal leading-none text-primary-color placeholder:font-primary placeholder:text-body-text placeholder:text-accend-color-2'
          placeholder={placeholder}
          onChange={onChange}
          name={name}
        />
        {inputType === 'password' && (
          <button
            type='button'
            onClick={togglePasswordVisibility}
            className='input-field-right-btn absolute bottom-0 right-5 top-0 my-auto block'
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
  )
}

export default PrimaryInput
