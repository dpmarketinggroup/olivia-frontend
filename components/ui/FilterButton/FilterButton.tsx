import React from "react";

interface FilterButtonProps {
    variant: 'square' | 'rectangle';
    icon?: JSX.Element;
    onClick?: () => void;
    children?: React.ReactNode,
    clicked?: boolean;
    className?: string;
}

const FilterButton = ({ variant, icon, onClick, children, clicked = false, className }: FilterButtonProps) => {
    function getClass() {
        switch (variant) {
            case "rectangle":
                return 'py-2 px-4 flex flex-row  justify-center font-medium rounded-3xl drop-shadow-lg max-h-[40px]'
            case "square":
                return 'py-2 px-4 flex flex-row  justify-center font-medium rounded-3xl drop-shadow-lg max-h-[40px]'
        }
    }

    return (
        <button onClick={onClick}
            className={`${getClass()} ${clicked ? 'bg-primary text-white' : ' text-primary bg-white'} `}>
            <div
                className={`${variant === 'square'} ${className} flex items-center gap-[10px]`}>{variant === 'rectangle' && icon}{children}</div>
        </button>
    );
};

export default FilterButton;
