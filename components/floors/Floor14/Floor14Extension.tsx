import React from "react";
import { useStore } from "../../../lib/store/useStore";
import { useRouter } from "next/router";
import { useAvailability } from "../../../lib/hooks/useAvailability";
import { displayClassname } from "../../../lib/helpers";

const Floor14Extension = () => {
  const fetch = useStore((state) => state.setSelectedApartment);
  const router = useRouter();
  const [six] = useAvailability("15.06");
  const [five] = useAvailability("15.05");
  const [four] = useAvailability("15.04");
  const [three] = useAvailability("15.03");
  const [two] = useAvailability("15.02");
  const [one] = useAvailability("15.01");
  return (
    <>
      <g
        id="_x31_5.04"
        className={`st19 ${displayClassname(four)}`}
        onClick={() => fetch("15.04", Number(router.query.id))}
      >
        <path
          transform="matrix(1,0,0,-1,336.7872,100.37329)"
          d="M 0 0 L 124.973 0 L 124.973 -87.234 L 42.511 -87.234 L 42.511 -80.243 L 10.117 -80.243 L 10.117 -63.119 L .561 -63.119 Z "
        />
      </g>
      <g
        id="_x31_5.03"
        className={`st19 ${displayClassname(three)}`}
        onClick={() => fetch("15.03", Number(router.query.id))}
      >
        <path
          transform="matrix(1,0,0,-1,296.0971,180.6878)"
          d="M 0 0 L 37.986 -.891 L 50.266 -.891 L 83.202 -.891 L 83.202 -6.544 L 166.327 -7.985 L 165.719 -14.921 L 165.719 -86.534 L .35 -86.534 Z "
        />
      </g>
      <g
        id="_x31_5.02"
        className={`st19 ${displayClassname(two)}`}
        onClick={() => fetch("15.02", Number(router.query.id))}
      >
        <path
          transform="matrix(1,0,0,-1,140.9799,185.0145)"
          d="M 0 0 L 46.075 0 L 46.075 3.851 L 90.089 3.586 L 112.948 3.586 L 155.467 3.586 L 155.467 -82.177 L .676 -82.177 Z "
        />
      </g>
      <g
        id="_x31_5.01"
        className={`st19 ${displayClassname(one)}`}
        onClick={() => fetch("15.01", Number(router.query.id))}
      >
        <path
          transform="matrix(1,0,0,-1,144.1829,100.50061)"
          d="M 0 0 L -86.818 0 L -86.818 -83.742 L .034 -83.742 L .034 -78.558 L .034 -.556 Z "
        />
        <path
          transform="matrix(1,0,0,-1,0,446.457)"
          d="M 140.98 179.227 L 57.238 179.227 L 57.238 262.969 L 140.98 262.969 Z "
        />
      </g>
    </>
  );
};

export default Floor14Extension;
