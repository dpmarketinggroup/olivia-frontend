import React, {FunctionComponent} from "react";

interface PaperIconProps{
  classname?: string
}

const PaperIcon: FunctionComponent<PaperIconProps> = ({classname}) => {
  return (
    <svg
        className={classname}
      width="46"
      height="42"
      viewBox="0 0 46 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.75 41.25H38C42.2 41.025 45.5 37.575 45.5 33.375V20.25H34.25V6C34.25 3.075 31.925 0.75 29 0.75H5.75C2.825 0.75 0.5 3.075 0.5 6V33C0.5 37.575 4.175 41.25 8.75 41.25ZM41 24.75V33.375C41 35.25 39.5 36.75 37.625 36.75C35.75 36.75 34.25 35.25 34.25 33.375V24.75H41ZM5 6C5 5.55 5.3 5.25 5.75 5.25H29C29.45 5.25 29.75 5.55 29.75 6V33.375C29.75 34.575 29.975 35.7 30.5 36.75H8.75C6.65 36.75 5 35.1 5 33V6Z"
        fill="#476761"
      />
      <path d="M25.25 9.75H9.5V14.25H25.25V9.75Z" fill="#476761" />
      <path d="M25.25 18.75H9.5V23.25H25.25V18.75Z" fill="#476761" />
      <path d="M18.5 27.75H9.5V32.25H18.5V27.75Z" fill="#476761" />
    </svg>
  );
};

export default PaperIcon;
