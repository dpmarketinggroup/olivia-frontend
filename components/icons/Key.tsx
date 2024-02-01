import React, {FunctionComponent} from "react";

interface KeyIconProps{
  classname?: string
}

const KeyIcon:FunctionComponent<KeyIconProps> = ({classname}) => {
  return (
    <svg
        className={classname}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 3C23.4 3 27 6.55 27.05 10.95C27.1 15.35 23.5 19 19.05 19C17.9 19 16.75 18.75 15.7 18.3L7 27H3V23L11.7 14.3C9.85 10.3 11.65 5.55 15.65 3.75C16.7 3.25 17.85 3 19 3ZM19 0C12.9 0 8 4.9 8 11C8 11.85 8.1 12.65 8.3 13.45L0.9 20.9L0 21.75V30H8.25L9.15 29.1L16.55 21.7C17.35 21.9 18.2 22 19 22C25.1 22 30 17.1 30 11C30 4.9 25.1 0 19 0Z"
        fill="#476761"
      />
      <path
        d="M20.75 11C21.7165 11 22.5 10.2165 22.5 9.25C22.5 8.2835 21.7165 7.5 20.75 7.5C19.7835 7.5 19 8.2835 19 9.25C19 10.2165 19.7835 11 20.75 11Z"
        fill="#476761"
      />
    </svg>
  );
};

export default KeyIcon;
