import React, { FunctionComponent } from "react";
interface LogoProps {
  height?: number;
  width?: number;
  className?: string;
  fill?: string;
}
const Logo: FunctionComponent<LogoProps> = ({
  height = 35,
  width = 133,
  className,
  fill = "#476761",
}) => {
  return (
    <svg
    className={className}
    width={`${width}`}
    height={`${height}`}
    viewBox="0 0 165 40"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1853_5399)">
        <path
          d="M44.0354 31.913L42.6929 29.6835H41.9769V31.913H41.0371V26.3174H43.0062C43.4537 26.3174 43.8117 26.4048 44.1249 26.536C44.4382 26.6671 44.6619 26.8857 44.7962 27.148C44.9304 27.4103 45.02 27.6726 45.02 27.9786C45.02 28.3283 44.9305 28.678 44.7067 28.984C44.4829 29.2901 44.1697 29.5086 43.6774 29.5961L45.1095 31.913H44.0354ZM41.9769 28.9403H43.0062C43.3642 28.9403 43.6327 28.8529 43.8117 28.678C43.9907 28.5032 44.0802 28.2846 44.0802 27.9786C44.0802 27.6726 43.9907 27.454 43.8117 27.2791C43.6327 27.1043 43.3642 27.0168 43.0062 27.0168H41.9769V28.9403Z"
          fill="#476761"
        />
        <path
          d="M53.388 27.0606V28.7218H55.3571V29.4649H53.388V31.1698H55.6256V31.913H52.4482V26.3174H55.6256V27.0606H53.388Z"
          fill="#476761"
        />
        <path
          d="M63.8156 31.7814C63.5023 31.6503 63.2786 31.4754 63.0996 31.2131C62.9206 30.9508 62.8311 30.6885 62.8311 30.3825H63.8603C63.8603 30.6448 63.9946 30.8197 64.1736 30.9945C64.3526 31.1694 64.5763 31.2131 64.8896 31.2131C65.2029 31.2131 65.4714 31.1257 65.6504 30.9945C65.8294 30.8197 65.9189 30.6448 65.9189 30.3825C65.9189 30.2076 65.8741 30.0328 65.7399 29.9016C65.6056 29.7705 65.4714 29.683 65.3371 29.6393C65.1581 29.5956 64.9344 29.5082 64.6211 29.4207C64.2631 29.3333 63.9498 29.2459 63.7261 29.1147C63.5023 29.0273 63.2786 28.8524 63.1443 28.6339C62.9653 28.4153 62.8758 28.153 62.8758 27.8033C62.8758 27.4973 62.9653 27.1912 63.1443 26.9727C63.3233 26.7104 63.5471 26.5355 63.8603 26.4044C64.1736 26.2732 64.4868 26.2295 64.8896 26.2295C65.4266 26.2295 65.9189 26.3606 66.2769 26.6229C66.6349 26.8852 66.8139 27.2787 66.8586 27.7595H65.8294C65.8294 27.541 65.6951 27.3661 65.5161 27.235C65.3371 27.1038 65.1134 27.0164 64.8001 27.0164C64.5316 27.0164 64.3078 27.1038 64.1288 27.235C63.9498 27.3661 63.8603 27.5847 63.8603 27.8033C63.8603 27.9781 63.9051 28.1093 64.0393 28.2404C64.1288 28.3716 64.2631 28.459 64.4421 28.5027C64.6211 28.5464 64.8449 28.6339 65.1134 28.7213C65.5161 28.8087 65.7846 28.9399 66.0531 29.0273C66.2769 29.1147 66.5006 29.2896 66.6796 29.5082C66.8586 29.7268 66.9482 29.9891 66.9482 30.3825C66.9482 30.6885 66.8587 30.9508 66.7244 31.2131C66.5454 31.4754 66.3216 31.6503 66.0531 31.8251C65.7399 32 65.3819 32.0437 64.9791 32.0437C64.4868 32 64.1288 31.9125 63.8156 31.7814Z"
          fill="#476761"
        />
        <path
          d="M75.0931 26.3174V31.913H74.1533V26.3174H75.0931Z"
          fill="#476761"
        />
        <path
          d="M86.0121 26.6671C86.4596 26.8857 86.8176 27.2354 87.0861 27.6726C87.3546 28.1097 87.4441 28.5906 87.4441 29.1589C87.4441 29.7272 87.3098 30.2081 87.0861 30.6452C86.8176 31.0824 86.4596 31.3884 86.0121 31.607C85.5646 31.8256 85.0275 31.913 84.401 31.913H82.5215V26.3174H84.401C85.0275 26.3174 85.5646 26.4048 86.0121 26.6671ZM85.9673 30.6452C86.3253 30.2955 86.5043 29.7709 86.5043 29.1589C86.5043 28.5032 86.3253 27.9786 85.9673 27.6289C85.6093 27.2791 85.0723 27.0606 84.401 27.0606H83.4613V31.1698H84.401C85.0723 31.1698 85.6093 30.995 85.9673 30.6452Z"
          fill="#476761"
        />
        <path
          d="M95.4993 27.0606V28.7218H97.4684V29.4649H95.4993V31.1698H97.7369V31.913H94.5596V26.3174H97.7369V27.0606H95.4993Z"
          fill="#476761"
        />
        <path
          d="M109.82 31.913H108.88L106.016 27.7163V31.913H105.076V26.3174H106.016L108.88 30.5141V26.3174H109.82V31.913Z"
          fill="#476761"
        />
        <path
          d="M117.337 27.6286C117.606 27.1915 117.964 26.8417 118.411 26.6232C118.859 26.3609 119.351 26.2734 119.888 26.2734C120.515 26.2734 121.052 26.4046 121.544 26.7106C122.036 27.0166 122.349 27.4101 122.573 27.9784H121.454C121.32 27.6723 121.096 27.4538 120.828 27.3226C120.559 27.1915 120.246 27.104 119.888 27.104C119.485 27.104 119.172 27.1915 118.859 27.3663C118.546 27.5412 118.322 27.7598 118.143 28.0658C117.964 28.3718 117.874 28.7652 117.874 29.1587C117.874 29.5521 117.964 29.9456 118.143 30.2516C118.322 30.5576 118.546 30.8199 118.859 30.9948C119.172 31.1696 119.485 31.257 119.888 31.257C120.246 31.257 120.559 31.1696 120.828 31.0385C121.096 30.9073 121.32 30.6887 121.454 30.3827H122.573C122.349 30.9073 121.991 31.3445 121.544 31.6505C121.052 31.9565 120.515 32.0876 119.888 32.0876C119.351 32.0876 118.859 31.9565 118.411 31.7379C117.964 31.4756 117.606 31.1696 117.337 30.7325C117.069 30.2953 116.935 29.8144 116.935 29.2461C116.935 28.5467 117.069 28.0658 117.337 27.6286Z"
          fill="#476761"
        />
        <path
          d="M130.763 27.0606V28.7218H132.732V29.4649H130.763V31.1698H133.001V31.913H129.823V26.3174H133.001V27.0606H130.763Z"
          fill="#476761"
        />
        <path
          d="M58.4894 6.68816C58.0866 5.77012 57.5943 4.93952 56.9231 4.19635C56.8336 4.06521 56.6993 3.93406 56.6098 3.84663C55.8043 3.05974 54.8198 2.404 53.7458 1.96684C51.5977 1.04881 48.7784 1.04881 46.5408 1.96684C45.4668 2.404 44.4823 3.05974 43.6768 3.84663C42.8713 4.63351 42.2 5.59526 41.7972 6.68816C41.3497 7.78105 41.126 8.96138 41.126 10.2291C41.126 11.4969 41.3497 12.6772 41.7972 13.7701C42.2448 14.863 42.8713 15.8248 43.6768 16.6117C44.4823 17.3985 45.4668 18.0543 46.5408 18.4914C47.6596 18.9723 48.8679 19.1909 50.1209 19.1909C51.4187 19.1909 52.627 18.9723 53.7458 18.4914C54.8198 18.0543 55.8043 17.3985 56.6098 16.6117C56.7441 16.4805 56.8336 16.3931 56.9231 16.2619C57.5943 15.5188 58.1314 14.6882 58.4894 13.7701C58.9369 12.6772 59.1606 11.4969 59.1606 10.2291C59.1606 8.96138 58.9369 7.78105 58.4894 6.68816ZM55.2225 13.333C54.7303 14.251 54.0143 14.9505 53.1192 15.475C52.2242 15.9996 51.2397 16.2619 50.0762 16.2619C48.9574 16.2619 47.9281 15.9996 47.0331 15.475C46.1381 14.9505 45.4221 14.251 44.9298 13.333C44.4376 12.4149 44.169 11.4095 44.169 10.2291C44.169 9.09253 44.4376 8.04335 44.9298 7.12532C45.4221 6.20728 46.1381 5.50783 47.0331 4.98324C47.9281 4.45865 48.9574 4.19635 50.0762 4.19635C51.2397 4.19635 52.269 4.45865 53.1192 4.98324C54.0143 5.50783 54.7303 6.20728 55.2225 7.12532C55.7148 8.04335 55.9833 9.04881 55.9833 10.2291C55.9833 11.4095 55.7596 12.4586 55.2225 13.333Z"
          fill="#0E3F3B"
        />
        <path
          d="M67.7083 1.53027H64.71V18.9729H74.3762V16.1314H67.7083V1.53027Z"
          fill="#0E3F3B"
        />
        <path
          d="M82.2073 1.53027H79.209V18.9729H82.2073V1.53027Z"
          fill="#0E3F3B"
        />
        <path
          d="M95.275 13.5958L90.0391 1.53027H86.7275L95.275 20.4592L103.867 1.53027H100.556L95.275 13.5958Z"
          fill="#0E3F3B"
        />
        <path
          d="M111.34 1.53027H108.342V18.9729H111.34V1.53027Z"
          fill="#0E3F3B"
        />
        <path
          d="M124.408 0L115.815 18.9727H119.172L124.408 6.9071L129.688 18.9727H133L124.408 0Z"
          fill="#0E3F3B"
        />
        <path
          d="M10.4717 16.6123V24.2626H20.9434V31.9129H31.3704V16.6123H20.9434H10.4717Z"
          fill="#476761"
        />
        <path d="M10.4717 1.26758H0V16.6118H10.4717V1.26758Z" fill="#476761" />
        <path
          d="M31.4151 1.26758H20.9434V8.91785H31.4151V1.26758Z"
          fill="#476761"
        />
        <path d="M10.4717 24.2617H0V31.912H10.4717V24.2617Z" fill="#476761" />
      </g>
      <defs>
        <clipPath id="clip0_1853_5399">
          <rect width="133" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;