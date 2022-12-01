import React from "react";

interface FilterButtonProps {
    variant: 'square' | 'rectangle';
    icon?: JSX.Element;
    onClick?: () => void;
    children?: React.ReactNode,
    clicked?: boolean;
    className?: string;
}

const FilterButton = ({variant, icon, onClick, children, clicked = false, className}: FilterButtonProps) => {
    function getClass() {
        switch (variant) {
            case "rectangle":
                return 'h-[50px] px-[15px] leading-[17px]'
            case "square":
                return 'w-[70px] h-[70px] flex items-center justify-center font-bold'
        }
    }

    return (
        <button onClick={onClick}
                className={`${getClass()} ${clicked ? 'bg-white text-[#0E3F3B]' : 'border-white text-white'} border-2`}>
            <div
                className={`${variant === 'square' && 'max-w-[20px]'} ${className} flex items-center gap-[10px]`}>{variant === 'rectangle' && icon}{children}</div>
        </button>
    );
};

export default FilterButton;
