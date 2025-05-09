import React, { FunctionComponent } from "react";

interface TreeProps {
  opacity?: string;
  className?: string;
  onClick?: () => void;
}

const Tree: FunctionComponent<TreeProps> = ({
  opacity,
  className = "",
  onClick
}) => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_699_4510" maskUnits="userSpaceOnUse" x="8" y="8" width="32" height="32">
        <path d="M8 8H40V40H8V8Z" fill="white" />
      </mask>
      <g mask="url(#mask0_699_4510)">
        <path d="M16.3164 24.6978V39.375" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <path d="M16.3164 30.8582L19.3487 27.8258" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16.3165 28.1626L14.03 25.8761" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <mask id="mask1_699_4510" maskUnits="userSpaceOnUse" x="8" y="8" width="32" height="32">
        <path d="M8 8H40V40H8V8Z" fill="white" />
      </mask>
      <g mask="url(#mask1_699_4510)">
        <path d="M24 38.9966V14.6249" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <path d="M24.0135 18.7722L26.104 16.6817" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M23.8802 21.5935L21.3841 19.0974" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <mask id="mask2_699_4510" maskUnits="userSpaceOnUse" x="8" y="8" width="32" height="32">
        <path d="M8 8H40V40H8V8Z" fill="white" />
      </mask>
      <g mask="url(#mask2_699_4510)">
        <path d="M36.3031 24.9018C36.4032 24.5171 36.4566 24.1135 36.4566 23.6975C36.4566 21.0636 34.3214 18.9284 31.6875 18.9284C29.0536 18.9284 26.9184 21.0636 26.9184 23.6975C26.9184 24.4574 27.0964 25.1757 27.4126 25.8133C25.4531 26.2983 24 28.0677 24 30.1772C24 32.6603 26.013 34.6733 28.4962 34.6733C29.5509 34.6733 30.5201 34.3092 31.2869 33.7011C32.1273 34.3125 33.1616 34.6733 34.2804 34.6733C37.0941 34.6733 39.375 32.3924 39.375 29.5788C39.375 27.4838 38.1104 25.6845 36.3031 24.9018Z" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M31.2868 26.5831V39.375" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M31.2868 29.4436L33.9296 26.8008" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M31.2869 31.8313L28.7988 29.3432" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.625 39.375H39.375" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M39.3748 11.7291C39.3748 13.4434 37.985 14.8333 36.2706 14.8333C34.5563 14.8333 33.1665 13.4434 33.1665 11.7291C33.1665 10.0147 34.5563 8.62488 36.2706 8.62488C37.985 8.62488 39.3748 10.0147 39.3748 11.7291Z" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.1369 29.2295C10.2476 32.111 13.0432 34.1555 16.3163 34.1555C20.2324 34.1555 23.465 31.2288 23.946 27.4433" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M18.6117 19.1207C17.8868 18.8944 17.1158 18.7724 16.3163 18.7724C13.0432 18.7724 10.2475 20.817 9.1369 23.6987" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M29.3383 19.5464C29.4056 19.0572 29.4404 18.5575 29.4404 18.0498C29.4404 14.0224 27.2522 10.5063 24 8.62498C20.7478 10.5063 18.5596 14.0224 18.5596 18.0498C18.5596 22.0772 20.7478 25.5932 24 27.4746C25.1833 26.7901 26.2258 25.8891 27.0733 24.8259" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </g>
    </svg>


  );
};

export default Tree;
