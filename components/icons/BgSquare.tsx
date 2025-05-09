import React, { FunctionComponent } from "react";

interface BgSquareProps {
  opacity?: string;
  className?: string;
  onClick?: () => void;
}

const BgSquare: FunctionComponent<BgSquareProps> = ({
  opacity,
  className = "",
  onClick
}) => {
  return (
    <svg width="318" height="317" viewBox="0 0 318 317" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.4" d="M317.519 126.8L317.519 63.4004L254.119 63.4004L254.119 126.8L317.519 126.8Z" fill="white" />
      <path opacity="0.4" d="M254.119 63.4L254.119 0L190.719 -2.7713e-06L190.719 63.4L254.119 63.4Z" fill="white" />
      <path opacity="0.3" d="M190.719 63.4L190.719 0L127.319 -2.7713e-06L127.319 63.4L190.719 63.4Z" fill="white" />
      <path opacity="0.2" d="M190.719 126.8L190.719 63.4004L127.319 63.4004L127.319 126.8L190.719 126.8Z" fill="white" />
      <path opacity="0.1" d="M127.318 126.8L127.318 63.4004L63.9184 63.4004L63.9184 126.8L127.318 126.8Z" fill="white" />
      <path opacity="0.1" d="M254.119 253.6L254.119 190.2L190.719 190.2L190.719 253.6L254.119 253.6Z" fill="white" />
      <path opacity="0.2" d="M127.319 63.4L127.319 0L63.9186 -2.7713e-06L63.9186 63.4L127.319 63.4Z" fill="white" />
      <path opacity="0.1" d="M63.9186 63.4L63.9186 0L0.518581 -2.7713e-06L0.518579 63.4L63.9186 63.4Z" fill="white" />
      <path opacity="0.3" d="M254.119 126.8L254.119 63.4004L190.719 63.4004L190.719 126.8L254.119 126.8Z" fill="white" />
      <path opacity="0.2" d="M254.119 190.199L254.119 126.799L190.719 126.799L190.719 190.199L254.119 190.199Z" fill="white" />
      <path opacity="0.1" d="M190.719 190.199L190.719 126.799L127.319 126.799L127.319 190.199L190.719 190.199Z" fill="white" />
      <path opacity="0.1" d="M317.519 317L317.519 253.6L254.119 253.6L254.119 317L317.519 317Z" fill="white" />
      <path opacity="0.3" d="M317.519 190.199L317.519 126.799L254.119 126.799L254.119 190.199L317.519 190.199Z" fill="white" />
      <path opacity="0.2" d="M317.519 253.6L317.519 190.2L254.119 190.2L254.119 253.6L317.519 253.6Z" fill="white" />
      <path opacity="0.5" d="M317.519 63.4L317.519 0L254.119 -2.7713e-06L254.119 63.4L317.519 63.4Z" fill="white" />
    </svg>


  );
};

export default BgSquare;
