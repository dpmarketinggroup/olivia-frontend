import React, { FunctionComponent } from "react";

interface PeoplePointsProps {
  opacity?: string;
  className?: string;
  onClick?: () => void;
}

const PeoplePoints: FunctionComponent<PeoplePointsProps> = ({
  opacity,
  className = "",
  onClick
}) => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_699_4456" maskUnits="userSpaceOnUse" x="8" y="8" width="32" height="32">
        <path d="M8 8H40V40H8V8Z" fill="white" />
      </mask>
      <g mask="url(#mask0_699_4456)">
        <path d="M29.7146 12.7827C30.265 14.4884 30.0404 16.4059 28.9862 17.9764L24.4346 24.758C24.2272 25.067 23.7728 25.067 23.5654 24.758L19.0137 17.9764C17.4145 15.5937 17.7245 12.4126 19.7536 10.3834H19.7537C21.4023 8.73468 23.7711 8.24506 25.8476 8.91443" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M23.416 14.1249H24.5835C25.7798 14.1249 26.7498 15.0949 26.7498 16.2912V16.875H21.2497V16.2912C21.2497 15.0949 22.2196 14.1249 23.416 14.1249Z" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M24 14.125C24.7819 14.125 25.4157 13.4911 25.4157 12.7093V12.5408C25.4157 11.7589 24.7819 11.1251 24 11.1251C23.2181 11.1251 22.5843 11.7589 22.5843 12.5408V12.7093C22.5843 13.4911 23.2181 14.125 24 14.125Z" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14.1957 39.1435L9.64411 32.362C8.04486 29.9793 8.35486 26.7981 10.384 24.769C12.7292 22.4237 16.5315 22.4237 18.8767 24.769C20.9058 26.7981 21.2158 29.9793 19.6165 32.362L15.0649 39.1435C14.8575 39.4525 14.4031 39.4525 14.1957 39.1435Z" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14.0464 28.5103H15.2139C16.4102 28.5103 17.3801 29.4801 17.3801 30.6765V31.2603H11.8801V30.6765C11.8801 29.4801 12.8499 28.5103 14.0464 28.5103Z" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14.6303 28.5103C15.4122 28.5103 16.046 27.8764 16.046 27.0945V26.9259C16.046 26.1441 15.4122 25.5103 14.6303 25.5103C13.8484 25.5103 13.2145 26.1441 13.2145 26.9259V27.0945C13.2145 27.8764 13.8484 28.5103 14.6303 28.5103Z" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M32.9351 39.1433L28.3835 32.3617C26.7842 29.979 27.0942 26.7979 29.1234 24.7687C31.4686 22.4235 35.2709 22.4235 37.6161 24.7687C39.6452 26.7979 39.9552 29.979 38.3559 32.3617L33.8043 39.1433C33.5969 39.4522 33.1425 39.4522 32.9351 39.1433Z" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M36.5534 21.1299C35.9423 18.4461 34.4924 16.0816 32.4944 14.3259" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.0198 36.2469C21.2734 36.6541 22.6108 36.875 24.0001 36.875C25.3893 36.875 26.7268 36.6541 27.9803 36.2469" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15.5053 14.3259C13.5073 16.0817 12.0576 18.4461 11.4465 21.1299" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M32.7859 28.5103H33.9534C35.1498 28.5103 36.1197 29.4801 36.1197 30.6765V31.2603H30.6196V30.6765C30.6196 29.4801 31.5895 28.5103 32.7859 28.5103Z" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M33.3695 28.5103C34.1514 28.5103 34.7852 27.8764 34.7852 27.0945V26.9259C34.7852 26.1441 34.1514 25.5103 33.3695 25.5103C32.5876 25.5103 31.9538 26.1441 31.9538 26.9259V27.0945C31.9538 27.8764 32.5876 28.5103 33.3695 28.5103Z" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </g>
    </svg>



  );
};

export default PeoplePoints;
