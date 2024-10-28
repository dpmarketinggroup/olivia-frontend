import React, { FunctionComponent } from "react";

interface BigArrowProps {
  opacity: string;
  className?: string;
  onClick?: () => void;
}

const BigRightArrow: FunctionComponent<BigArrowProps> = ({
  opacity,
  className = "",
  onClick
}) => {
  return (
    <svg onClick={onClick} className={className + ' cursor-pointer'} width="142" height="48" viewBox="0 0 142 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity={opacity} d="M116.254 1.43848L139 24.1841M139 24.1841L116.254 46.9297M139 24.1841H0.681763" stroke="black" stroke-width="3" />
    </svg>


  );
};

export default BigRightArrow;
