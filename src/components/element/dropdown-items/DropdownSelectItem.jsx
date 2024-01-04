'use client'
import React, { useState, useEffect, useRef } from 'react'

const DropDownSelectItem = ({
  DrpPlaceholder,
  heightClass = '',
  dropDownLabel = '',
  onChange,
  options = [],
}) => {
  const [selectedItem, setSelectedItem] = useState({
    text: '',
    statusIcon: '',
  })
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const handleSelect = (option) => {
    const data = {
      target: {
        name: 'country',
        value: option.text,
      },
    }
    onChange(data)
    setSelectedItem(option)
    setIsDropdownOpen(false)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      window.addEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isDropdownOpen])

  return (
    <div className='dropdown-select-item-with-icon relative' ref={dropdownRef}>
      <div className={`selected-item ${heightClass}`} onClick={toggleDropdown}>
        <h6 className='dropdown-label-title mb-3 block text-left font-primary text-body-text font-medium capitalize leading-none text-primary-color'>
          {dropDownLabel}
        </h6>
        <div
          className={`select-items-wrap  flex h-[45px] w-full  items-center justify-between rounded-[10px] border border-[#EDEDED] bg-[#F6F6F6] px-[22px] py-4 text-left font-primary text-body-text font-normal leading-none text-primary-color placeholder:font-primary placeholder:text-body-text placeholder:text-accend-color-2 ${
            isDropdownOpen ? 'active-open' : ''
          }`}
        >
          {selectedItem.text ? (
            <>
              <span
                className={`dropdown-selected-items text-primary-color  ${
                  selectedItem.text ? 'selected' : ''
                }`}
              >
                {selectedItem.statusIcon}
                {selectedItem.text}
              </span>
              <button className={isDropdownOpen ? 'active-item' : ''}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='15'
                  height='8'
                  viewBox='0 0 15 8'
                  fill='none'
                >
                  <path
                    d='M0.334896 1.40445L6.73261 7.39531C6.73261 7.39531 7.5393 8.35378 8.52549 7.29698L14.4676 1.64647C14.7184 1.40766 14.8508 1.07026 14.7837 0.740991C14.739 0.520166 14.6068 0.299588 14.2902 0.177838C13.4993 -0.126042 13.0248 0.360215 13.0248 0.360215L7.56904 5.48651L2.07487 0.360215C2.07487 0.360215 1.42452 -0.209345 0.791801 0.177838C0.159082 0.565021 0.255675 1.33027 0.334896 1.40445Z'
                    fill='#272727'
                  />
                </svg>
              </button>
            </>
          ) : (
            <>
              <span className='default-text text-primary-color'>
                {DrpPlaceholder}
              </span>
              <button className={isDropdownOpen ? 'active-item' : ''}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='15'
                  height='8'
                  viewBox='0 0 15 8'
                  fill='none'
                >
                  <path
                    d='M0.334896 1.40445L6.73261 7.39531C6.73261 7.39531 7.5393 8.35378 8.52549 7.29698L14.4676 1.64647C14.7184 1.40766 14.8508 1.07026 14.7837 0.740991C14.739 0.520166 14.6068 0.299588 14.2902 0.177838C13.4993 -0.126042 13.0248 0.360215 13.0248 0.360215L7.56904 5.48651L2.07487 0.360215C2.07487 0.360215 1.42452 -0.209345 0.791801 0.177838C0.159082 0.565021 0.255675 1.33027 0.334896 1.40445Z'
                    fill='#272727'
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
      {isDropdownOpen && options.length > 0 && (
        <div className='options-dropdown-screen absolute left-0 top-[77px]  z-50 w-full rounded-[10px] border border-[#EDEDED] bg-[#F6F6F6] py-5'>
          <ul>
            {options.map((item, index) => (
              <li
                className={`options-dropdown-items px-4 py-2 font-primary text-body-text font-normal ${
                  item === selectedItem ? 'selected' : ''
                }`}
                key={index}
                onClick={() => handleSelect(item)}
              >
                <div className='select-item-main'>
                  <span className='visibility-status'>{item.statusIcon}</span>
                  {item.text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropDownSelectItem
