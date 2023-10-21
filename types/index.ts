import { MouseEventHandler } from "react";

export interface ICustomButton {
    title: string;
    customStyles?: string;
    btnType?: 'button' | 'submit'; 
    rightIcon?: string;
    textStyles?: string;
    isDisabled?: boolean;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface IOptionProps {
    title: string;
    value: string;
}

export interface ICustomFilter {
    title: string;
    options: IOptionProps[];
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

export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
  }

export interface HomeProps {
    searchParams: FilterProps;
  }