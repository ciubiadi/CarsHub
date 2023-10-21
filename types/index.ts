export interface ICustomButtonProps {
    title: string;
    customStyles?: string;
    btnType?: 'button' | 'submit'; 
}

export interface ICustomFilter {
    title: string;
}

export interface ISearchManufacturer {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
}