import React, { FunctionComponent } from "react";

interface ParkingFlagProps {
  opacity: string;
  className?: string;
  onClick?: () => void;
}

const ParkingFlag: FunctionComponent<ParkingFlagProps> = ({
  opacity,
  className = "",
  onClick
}) => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_699_4483" maskUnits="userSpaceOnUse" x="8" y="8" width="32" height="32">
        <path d="M8 8H40V40H8V8Z" fill="white" />
      </mask>
      <g mask="url(#mask0_699_4483)">
        <path d="M20.2497 24V18.375H24.9372C26.4903 18.375 27.7497 19.6344 27.7497 21.1875C27.7497 22.7406 26.4903 24 24.9372 24H20.2497Z" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M24.9372 14.625H16.4997V33.375H20.2497V27.75H24.9372C28.5616 27.75 31.4997 24.8119 31.4997 21.1875C31.4997 17.5631 28.5616 14.625 24.9372 14.625Z" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M24.6247 39.375C24.6247 39.7201 24.3448 40 23.9997 40C23.6545 40 23.3747 39.7201 23.3747 39.375C23.3747 39.0299 23.6545 38.75 23.9997 38.75C24.3448 38.75 24.6247 39.0299 24.6247 39.375Z" fill="white" />
        <path d="M21.1872 39.375H10.4997C9.46407 39.375 8.62469 38.5356 8.62469 37.5V10.5C8.62469 9.46437 9.46407 8.625 10.4997 8.625H37.4997C38.5353 8.625 39.3747 9.46437 39.3747 10.5V37.5C39.3747 38.5356 38.5353 39.375 37.4997 39.375H26.8122" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </g>
    </svg>




  );
};

export default ParkingFlag;
