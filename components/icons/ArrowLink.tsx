import React, { FunctionComponent } from "react";


interface ArrowLinkProps {
  fill?: string;
}
const ArrowLink: FunctionComponent<ArrowLinkProps> = ({ fill = "#087168", }) => {
  return (
    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_621_846)">
        <path d="M0.689959 12.1316L10.3893 2.43231V8.08159H11.2684V0.931641H4.11843V1.81071H9.76769L0.0683594 11.51L0.689959 12.1316Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_621_846">
          <rect width="11.2" height="11.2" fill="white" transform="translate(0.0683594 0.931641)" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default ArrowLink;
