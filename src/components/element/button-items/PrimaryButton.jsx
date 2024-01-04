import React from 'react'

const PrimaryButton = ({ btnText = '', btnClasses = '', handleSubmit }) => (
  <button
    type='button'
    className={`uwc-primary-button block  h-[45px] w-full rounded-[10px] text-center font-primary text-body-secondary-text font-bold leading-none text-uwc-white ${btnClasses}`}
    onClick={handleSubmit}
  >
    {btnText}
  </button>
)

export default PrimaryButton
