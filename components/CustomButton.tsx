"use client"
import { ICustomButtonProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const CustomButton = ( {title, customStyles, btnType}: ICustomButtonProps ) => {
  return (
    <button
        disabled={false}
        onClick={() => {}}
        type={btnType || "button"}
        className={`custom-btn ${customStyles}`}
    >
        <span className='flex-1'>
            {title}
        </span>
    </button>
  )
}

export default CustomButton