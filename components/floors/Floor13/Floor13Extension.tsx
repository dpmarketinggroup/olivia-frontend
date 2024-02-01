import React from "react";
import { useStore } from "../../../lib/store/useStore";
import { useRouter } from "next/router";
import { useAvailability } from "../../../lib/hooks/useAvailability";
import { displayClassname } from "../../../lib/helpers";

const Floor13Extension = () => {
  const fetch = useStore((state) => state.setSelectedApartment);
  const router = useRouter();
  const [thirteen] = useAvailability("14.13");
  const [twelve] = useAvailability("14.12");
  const [eleven] = useAvailability("14.11");
  const [ten] = useAvailability("14.10");
  const [nine] = useAvailability("14.09");
  const [eight] = useAvailability("14.08");
  const [seven] = useAvailability("14.07");
  const [six] = useAvailability("14.06");
  const [five] = useAvailability("14.05");
  const [four] = useAvailability("14.04");
  const [three] = useAvailability("14.03");
  const [two] = useAvailability("14.02");
  const [one] = useAvailability("14.01");
  const [K_eight] = useAvailability("K1408");
  const [K_seven] = useAvailability("K1407");
  const [K_six] = useAvailability("K1406");
  const [K_five] = useAvailability("K1405");
  const [K_four] = useAvailability("K1404");
  const [K_three] = useAvailability("K1403");
  const [K_two] = useAvailability("K1402");
  const [K_one] = useAvailability("K1401");
  return (
    <><g
      id="_x31_4.13_1_"
      className={`st19 ${displayClassname(thirteen)}`}
      onClick={() => fetch("14.13", Number(router.query.id))}
    >
      <rect x="257.8" y="104" width="19.9" height="35" />
      <path d="M277.5,131.7h-33.4V205h33.2L277.5,131.7L277.5,131.7z" />
    </g>

      <g
        id="_x31_4.12_1_"
        className={`st19 ${displayClassname(twelve)}`}
        onClick={() => fetch("14.12", Number(router.query.id))}
      >
        <rect x="266.2" y="60.1" width="34.2" height="27.3" />
        <path d="M282.6,4.6h31.1V67h-31.1V4.6z" />
        <rect x="309.5" y="4.6" width="13.1" height="40" />
      </g>
      <g
        id="_x31_4.11"
        className={`st19 ${displayClassname(eleven)}`}
        onClick={() => fetch("14.11", Number(router.query.id))}
      >
        <rect x="301.4" y="68.2" width="13.7" height="19.2" />
        <path d="M314.6,45.5h58v35h-58V45.5z" />
        <path d="M337.6,75.6h35v11.3h-35V75.6z M323.8,4.6H400v43.8h-76.1V4.6H323.8z" />
      </g>
      <g
        id="_x31_4.10"
        className={`st19 ${displayClassname(ten)}`}
        onClick={() => fetch("14.10", Number(router.query.id))}
      >
        <path d="M317.1,87.8H400v37.9h-82.8V87.8H317.1z" />
        <rect x="315.9" y="81.6" width="21.3" height="11.8" />
        <rect x="373.4" y="50" width="26.6" height="41.3" />
      </g>
      <g
        id="_x31_4.09"
        className={`st19 ${displayClassname(nine)}`}
        onClick={() => fetch("14.09", Number(router.query.id))}
      >
        <path d="M313.5,147.8h71.9v57.1h-71.9V147.8z" />
        <rect x="316.8" y="127.4" width="83.2" height="69.4" />
      </g>
      <g
        id="_x31_4.08"
        className={`st19 ${displayClassname(eight)}`}
        onClick={() => fetch("14.08", Number(router.query.id))}
      >
        <path transform="matrix(1,0,0,-1,300.9357,147.5166)" d="M 0 0 L 0 15.832 L -22.876 15.832 L -22.876 -57.42 L 10.859 -57.42 L 11 0 Z " />
        <path transform="matrix(1,0,0,-1,0,221.643)" d="M 299.463 82.618 L 278.24803 82.618 L 278.24803 117.66899 L 299.463 117.66899 Z " />
      </g>
      <g
        id="_x31_4.07"
        className={`st19 ${displayClassname(seven)}`}
        onClick={() => fetch("14.07", Number(router.query.id))}
      >
        <rect x="208.4" y="102.9" width="34.3" height="102" />

      </g>
      <g
        id="_x31_4.06"
        className={`st19 ${displayClassname(six)}`}
        onClick={() => fetch("14.06", Number(router.query.id))}
      >
        <rect x="139.8" y="104.9" width="40" height="25.9" />
        <path d="M173.1,103.2v101.7h34.6V103.2C207.6,103.2,173.1,103.2,173.1,103.2z" />
      </g>
      <g
        id="_x31_4.05"
        className={`st19 ${displayClassname(five)}`}
        onClick={() => fetch("14.05", Number(router.query.id))}
      >
        <rect x="116" y="104.2" width="23.1" height="49.5" />
        <path d="M134.9,134.2h6.8v17.4h-6.8V134.2z" />
        <rect x="139.4" y="131.6" width="33" height="22.4" />
        <polygon points="104.2,147.6 172.3,147.6 172.3,204.8 104,204.8 	" />
      </g>
      <g
        id="_x31_4.04"
        className={`st19 ${displayClassname(four)}`}
        onClick={() => fetch("14.04", Number(router.query.id))}
      >
        <polygon points="31.3,127.3 99.5,127.3 99.5,204.9 31.1,204.9 	" />
        <rect x="94.8" y="147.4" width="8.2" height="57.6" />
        <rect x="16.8" y="126.6" width="17.8" height="70.2" />
      </g>
      <g
        id="_x31_4.03"
        className={`st19 ${displayClassname(three)}`}
        onClick={() => fetch("14.03", Number(router.query.id))}
      >
        <rect x="16.7" y="49.9" width="25.8" height="75.8" />
        <rect x="79.7" y="82.1" width="19.8" height="43.5" />
        <rect x="33.8" y="86.9" width="52.9" height="39.2" />
      </g>
      <g
        id="_x31_4.02"
        className={`st19 ${displayClassname(two)}`}
        onClick={() => fetch("14.02", Number(router.query.id))}
      >
        <polygon points="93.6,62.5 93.6,4.5 16.4,4.5 16.4,48.7 43,48.7 43,87.3 79.3,87.3 79.3,81.3 100.6,81.3 100.6,87.3 
		115.5,87.3 115.5,62.5 	"/>
      </g>
      <g
        id="_x31_4.01"
        className={`st19 ${displayClassname(one)}`}
        onClick={() => fetch("14.01", Number(router.query.id))}
      >
        <path d="M94.4,4.6h23.3v56.7H94.4V4.6z" />
        <path d="M116.3,4.6h36.3v82.8h-36.3V4.6z" />
      </g>
      <g id="_x30_K1401">
        <g
          id="_x31_K1401"
          className={`st19 ${displayClassname(K_one)}`}
          onClick={() => fetch("K1401", Number(router.query.id))}
        >
          <rect x="173.4" y="80.9" width="13.9" height="22.7" />

        </g>
      </g>
      <g id="_x30_K1402">
        <g
          id="_x31_K1402"
          className={`st19 ${displayClassname(K_two)}`}
          onClick={() => fetch("K1402", Number(router.query.id))}
        >
          <rect x="186.8" y="80.9" width="13.9" height="22.7" />

        </g>
      </g>
      <g id="_x30_K1403">
        <g
          id="_x31_K1403"
          className={`st19 ${displayClassname(K_three)}`}
          onClick={() => fetch("K1403", Number(router.query.id))}
        >
          <rect x="201.2" y="80.9" width="13.9" height="22.7" />

        </g>
      </g>
      <g id="_x30_K1404">
        <g
          id="_x31_K1404"
          className={`st19 ${displayClassname(K_four)}`}
          onClick={() => fetch("K1404", Number(router.query.id))}
        >
          <rect x="215.9" y="80.9" width="13.9" height="22.7" />

        </g>
      </g>
      <g id="_x30_K1405">
        <g
          id="_x31_K1405"
          className={`st19 ${displayClassname(K_five)}`}
          onClick={() => fetch("K1405", Number(router.query.id))}
        >
          <rect x="229.6" y="80.9" width="13.9" height="22.7" />

        </g>
      </g>
    </>
  );
};

export default Floor13Extension;
