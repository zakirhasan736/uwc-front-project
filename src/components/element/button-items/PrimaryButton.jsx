import React from 'react';

const PrimaryButton = ({ btnText = '', btnClasses = '',handleSubmit }) => {
  return (
    <button
      type='button'
      className={`uwc-primary-button rounded-[10px]  text-uwc-white text-center block text-body-secondary-text font-primary font-bold leading-none h-[45px] w-full ${btnClasses}`}
      onClick={handleSubmit}
    >
      {btnText}
    </button>
  );
};

export default PrimaryButton;
