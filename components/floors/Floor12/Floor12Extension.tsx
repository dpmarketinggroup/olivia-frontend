import React from "react";
import { useStore } from "../../../lib/store/useStore";
import { useRouter } from "next/router";
import { useAvailability } from "../../../lib/hooks/useAvailability";
import { displayClassname } from "../../../lib/helpers";

const Floor12Extension = () => {
  const fetch = useStore((state) => state.setSelectedApartment);
  const router = useRouter();
  const [thirteen] = useAvailability("13.13");
  const [twelve] = useAvailability("13.12");
  const [eleven] = useAvailability("13.11");
  const [ten] = useAvailability("13.10");
  const [nine] = useAvailability("13.09");
  const [eight] = useAvailability("13.08");
  const [seven] = useAvailability("13.07");
  const [six] = useAvailability("13.06");
  const [five] = useAvailability("13.05");
  const [four] = useAvailability("13.04");
  const [three] = useAvailability("13.03");
  const [two] = useAvailability("13.02");
  const [one] = useAvailability("13.01");
  const [K_eight] = useAvailability("K1308");
  const [K_seven] = useAvailability("K1307");
  const [K_six] = useAvailability("K1306");
  const [K_five] = useAvailability("K1305");
  const [K_four] = useAvailability("K1304");
  const [K_three] = useAvailability("K1303");
  const [K_two] = useAvailability("K1302");
  const [K_one] = useAvailability("K1301");

  return (
    <>
      <g id="_x31_3.01_1_">
        <g id="_x31_3.01">
          <g
            id="_x31_4.01"
            className={`st19 ${displayClassname(one)}`}
            onClick={() => fetch("13.01", Number(router.query.id))}
          >
            <path d="M94.4,4.6h23.3v56.7H94.4V4.6z" />
            <path d="M116.3,4.6h36.3v82.8h-36.3V4.6z" />
          </g>
        </g>
      </g>
      <g id="_x31_3.02_1_">
        <g id="_x31_3.02">
          <g
            id="_x31_4.02"
            className={`st19 ${displayClassname(two)}`}
            onClick={() => fetch("13.02", Number(router.query.id))}
          >
            <polygon points="93.6,62.5 93.6,4.5 16.4,4.5 16.4,48.7 43,48.7 43,87.3 79.3,87.3 79.3,81.3 100.6,81.3 100.6,87.3 
		115.5,87.3 115.5,62.5 	"/>
          </g>
        </g>
      </g>
      <g id="_x31_3.03_1_">
        <g id="_x31_3.03">
          <g
            id="_x31_4.03"
            className={`st19 ${displayClassname(three)}`}
            onClick={() => fetch("13.03", Number(router.query.id))}
          >
            <rect x="16.7" y="49.9" width="25.8" height="75.8" />
            <rect x="79.7" y="82.1" width="19.8" height="43.5" />
            <rect x="33.8" y="86.9" width="52.9" height="39.2" />
          </g>
        </g>
      </g>
      <g id="_x31_3.04_1_">
        <g id="_x31_3.04">
          <g
            id="_x31_4.04"
            className={`st19 ${displayClassname(four)}`}
            onClick={() => fetch("13.04", Number(router.query.id))}
          >
            <polygon points="31.3,127.3 99.5,127.3 99.5,204.9 31.1,204.9 	" />
            <rect x="94.8" y="147.4" width="8.2" height="57.6" />
            <rect x="16.8" y="126.6" width="17.8" height="70.2" />
          </g>
        </g>
      </g>
      <g id="_x31_3.05_1_">
        <g id="_x31_3.05">
          <g
            id="_x31_4.05"
            className={`st19 ${displayClassname(five)}`}
            onClick={() => fetch("13.05", Number(router.query.id))}
          >
            <rect x="116" y="104.2" width="23.1" height="49.5" />
            <path d="M134.9,134.2h6.8v17.4h-6.8V134.2z" />
            <rect x="139.4" y="131.6" width="33" height="22.4" />
            <polygon points="104.2,147.6 172.3,147.6 172.3,204.8 104,204.8 	" />
          </g>
        </g>
      </g>
      <g id="_x31_3.06_1_">
        <g id="_x31_3.06">
          <g
            id="_x31_4.06"
            className={`st19 ${displayClassname(six)}`}
            onClick={() => fetch("13.06", Number(router.query.id))}
          >
            <rect x="139.8" y="104.9" width="40" height="25.9" />
            <path d="M173.1,103.2v101.7h34.6V103.2C207.6,103.2,173.1,103.2,173.1,103.2z" />
          </g>
        </g>
      </g>
      <g id="_x31_3.07_1_">
        <g id="_x31_3.07">
          <g
            id="_x31_4.07"
            className={`st19 ${displayClassname(seven)}`}
            onClick={() => fetch("13.07", Number(router.query.id))}
          >
            <rect x="208.4" y="102.9" width="34.3" height="102" />

          </g>
        </g>
      </g>
      <g id="_x31_3.08_1_">
        <g id="_x31_3.08">
          <g
            id="_x31_4.08"
            className={`st19 ${displayClassname(eight)}`}
            onClick={() => fetch("13.08", Number(router.query.id))}
          >
            <path d="M300.9,147.5v-15.8H278V205h33.7l0.1-57.4h-10.9V147.5z" />
            <path d="M278.2,104h21.2v35h-21.2V104z" />
          </g>
        </g>
      </g>
      <g id="_x31_3.09_1_">
        <g id="_x31_3.09">
          <g
            id="_x31_4.09"
            className={`st19 ${displayClassname(nine)}`}
            onClick={() => fetch("13.09", Number(router.query.id))}
          >
            <path d="M313.5,147.8h71.9v57.1h-71.9V147.8z" />
            <rect x="316.8" y="127.4" width="83.2" height="69.4" />
          </g>
        </g>
      </g>
      <g id="_x31_3.10_1_">
        <g id="_x31_3.10">
          <g
            id="_x31_4.10"
            className={`st19 ${displayClassname(ten)}`}
            onClick={() => fetch("13.10", Number(router.query.id))}
          >
            <path d="M317.1,87.8H400v37.9h-82.8V87.8H317.1z" />
            <rect x="315.9" y="81.6" width="21.3" height="11.8" />
            <rect x="373.4" y="50" width="26.6" height="41.3" />
          </g>
        </g>
      </g>
      <g id="_x31_3.11_1_">
        <g id="_x31_3.11">
          <g
            id="_x31_4.11"
            className={`st19 ${displayClassname(eleven)}`}
            onClick={() => fetch("13.11", Number(router.query.id))}
          >
            <rect x="301.4" y="68.2" width="13.7" height="19.2" />
            <path d="M314.6,45.5h58v35h-58V45.5z" />
            <path d="M337.6,75.6h35v11.3h-35V75.6z M323.8,4.6H400v43.8h-76.1V4.6H323.8z" />
          </g>
        </g>
      </g>
      <g id="_x31_3.12_1_">
        <g id="_x31_3.12">
          <g
            id="_x31_4.12_1_"
            className={`st19 ${displayClassname(twelve)}`}
            onClick={() => fetch("13.12", Number(router.query.id))}
          >
            <rect x="266.2" y="60.1" width="34.2" height="27.3" />
            <path d="M282.6,4.6h31.1V67h-31.1V4.6z" />
            <rect x="309.5" y="4.6" width="13.1" height="40" />
          </g>
        </g>
      </g>
      <g id="_x31_3.13_1_">
        <g id="_x31_3.13">
          <g
            id="_x31_4.13_1_"
            className={`st19 ${displayClassname(thirteen)}`}
            onClick={() => fetch("13.13", Number(router.query.id))}
          >
            <rect x="257.8" y="104" width="19.9" height="35" />
            <path d="M277.5,131.7h-33.4V205h33.2L277.5,131.7L277.5,131.7z" />
          </g>
        </g>
      </g>
      <g id="_x30_K1301">
        <g
          id="_x31_K1301"
          className={`st19 ${displayClassname(K_one)}`}
          onClick={() => fetch("K1301", Number(router.query.id))}
        >
          <rect x="173.4" y="80.9" width="13.9" height="22.7" />

        </g>
      </g>
      <g id="_x30_K1302">
        <g
          id="_x31_K1302"
          className={`st19 ${displayClassname(K_two)}`}
          onClick={() => fetch("K1302", Number(router.query.id))}
        >
          <rect x="186.8" y="80.9" width="13.9" height="22.7" />
        </g>
      </g>
      <g id="_x30_K1303">
        <g
          id="_x31_K1303"
          className={`st19 ${displayClassname(K_three)}`}
          onClick={() => fetch("K1303", Number(router.query.id))}
        >
          <rect x="201.2" y="80.9" width="13.9" height="22.7" />

        </g>
      </g>
      <g id="_x30_K1304">
        <g
          id="_x31_K1304"
          className={`st19 ${displayClassname(K_four)}`}
          onClick={() => fetch("K1304", Number(router.query.id))}
        >
          <rect x="215.9" y="80.9" width="13.9" height="22.7" />

        </g>
      </g>
      <g id="_x30_K1305">
        <g
          id="_x31_K1305"
          className={`st19 ${displayClassname(K_five)}`}
          onClick={() => fetch("K1305", Number(router.query.id))}
        >
          <rect x="229.6" y="80.9" width="13.9" height="22.7" />

        </g>
      </g>
    </>
  );
};

export default Floor12Extension;
