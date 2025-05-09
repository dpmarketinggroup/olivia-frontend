import React, { FunctionComponent } from "react";

interface CheckIconProps {
  opacity?: string;
  className?: string;
  onClick?: () => void;
}

const CheckIcon: FunctionComponent<CheckIconProps> = ({
  opacity,
  className = "",
  onClick
}) => {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.66675 10.8907L4.47141 8.69539L3.52875 9.63806L6.66675 12.7761L13.1381 6.30473L12.1954 5.36206L6.66675 10.8907Z" fill="#0E3F3B" />
    </svg>



  );
};

export default CheckIcon;
