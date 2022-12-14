import React, {FunctionComponent} from "react";

interface CheckProps{
  classname?: string
}

const Check:FunctionComponent<CheckProps> = ({classname}) => {
  return (
    <svg
        className={classname}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 0.75C11.175 0.75 0.75 11.175 0.75 24C0.75 36.825 11.175 47.25 24 47.25C36.825 47.25 47.25 36.825 47.25 24C47.25 11.175 36.825 0.75 24 0.75ZM24 42.75C13.65 42.75 5.25 34.35 5.25 24C5.25 13.65 13.65 5.25 24 5.25C34.35 5.25 42.75 13.65 42.75 24C42.75 34.35 34.35 42.75 24 42.75Z"
        fill="black"
        fill-opacity="0.2"
      />
      <path
        d="M21.7498 26.8498L16.5748 21.6748L13.4248 24.8248L20.1748 31.5748C21.0748 32.4748 22.4998 32.4748 23.3248 31.5748L35.3248 19.5748L32.1748 16.4248L21.7498 26.8498Z"
        fill="black"
        fill-opacity="0.2"
      />
    </svg>
  );
};

export default Check;
