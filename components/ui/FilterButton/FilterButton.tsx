import React from "react";

interface FilterButtonProps {
    variant: 'square' | 'rectangle';
    icon?: JSX.Element;
    onClick?: () => void;
    children?: React.ReactNode
}
const FilterButton = ({variant, icon, onClick, children}: FilterButtonProps) => {
    function getClass() {
        switch (variant) {
            case "rectangle":
                return 'h-[40px] px-[15px]'
            case "square":
                return 'w-[70px] h-[70px] flex items-center justify-center font-bold'
        }
    }
    return (
        <button onClick={onClick} className={`${getClass()} border-2 border-white text-white`}>
            <div className={`${variant === 'square' && 'max-w-[20px]'} flex items-center gap-[10px]`}>{variant === 'rectangle' && icon}{children}</div>
        </button>
    );
};

export default FilterButton;
