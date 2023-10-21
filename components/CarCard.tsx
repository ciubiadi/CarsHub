'use client';
import React from 'react'
import { useState } from 'react'
import Image from 'next/image';
import { ICar } from '@/types';
import { calculateCarRent } from '@/utils';

interface ICarCard {
    car: ICar;
}

const CarCard = ({ car } : ICarCard) => {
    const { city_mpg, year, make, model, transmission, drive } = car;
    
    const carRent = calculateCarRent(city_mpg, year);

    return (
        <div>
            <div>
                <h2>
                    {make} {model}
                </h2>
            </div>

            <p>
                <span>
                    {carRent}
                </span>
            </p>

            <div>
                <Image 
                    src="/hero.png"
                    width={50}
                    height={50}
                    alt="car model"
                />
            </div>

            <div>
                <div>
                    <Image 
                        src="/steering-wheel.svg" 
                        alt="transmission"
                        width={20} 
                        height={20}
                    />
                    <p>
                        {transmission === 'a' ? 'Automatic' : 'Manual'}
                    </p>
                </div>
                <div>
                    <Image 
                        src="/tire.svg" 
                        alt="drive type"
                        width={20} 
                        height={20}
                    />
                    <p>
                        {drive.toUpperCase()}
                    </p>
                </div>
                <div>
                    <Image 
                        src="/gas.svg" 
                        alt="consumption"
                        width={20} 
                        height={20}
                    />
                    <p>
                        {city_mpg} MPG
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CarCard