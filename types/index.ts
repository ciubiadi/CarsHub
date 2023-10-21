import { MouseEventHandler } from "react";

export interface ICustomButtonProps {
    title: string;
    customStyles?: string;
    btnType?: 'button' | 'submit'; 
    rightIcon?: string;
    textStyles?: string;
    isDisabled?: boolean;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ICustomFilter {
    title: string;
}

export interface ISearchManufacturer {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
}

// take from the Cars API Ninja
export interface ICar {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}