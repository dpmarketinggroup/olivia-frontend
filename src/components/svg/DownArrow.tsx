import React, { FunctionComponent } from "react";

interface ArrowProps{
    fill?: string;
  }

const DownArrowIcon: FunctionComponent<ArrowProps> = ({
  fill = "#476761",
}) => {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0.5L5 7.5L10 0.5H0Z"
      />
    </svg>
  );
};

export default DownArrowIcon;
