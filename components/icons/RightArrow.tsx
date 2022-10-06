import React, {FunctionComponent} from "react";

interface RightArrowProps{
  stroke?:string
  className?: string
}

const RightArrowIcon: FunctionComponent<RightArrowProps> = ({stroke= "white", className}) => {
  return (
    <svg
        className={"cursor-pointer " + className}
      width="7"
      height="10"
      viewBox="0 0 7 10"
      fill='none'
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.5 1L5.5 5L1.5 9" stroke={stroke} strokeWidth="1.5" />
    </svg>
  );
};

export default RightArrowIcon;
