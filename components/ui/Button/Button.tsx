import Link from "next/link";
import React from "react";

interface ButtonProps {
    variant: 'unstyled' | 'outlined' | 'filled';
    className?: string;
    href?: string;
    children: React.ReactNode;
}

const Button = ({variant, href, className, children}: ButtonProps) => {

    const getClass = () => {
        switch (variant) {
            case "unstyled":
                return '';
            case "filled":
                return 'h-[40px] px-[20px] bg-green2 text-white font-medium'
            case "outlined":
                return 'h-[40px] border border-green2 text-green2 h-[40px] px-[20px] font-medium'
        }
    }

    return (
        <Link href={href || '/'}>
            <button className={`${getClass()} ${className}`}>{children}</button>
        </Link>
    );
};

export default Button;
