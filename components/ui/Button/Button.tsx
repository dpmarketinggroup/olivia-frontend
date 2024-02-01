import Link from "next/link";
import React, {HTMLAttributeAnchorTarget} from "react";

interface ButtonProps {
    variant: 'unstyled' | 'outlined' | 'filled';
    className?: string;
    href?: string;
    children: React.ReactNode;
    height?: number;
    onClick?: () => void;
    target?: HTMLAttributeAnchorTarget
}
const Button = ({variant, href, className, children, height = 40, onClick, target}: ButtonProps) => {

    const getClass = () => {
        switch (variant) {
            case "unstyled":
                return '';
            case "filled":
                return 'px-[20px] bg-green2 text-white font-medium hover:bg-primary'
            case "outlined":
                return 'border border-green2 text-green2 h-[40px] px-[20px] font-medium hover:border-green2 hover:bg-green2 hover:text-white'
        }
    }

    return (
        <Link href={href || '/'} target={target}>
            <button onClick={onClick} style={{height}} className={`${className} ${getClass()} `}>{children}</button>
        </Link>
    );
};

export default Button;
