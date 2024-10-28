import React, { FunctionComponent } from "react";

interface BigArrowProps {
  opacity: string;
  className?: string;
  onClick?: () => void;
}

const BigLeftArrow: FunctionComponent<BigArrowProps> = ({
  opacity,
  className = "",
  onClick
}) => {
  return (
    <svg onClick={onClick} className={'cursor-pointer ' + className} width="141" height="48" viewBox="0 0 141 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity={opacity} d="M25.1092 46.9297L2.36356 24.1841M2.36356 24.1841L25.1092 1.43847M2.36356 24.1841L140.682 24.1841" stroke="black" stroke-width="3" />
    </svg>

  );
};

export default BigLeftArrow;
