import React, { FunctionComponent } from "react";

interface CalendarIconProps {
  fill?: string;
  width?: string;
  height?: string;
}

const CalendarIcon: FunctionComponent<CalendarIconProps> = ({
  width = "36",
  height = "36",
  fill = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6413 31.3764H7.54192C6.75354 31.3764 5.99745 31.0632 5.43998 30.5057C4.88252 29.9482 4.56934 29.1922 4.56934 28.4038V10.5683C4.56934 9.77991 4.88252 9.02382 5.43998 8.46635C5.99745 7.90888 6.75354 7.5957 7.54192 7.5957H25.3774C26.1658 7.5957 26.9219 7.90888 27.4793 8.46635C28.0368 9.02382 28.35 9.77991 28.35 10.5683V16.5134M26.8637 21.4677V26.9175L31.3226 23.4495"
        stroke="#389653"
        stroke-width="2.97258"
        stroke-linecap="square"
        stroke-linejoin="bevel"
      />
      <path
        d="M22.4048 4.62329V10.5685M10.5145 4.62329V10.5685M4.56934 16.5136H28.35M20.9185 26.9177C20.9185 28.4944 21.5449 30.0066 22.6598 31.1215C23.7748 32.2365 25.2869 32.8628 26.8637 32.8628C28.4405 32.8628 29.9526 32.2365 31.0676 31.1215C32.1825 30.0066 32.8089 28.4944 32.8089 26.9177C32.8089 25.3409 32.1825 23.8287 31.0676 22.7138C29.9526 21.5989 28.4405 20.9725 26.8637 20.9725C25.2869 20.9725 23.7748 21.5989 22.6598 22.7138C21.5449 23.8287 20.9185 25.3409 20.9185 26.9177Z"
        stroke="#389653"
        stroke-width="2.97258"
        stroke-linecap="square"
        stroke-linejoin="bevel"
      />
    </svg>
  );
};

export default CalendarIcon;
