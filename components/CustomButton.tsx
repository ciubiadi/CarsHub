"use client"
import { ICustomButton } from '@/types'
import Image from 'next/image'
import React from 'react'

const CustomButton = ( {title, customStyles, btnType, textStyles, rightIcon, handleClick }: ICustomButton ) => {
  return (
    <button
        disabled={false}
        onClick={handleClick}
        type={btnType || "button"}
        className={`custom-btn ${customStyles}`}
    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
        {rightIcon && (
            <div className='relative w-6 h-6'>
                <Image 
                    src={rightIcon}
                    alt="right icon"
                    fill
                    className='object-contain'
                />
            </div>
        )}
    </button>
  )
}

export default CustomButton