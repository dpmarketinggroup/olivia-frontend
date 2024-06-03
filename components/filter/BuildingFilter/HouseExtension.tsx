import { useEffect, useRef, useState } from "react";
import PopUp from "./PopUp";
import Link from "next/link";
import { useRouter } from "next/router";
import { useStore } from "../../../lib/store/useStore";
import axios from "axios";
import { useTranslation } from "next-i18next";

type Floor = {
  oneRooms: number;
  oneHalfRooms: number;
  twoRooms: number;

  threeRooms: number;

  fourHalfRooms: number;
};

const HouseExtension = () => {
  const [firstFloor, setFirstFloor] = useState<Floor>();
  const [secondFloor, setSecondFloor] = useState<Floor>();
  const [thirdFloor, setThirdFloor] = useState<Floor>();
  const [fourthFloor, setFourthFloor] = useState<Floor>();
  const [fifthFloor, setFifthFloor] = useState<Floor>();
  const [sixthFloor, setSixthFloor] = useState<Floor>();
  const [seventhFloor, setSeventhFloor] = useState<Floor>();
  const [eighthFloor, setEighthFloor] = useState<Floor>();
  const [ninthFloor, setNinthFloor] = useState<Floor>();
  const [tenthFloor, setTenthFloor] = useState<Floor>();
  const [eleventhFloor, setEleventhFloor] = useState<Floor>();
  const [twelthFloor, setTwelthFloor] = useState<Floor>();

  const div14 = useRef<HTMLDivElement | null>(null);
  const div13 = useRef<HTMLDivElement | null>(null);
  const div12 = useRef<HTMLDivElement | null>(null);
  const div11 = useRef<HTMLDivElement | null>(null);
  const div10 = useRef<HTMLDivElement | null>(null);
  const div9 = useRef<HTMLDivElement | null>(null);
  const div8 = useRef<HTMLDivElement | null>(null);
  const div7 = useRef<HTMLDivElement | null>(null);
  const div6 = useRef<HTMLDivElement | null>(null);
  const div5 = useRef<HTMLDivElement | null>(null);
  const div4 = useRef<HTMLDivElement | null>(null);
  const div3 = useRef<HTMLDivElement | null>(null);

  const router = useRouter();
  const fetch = useStore((state) => state.setSelectedApartment);
  const { t: translate } = useTranslation("home");

  async function getRooms(floor: number): Promise<Floor | undefined> {
    try {
      const response = await axios.get(
        `https://floating-scrubland-57360.herokuapp.com/api/byts?filters[poschodie][$eq]=${floor}`
      );

      return {
        oneRooms: response.data.data.filter(
          (val: any) => val.attributes.pocet_izieb === "jedno-izbový"
        ).length,
        oneHalfRooms: response.data.data.filter(
          (val: any) => val.attributes.pocet_izieb === "jeden a pol-izbový"
        ).length,
        fourHalfRooms: response.data.data.filter(
          (val: any) => val.attributes.pocet_izieb === "štyri a pol-izbový"
        ).length,
        threeRooms: response.data.data.filter(
          (val: any) => val.attributes.pocet_izieb === "troj-izbový"
        ).length,
        twoRooms: response.data.data.filter(
          (val: any) => val.attributes.pocet_izieb === "dvoj-izbový"
        ).length

      };
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    async function fetch() {
      setFirstFloor(await getRooms(3));
      setSecondFloor(await getRooms(4));
      setThirdFloor(await getRooms(5));
      setFourthFloor(await getRooms(6));
      setFifthFloor(await getRooms(7));
      setSixthFloor(await getRooms(8));
      setSeventhFloor(await getRooms(9));
      setEighthFloor(await getRooms(10));
      setNinthFloor(await getRooms(11));
      setTenthFloor(await getRooms(12));
      setEleventhFloor(await getRooms(13));
      setTwelthFloor(await getRooms(14));
    }

    fetch();
  }, []);

  return (
    <>
      <g id="Retail_highlight" data-name="Retail highlight">
        <Link href="/retail">
          <polygon
            className="cls-5"
            points="908.59 913.22 907.61 856.71 531.91 853.42 531.91 913.35 559.18 913.45 559.18 914.12 559.18 1015.17 580.39 1015.17 580.39 1041.37 908.62 1042.88 908.62 913.22 908.59 913.22"
          />
        </Link>
      </g>
      <g id="Retail_nr" data-name="Retail nr">
        <rect className="cls-4" x="471.57" y="872.66" width="24" height="2" />
        <path
          className="cls-4"
          d="M399.66,700.56l2.56,4.33h3.17l-2.94-4.33ZM397,695.09v9.8h2.72v-9.8Zm1.74,2.3h1.89a2,2,0,0,1,.73.12,1,1,0,0,1,.44.38.94.94,0,0,1,.17.59,1,1,0,0,1-.17.6,1,1,0,0,1-.44.38,2,2,0,0,1-.73.12h-1.89v2.06h2.11a5.23,5.23,0,0,0,2.21-.4,2.84,2.84,0,0,0,1.31-1.17,3.43,3.43,0,0,0,.43-1.7,3.35,3.35,0,0,0-.43-1.7,2.88,2.88,0,0,0-1.31-1.16,5.06,5.06,0,0,0-2.21-.42h-2.11ZM409.68,705a4.35,4.35,0,0,0,2.17-.49,3.5,3.5,0,0,0,1.42-1.48l-2.19-.44a1.42,1.42,0,0,1-.58.56,2.06,2.06,0,0,1-.9.18,1.3,1.3,0,0,1-.73-.19,1.43,1.43,0,0,1-.45-.59,2.31,2.31,0,0,1-.14-.92,3.1,3.1,0,0,1,.14-1,1.25,1.25,0,0,1,.42-.6,1.2,1.2,0,0,1,.7-.2,1.06,1.06,0,0,1,.58.15,1,1,0,0,1,.38.42,1.46,1.46,0,0,1,.14.66.6.6,0,0,1-.06.24,1.46,1.46,0,0,1-.13.25l.52-.64h-3.79v1.24h6a2.16,2.16,0,0,0,0-.28c0-.11,0-.22,0-.33a3.46,3.46,0,0,0-.42-1.77,2.67,2.67,0,0,0-1.22-1.1,4.61,4.61,0,0,0-2-.38,4.5,4.5,0,0,0-2,.41,2.84,2.84,0,0,0-1.28,1.16,3.37,3.37,0,0,0-.45,1.79,3.34,3.34,0,0,0,.46,1.79,3.15,3.15,0,0,0,1.31,1.16A4.85,4.85,0,0,0,409.68,705Zm4.07-6.58v2h4.64v-2Zm1.17-2.24v8.68h2.31v-8.68Zm6.28,6.66a.62.62,0,0,1,.08-.33.47.47,0,0,1,.28-.21,1.56,1.56,0,0,1,.52-.07,3.17,3.17,0,0,1,.88.12,1.94,1.94,0,0,1,.7.37v-1a1.53,1.53,0,0,0-.54-.35,3,3,0,0,0-.83-.27,5.19,5.19,0,0,0-1-.1,3,3,0,0,0-1.89.53,1.8,1.8,0,0,0-.65,1.46,1.88,1.88,0,0,0,.33,1.12,2,2,0,0,0,.84.69,3,3,0,0,0,1.14.22,3.18,3.18,0,0,0,1.18-.22,1.89,1.89,0,0,0,.85-.66,1.69,1.69,0,0,0,.33-1l-.23-.84a1.39,1.39,0,0,1-.18.73,1.14,1.14,0,0,1-.45.42,1.45,1.45,0,0,1-.59.12,1,1,0,0,1-.39-.07.72.72,0,0,1-.29-.22A.66.66,0,0,1,421.2,702.87ZM420,700.56l.45-.19a5.42,5.42,0,0,1,.74-.23,4.14,4.14,0,0,1,.84-.09,1.64,1.64,0,0,1,.52.07.76.76,0,0,1,.37.18.54.54,0,0,1,.19.28.92.92,0,0,1,.07.38v3.93h2.31v-4.51a1.69,1.69,0,0,0-.42-1.16,2.41,2.41,0,0,0-1.12-.71,4.55,4.55,0,0,0-1.58-.26,6,6,0,0,0-1.72.24,11.69,11.69,0,0,0-1.42.49Zm6.82-4.45a1.16,1.16,0,0,0,.39.9,1.44,1.44,0,0,0,1,.35,1.4,1.4,0,0,0,1-.35,1.2,1.2,0,0,0,0-1.81,1.4,1.4,0,0,0-1-.35,1.44,1.44,0,0,0-1,.35A1.17,1.17,0,0,0,426.84,696.11Zm.19,2.34v6.44h2.33v-6.44Zm3.91-4.48v10.92h2.43V694Z"
          transform="translate(14.57 174.16)"
        />
      </g>
      <g
        id="_03_highlight"
        data-name="03 highlight"
        className={"relative"}
        onMouseEnter={() => {
          div3.current?.classList.remove("none");
          div3.current?.classList.add("xl:block");
          div3.current?.classList.add("hidden");
        }}
        onMouseLeave={() => div3.current?.classList.add("none")}
        onClick={() => fetch("_03_highlight", Number(router.query.id))}
      >
        {/* <Link href="/podlazie/3"> */}
        <path
          className="cls-5"
          d="M517.33,677.92V626L893,629.29v52Z"
          transform="translate(14.57 174.16)"
        />
        {/* </Link> */}
      </g>
      <g id="_03_nr" data-name="03 nr">
        <path
          className="cls-4"
          d="M419.16,646.6a5.11,5.11,0,0,1,.12-1.16,3.11,3.11,0,0,1,.33-.88,1.44,1.44,0,0,1,.51-.55,1.13,1.13,0,0,1,.64-.2,1.08,1.08,0,0,1,.64.2,1.44,1.44,0,0,1,.51.55,2.61,2.61,0,0,1,.33.88,5.24,5.24,0,0,1,0,2.32,2.61,2.61,0,0,1-.33.88,1.55,1.55,0,0,1-.51.56,1.07,1.07,0,0,1-.64.19,1.12,1.12,0,0,1-.64-.19,1.55,1.55,0,0,1-.51-.56,3.11,3.11,0,0,1-.33-.88A5.11,5.11,0,0,1,419.16,646.6Zm-2.6,0a6.55,6.55,0,0,0,.53,2.77,4.09,4.09,0,0,0,1.47,1.74,4.49,4.49,0,0,0,4.45,0,3.85,3.85,0,0,0,1.45-1.74,7.78,7.78,0,0,0,0-5.54,3.75,3.75,0,0,0-1.45-1.72,4.36,4.36,0,0,0-4.45,0,4,4,0,0,0-1.47,1.72A6.55,6.55,0,0,0,416.56,646.6Zm12.9.18a9.09,9.09,0,0,0,2.24-.25,3.52,3.52,0,0,0,1.6-.83,1.89,1.89,0,0,0,.6-1.45,2.34,2.34,0,0,0-.43-1.39,2.8,2.8,0,0,0-1.25-1,4.71,4.71,0,0,0-2-.37,4.1,4.1,0,0,0-1.93.44,3.2,3.2,0,0,0-1.29,1.15,2.93,2.93,0,0,0-.44,1.61h2.49a1,1,0,0,1,.32-.77,1.43,1.43,0,0,1,1.4-.2.66.66,0,0,1,.33.28.74.74,0,0,1,.12.42,1,1,0,0,1-.13.46,1.17,1.17,0,0,1-.36.38,2.24,2.24,0,0,1-.56.27,2.68,2.68,0,0,1-.72.09Zm.65,5a5.61,5.61,0,0,0,2.21-.38,3,3,0,0,0,1.38-1,2.52,2.52,0,0,0,.48-1.52,2.22,2.22,0,0,0-.35-1.29,2.52,2.52,0,0,0-1-.88,4.92,4.92,0,0,0-1.49-.51,11.13,11.13,0,0,0-1.91-.15v1.32a4.1,4.1,0,0,1,.94.09,1.84,1.84,0,0,1,.63.28,1,1,0,0,1,.36.41,1,1,0,0,1,.12.48,1.14,1.14,0,0,1-.17.63.86.86,0,0,1-.46.33,1.91,1.91,0,0,1-.66.1,1.89,1.89,0,0,1-.69-.14A1.11,1.11,0,0,1,429,649a1.43,1.43,0,0,1-.2-.78h-2.68a3.26,3.26,0,0,0,.27,1.3,3.6,3.6,0,0,0,.77,1.13,3.67,3.67,0,0,0,1.25.8A4.62,4.62,0,0,0,430.11,651.75Z"
          transform="translate(14.57 174.16)"
        />
        <rect className="cls-4" x="471.57" y="820.16" width="24" height="2" />
      </g>

      <g
        id="_04_highlight"
        data-name="04 highlight"
        onMouseEnter={() => {
          div4.current?.classList.remove("none");
          div4.current?.classList.add("xl:block");
          div4.current?.classList.add("hidden");
        }}
        onMouseLeave={() => div4.current?.classList.add("none")}
        onClick={() => fetch("08.01", Number(router.query.id))}
      >
        {/* <Link href="/podlazie/4"> */}
        <path
          className="cls-5"
          d="M517.33,624.5V572.57L893,576.86v51Z"
          transform="translate(14.57 174.16)"
        />
        {/* </Link> */}
      </g>
      <g id="_04_nr" data-name="04 nr">
        <path
          className="cls-4"
          d="M419.16,594.1a5.11,5.11,0,0,1,.12-1.16,3.11,3.11,0,0,1,.33-.88,1.44,1.44,0,0,1,.51-.55,1.13,1.13,0,0,1,.64-.2,1.08,1.08,0,0,1,.64.2,1.44,1.44,0,0,1,.51.55,2.61,2.61,0,0,1,.33.88,5.24,5.24,0,0,1,0,2.32,2.61,2.61,0,0,1-.33.88,1.55,1.55,0,0,1-.51.56,1.07,1.07,0,0,1-.64.19,1.12,1.12,0,0,1-.64-.19,1.55,1.55,0,0,1-.51-.56,3.11,3.11,0,0,1-.33-.88A5.11,5.11,0,0,1,419.16,594.1Zm-2.6,0a6.55,6.55,0,0,0,.53,2.77,4.09,4.09,0,0,0,1.47,1.74,4.49,4.49,0,0,0,4.45,0,3.85,3.85,0,0,0,1.45-1.74,7.78,7.78,0,0,0,0-5.54,3.75,3.75,0,0,0-1.45-1.72,4.36,4.36,0,0,0-4.45,0,4,4,0,0,0-1.47,1.72A6.55,6.55,0,0,0,416.56,594.1Zm9.14,3.22h9.43V595h-2l-.24.41h-3.71l1.92-2.56v3.51l-.33.16V599h2.82v-9.8h-2.13Z"
          transform="translate(14.57 174.16)"
        />
        <rect className="cls-4" x="471.57" y="767.66" width="24" height="2" />
      </g>

      <g
        id="_05_highlight"
        data-name="05 highlight"
        onMouseEnter={() => {
          div5.current?.classList.remove("none");
          div5.current?.classList.add("xl:block");
          div5.current?.classList.add("hidden");
        }}
        onMouseLeave={() => div5.current?.classList.add("none")}
        onClick={() => fetch("08.01", Number(router.query.id))}
      >
        {/* <Link href="/podlazie/5"> */}
        <path
          className="cls-5"
          d="M517.33,571.5V518.57L893,521.86v54Z"
          transform="translate(14.57 174.16)"
        />
        {/* </Link> */}
      </g>
      <g id="_05_nr" data-name="05 nr">
        <path
          className="cls-4"
          d="M419.16,541.1a5.11,5.11,0,0,1,.12-1.16,3.11,3.11,0,0,1,.33-.88,1.44,1.44,0,0,1,.51-.55,1.13,1.13,0,0,1,.64-.2,1.08,1.08,0,0,1,.64.2,1.44,1.44,0,0,1,.51.55,2.61,2.61,0,0,1,.33.88,5.24,5.24,0,0,1,0,2.32,2.61,2.61,0,0,1-.33.88,1.55,1.55,0,0,1-.51.56,1.07,1.07,0,0,1-.64.19,1.12,1.12,0,0,1-.64-.19,1.55,1.55,0,0,1-.51-.56,3.11,3.11,0,0,1-.33-.88A5.11,5.11,0,0,1,419.16,541.1Zm-2.6,0a6.55,6.55,0,0,0,.53,2.77,4.09,4.09,0,0,0,1.47,1.74,4.49,4.49,0,0,0,4.45,0,3.85,3.85,0,0,0,1.45-1.74,7.78,7.78,0,0,0,0-5.54,3.75,3.75,0,0,0-1.45-1.72,4.36,4.36,0,0,0-4.45,0,4,4,0,0,0-1.47,1.72A6.55,6.55,0,0,0,416.56,541.1Zm17.77,1.79a3.19,3.19,0,0,0-.43-1.73,2.83,2.83,0,0,0-1.12-1.08,3.08,3.08,0,0,0-1.44-.37,7,7,0,0,0-.94.07,3.17,3.17,0,0,0-.84.27l.52-1.5h4V536.2h-6L426.72,542a4.77,4.77,0,0,1,1-.33,7.27,7.27,0,0,1,1-.16c.32,0,.59,0,.83,0a3.34,3.34,0,0,1,.84.11,1.51,1.51,0,0,1,.68.34.81.81,0,0,1,.28.66,1,1,0,0,1-.22.67,1.25,1.25,0,0,1-.63.38,3.7,3.7,0,0,1-.95.11,3.36,3.36,0,0,1-.72-.09,5.21,5.21,0,0,1-.87-.29,6.19,6.19,0,0,1-.89-.5l-.9,2.32a9,9,0,0,0,1.08.52,7.77,7.77,0,0,0,1.35.36,7.51,7.51,0,0,0,1.63.16,5.42,5.42,0,0,0,1.43-.2,4.28,4.28,0,0,0,1.33-.57,3.22,3.22,0,0,0,1-1A2.88,2.88,0,0,0,434.33,542.89Z"
          transform="translate(14.57 174.16)"
        />
        <rect className="cls-4" x="471.57" y="714.66" width="24" height="2" />
      </g>

      <g
        id="_06_highlight"
        data-name="06 highlight"
        onMouseEnter={() => {
          div6.current?.classList.remove("none");
          div6.current?.classList.add("xl:block");
          div6.current?.classList.add("hidden");
        }}
        onMouseLeave={() => div6.current?.classList.add("none")}
        onClick={() => fetch("08.01", Number(router.query.id))}
      >
        {/* <Link href="/podlazie/6"> */}
        <path
          className="cls-5"
          d="M517.33,517.78V465.86L893,469.15v52Z"
          transform="translate(14.57 174.16)"
        />
        {/* </Link> */}
      </g>
      <g id="_06_nr" data-name="06 nr">
        <path
          className="cls-4"
          d="M419.16,488.1a5.11,5.11,0,0,1,.12-1.16,3.11,3.11,0,0,1,.33-.88,1.44,1.44,0,0,1,.51-.55,1.13,1.13,0,0,1,.64-.2,1.08,1.08,0,0,1,.64.2,1.44,1.44,0,0,1,.51.55,2.61,2.61,0,0,1,.33.88,5.24,5.24,0,0,1,0,2.32,2.61,2.61,0,0,1-.33.88,1.55,1.55,0,0,1-.51.56,1.07,1.07,0,0,1-.64.19,1.12,1.12,0,0,1-.64-.19,1.55,1.55,0,0,1-.51-.56,3.11,3.11,0,0,1-.33-.88A5.11,5.11,0,0,1,419.16,488.1Zm-2.6,0a6.55,6.55,0,0,0,.53,2.77,4.09,4.09,0,0,0,1.47,1.74,4.49,4.49,0,0,0,4.45,0,3.85,3.85,0,0,0,1.45-1.74,7.78,7.78,0,0,0,0-5.54,3.75,3.75,0,0,0-1.45-1.72,4.05,4.05,0,0,0-5.92,1.72A6.55,6.55,0,0,0,416.56,488.1Zm12.36,1.4a1.5,1.5,0,0,1,.19-.78,1.32,1.32,0,0,1,.53-.52,1.72,1.72,0,0,1,.78-.18,1.54,1.54,0,0,1,.75.18,1.32,1.32,0,0,1,.53.52,1.51,1.51,0,0,1,.2.78,1.47,1.47,0,0,1-.2.77,1.41,1.41,0,0,1-.53.5,1.55,1.55,0,0,1-.75.19,1.73,1.73,0,0,1-.78-.19,1.41,1.41,0,0,1-.53-.5A1.47,1.47,0,0,1,428.92,489.5Zm1.28-6.24-2.68,3.3a8.35,8.35,0,0,0-.91,1.37,3.34,3.34,0,0,0-.38,1.57,3.41,3.41,0,0,0,2.09,3.35,5.66,5.66,0,0,0,4.18,0A3.44,3.44,0,0,0,434,491.6a3.59,3.59,0,0,0,.58-2.1,3.24,3.24,0,0,0-.28-1.36,3,3,0,0,0-.72-1,3.05,3.05,0,0,0-2.07-.84,2.88,2.88,0,0,0-.9.12,2.44,2.44,0,0,0-.78.51l.6-.3,3.21-3.38Z"
          transform="translate(14.57 174.16)"
        />
        <rect className="cls-4" x="471.57" y="661.66" width="24" height="2" />
      </g>

      <g
        id="_07_highlight"
        data-name="07 highlight"
        onMouseEnter={() => {
          div7.current?.classList.remove("none");
          div7.current?.classList.add("xl:block");
          div7.current?.classList.add("hidden");
        }}
        onMouseLeave={() => div7.current?.classList.add("none")}
        onClick={() => fetch("08.01", Number(router.query.id))}
      >
        {/* <Link href="/podlazie/7"> */}
        <path
          className="cls-5"
          d="M517.33,464.75v-54L893,415.25v53Z"
          transform="translate(14.57 174.16)"
        />
        {/* </Link> */}
      </g>
      <g id="_07_nr" data-name="07 nr">
        <path
          className="cls-4"
          d="M419.16,435.1a5.11,5.11,0,0,1,.12-1.16,3.11,3.11,0,0,1,.33-.88,1.44,1.44,0,0,1,.51-.55,1.13,1.13,0,0,1,.64-.2,1.08,1.08,0,0,1,.64.2,1.44,1.44,0,0,1,.51.55,2.61,2.61,0,0,1,.33.88,5.24,5.24,0,0,1,0,2.32,2.61,2.61,0,0,1-.33.88,1.55,1.55,0,0,1-.51.56,1.07,1.07,0,0,1-.64.19,1.12,1.12,0,0,1-.64-.19,1.55,1.55,0,0,1-.51-.56,3.11,3.11,0,0,1-.33-.88A5.11,5.11,0,0,1,419.16,435.1Zm-2.6,0a6.55,6.55,0,0,0,.53,2.77,4.09,4.09,0,0,0,1.47,1.74,4.49,4.49,0,0,0,4.45,0,3.85,3.85,0,0,0,1.45-1.74,7.78,7.78,0,0,0,0-5.54,3.75,3.75,0,0,0-1.45-1.72,4.05,4.05,0,0,0-5.92,1.72A6.55,6.55,0,0,0,416.56,435.1Zm9.39-2.37h4.35L426.59,440h2.94l4.75-9.8H426Z"
          transform="translate(14.57 174.16)"
        />
        <rect className="cls-4" x="471.57" y="608.66" width="24" height="2" />
      </g>

      <g
        id="_08_highlight"
        data-name="08 highlight"
        onMouseEnter={() => {
          div8.current?.classList.remove("none");
          div8.current?.classList.add("xl:block");
          div8.current?.classList.add("hidden");
        }}
        onMouseLeave={() => div8.current?.classList.add("none")}
        onClick={() => fetch("08.01", Number(router.query.id))}
      >
        {/* <Link href="/podlazie/8"> */}
        <path
          className="cls-5"
          d="M517.33,410.09v-54l375.71,5v53.51Z"
          transform="translate(14.57 174.16)"
        />
        {/* </Link> */}
      </g>
      <g id="_08_nr" data-name="08 nr">
        <path
          className="cls-4"
          d="M419.16,383.1a5.11,5.11,0,0,1,.12-1.16,3.11,3.11,0,0,1,.33-.88,1.44,1.44,0,0,1,.51-.55,1.13,1.13,0,0,1,.64-.2,1.08,1.08,0,0,1,.64.2,1.44,1.44,0,0,1,.51.55,2.61,2.61,0,0,1,.33.88,5.24,5.24,0,0,1,0,2.32,2.61,2.61,0,0,1-.33.88,1.55,1.55,0,0,1-.51.56,1.07,1.07,0,0,1-.64.19,1.12,1.12,0,0,1-.64-.19,1.55,1.55,0,0,1-.51-.56,3.11,3.11,0,0,1-.33-.88A5.11,5.11,0,0,1,419.16,383.1Zm-2.6,0a6.55,6.55,0,0,0,.53,2.77,4.09,4.09,0,0,0,1.47,1.74,4.49,4.49,0,0,0,4.45,0,3.85,3.85,0,0,0,1.45-1.74,7.78,7.78,0,0,0,0-5.54,3.75,3.75,0,0,0-1.45-1.72,4.05,4.05,0,0,0-5.92,1.72A6.55,6.55,0,0,0,416.56,383.1Zm10-2.53a2.36,2.36,0,0,0,.31,1.21,2.8,2.8,0,0,0,.84.84,3.83,3.83,0,0,0,1.12.48,5,5,0,0,0,2.44,0,3.67,3.67,0,0,0,1.13-.48,2.56,2.56,0,0,0,.83-.84,2.28,2.28,0,0,0,.32-1.21,2.16,2.16,0,0,0-.49-1.45,2.93,2.93,0,0,0-1.27-.88,5.36,5.36,0,0,0-3.48,0,3.06,3.06,0,0,0-1.27.88A2.2,2.2,0,0,0,426.59,380.57Zm2.55.25a1.21,1.21,0,0,1,.11-.52.92.92,0,0,1,.34-.34,1,1,0,0,1,.49-.12,1,1,0,0,1,.5.12.75.75,0,0,1,.32.34,1,1,0,0,1,.13.52,1,1,0,0,1-.13.52,1,1,0,0,1-.32.35,1,1,0,0,1-.5.12,1,1,0,0,1-.49-.12,1.26,1.26,0,0,1-.34-.35A1.24,1.24,0,0,1,429.14,380.82Zm-2.9,4.52a2.57,2.57,0,0,0,.31,1.25,2.9,2.9,0,0,0,.87.91,4.62,4.62,0,0,0,1.23.56,5.48,5.48,0,0,0,2.86,0,4.77,4.77,0,0,0,1.23-.56,2.79,2.79,0,0,0,.87-.91,2.47,2.47,0,0,0,.32-1.25,2.44,2.44,0,0,0-.36-1.36,2.73,2.73,0,0,0-1-.89,4.07,4.07,0,0,0-1.26-.51,5.84,5.84,0,0,0-1.27-.15,5.93,5.93,0,0,0-1.28.15,4.17,4.17,0,0,0-1.24.51,2.7,2.7,0,0,0-.95.89A2.36,2.36,0,0,0,426.24,385.34Zm2.72-.42a1.16,1.16,0,0,1,.14-.56,1.13,1.13,0,0,1,1.55-.39.91.91,0,0,1,.41.39,1.07,1.07,0,0,1,.15.56,1.22,1.22,0,0,1-.15.63.91.91,0,0,1-.41.39,1.31,1.31,0,0,1-1.14,0,1,1,0,0,1-.41-.39A1.33,1.33,0,0,1,429,384.92Z"
          transform="translate(14.57 174.16)"
        />
        <rect className="cls-4" x="471.57" y="556.66" width="24" height="2" />
      </g>

      <g
        id="_09_highlight"
        data-name="09 highlight"
        onMouseEnter={() => {
          div9.current?.classList.remove("none");
          div9.current?.classList.add("xl:block");
          div9.current?.classList.add("hidden");
        }}
        onMouseLeave={() => div9.current?.classList.add("none")}
        onClick={() => fetch("08.01", Number(router.query.id))}
      >
        {/* <Link href="/podlazie/9"> */}
        <path
          className="cls-5"
          d="M517.33,355.5v-54L893,307v53Z"
          transform="translate(14.57 174.16)"
        />
        {/* </Link> */}
      </g>
      <g id="_09_nr" data-name="09 nr">
        <path
          className="cls-4"
          d="M419.16,330.1a5.11,5.11,0,0,1,.12-1.16,3.11,3.11,0,0,1,.33-.88,1.44,1.44,0,0,1,.51-.55,1.13,1.13,0,0,1,.64-.2,1.08,1.08,0,0,1,.64.2,1.44,1.44,0,0,1,.51.55,2.61,2.61,0,0,1,.33.88,5.24,5.24,0,0,1,0,2.32,2.61,2.61,0,0,1-.33.88,1.55,1.55,0,0,1-.51.56,1.07,1.07,0,0,1-.64.19,1.12,1.12,0,0,1-.64-.19,1.55,1.55,0,0,1-.51-.56,3.11,3.11,0,0,1-.33-.88A5.11,5.11,0,0,1,419.16,330.1Zm-2.6,0a6.55,6.55,0,0,0,.53,2.77,4.09,4.09,0,0,0,1.47,1.74,4.49,4.49,0,0,0,4.45,0,3.85,3.85,0,0,0,1.45-1.74,7.78,7.78,0,0,0,0-5.54,3.75,3.75,0,0,0-1.45-1.72,4.05,4.05,0,0,0-5.92,1.72A6.55,6.55,0,0,0,416.56,330.1Zm15.34-1.4a1.51,1.51,0,0,1-.2.78,1.47,1.47,0,0,1-.53.52,1.54,1.54,0,0,1-.75.18,1.72,1.72,0,0,1-.78-.18,1.47,1.47,0,0,1-.53-.52,1.5,1.5,0,0,1-.19-.78,1.44,1.44,0,0,1,.19-.77,1.34,1.34,0,0,1,.53-.5,1.61,1.61,0,0,1,.78-.19,1.44,1.44,0,0,1,.75.19,1.34,1.34,0,0,1,.53.5A1.45,1.45,0,0,1,431.9,328.7Zm-1.29,6.24,2.69-3.3a9,9,0,0,0,.91-1.37,3.34,3.34,0,0,0,.38-1.57,3.55,3.55,0,0,0-.58-2.09,3.29,3.29,0,0,0-1.51-1.24,5.41,5.41,0,0,0-4.18,0,3.48,3.48,0,0,0-1.52,1.24,3.62,3.62,0,0,0-.57,2.09,3,3,0,0,0,1,2.37,3.36,3.36,0,0,0,1,.61,3,3,0,0,0,1.08.21,2.77,2.77,0,0,0,.89-.12,2.61,2.61,0,0,0,.79-.51l-.61.3-3.2,3.38Z"
          transform="translate(14.57 174.16)"
        />
        <rect className="cls-4" x="471.57" y="503.66" width="24" height="2" />
      </g>
      <g
        id="_10_highlight"
        data-name="10 highlight"
        onMouseEnter={() => {
          div10.current?.classList.remove("none");
          div10.current?.classList.add("xl:block");
          div10.current?.classList.add("hidden");
        }}
        onMouseLeave={() => div10.current?.classList.add("none")}
        onClick={() => fetch("08.01", Number(router.query.id))}
      >
        {/* <Link href="/podlazie/10"> */}
        <path
          className="cls-5"
          d="M517.33,300.56v-52L893,254.06v52Z"
          transform="translate(14.57 174.16)"
        />
        {/* </Link> */}
      </g>
      <g id="_10_nr" data-name="10 nr">
        <path
          className="cls-4"
          d="M416.9,275.29l2.5-.58V282H422V272l-5.11,1Zm9.65,1.81a5.14,5.14,0,0,1,.11-1.16,3.45,3.45,0,0,1,.33-.88,1.52,1.52,0,0,1,.51-.55,1.15,1.15,0,0,1,.64-.2,1.11,1.11,0,0,1,.65.2,1.5,1.5,0,0,1,.5.55,2.84,2.84,0,0,1,.34.88,5.67,5.67,0,0,1,0,2.32,2.84,2.84,0,0,1-.34.88,1.62,1.62,0,0,1-.5.56,1.11,1.11,0,0,1-.65.19,1.14,1.14,0,0,1-.64-.19,1.64,1.64,0,0,1-.51-.56,3.45,3.45,0,0,1-.33-.88A5.14,5.14,0,0,1,426.55,277.1Zm-2.61,0a6.39,6.39,0,0,0,.54,2.77,4,4,0,0,0,1.47,1.74,4.08,4.08,0,0,0,2.19.59,4.2,4.2,0,0,0,2.26-.59,3.9,3.9,0,0,0,1.44-1.74,7.64,7.64,0,0,0,0-5.54,3.79,3.79,0,0,0-1.44-1.72,4,4,0,0,0-2.26-.61,3.92,3.92,0,0,0-2.19.61,3.85,3.85,0,0,0-1.47,1.72A6.39,6.39,0,0,0,423.94,277.1Z"
          transform="translate(14.57 174.16)"
        />
        <rect className="cls-4" x="471.57" y="450.66" width="24" height="2" />
      </g>

      <g
        id="_11_highlight"
        data-name="11 highlight"
        onMouseEnter={() => {
          div11.current?.classList.remove("none");
          div11.current?.classList.add("xl:block");
          div11.current?.classList.add("hidden");
        }}
        onMouseLeave={() => div11.current?.classList.add("none")}
        onClick={() => fetch("08.01", Number(router.query.id))}
      >
        {/* <Link href="/podlazie/11"> */}
        <path
          className="cls-5"
          d="M517.33,247.75v-53L893,201.25v52Z"
          transform="translate(14.57 174.16)"
        />
        {/* </Link> */}
      </g>
      <g id="_11_nr" data-name="11 nr">
        <path
          className="cls-4"
          d="M416.9,222.29l2.5-.58V229H422V219l-5.11,1Zm7.38,0,2.51-.58V229h2.6V219l-5.11,1Z"
          transform="translate(14.57 174.16)"
        />
        <rect className="cls-4" x="471.57" y="397.66" width="24" height="2" />
      </g>
      <g
        id="_12_highlight"
        data-name="12 highlight"
        onMouseEnter={() => {
          div12.current?.classList.remove("none");
          div12.current?.classList.add("xl:block");
          div12.current?.classList.add("hidden");
        }}
        onMouseLeave={() => div12.current?.classList.add("none")}
        onClick={() => fetch("08.01", Number(router.query.id))}
      >
        {/* <Link href="/podlazie/12"> */}
        <path
          className="cls-5"
          d="M517.33,193.53v-53L893,147v53Z"
          transform="translate(14.57 174.16)"
        />
        {/* </Link> */}
      </g>
      <g id="_12_nr" data-name="12 nr">
        <path
          className="cls-4"
          d="M416.9,169.79l2.5-.58v7.29H422v-10l-5.11,1Zm6.76,6.71h8.73V174h-3.77l2-1.71a4.43,4.43,0,0,0,1.05-1.17,2.73,2.73,0,0,0,.39-1.44,2.8,2.8,0,0,0-.25-1.17,3.09,3.09,0,0,0-.76-1,3.42,3.42,0,0,0-1.22-.73,4.51,4.51,0,0,0-1.66-.28,4.34,4.34,0,0,0-2.27.55,3.46,3.46,0,0,0-1.37,1.42,4.23,4.23,0,0,0-.45,1.94h2.66a2.16,2.16,0,0,1,.15-.83,1.39,1.39,0,0,1,.48-.56,1.23,1.23,0,0,1,.7-.21,1.15,1.15,0,0,1,.52.1,1,1,0,0,1,.38.24.83.83,0,0,1,.22.33,1.14,1.14,0,0,1,.07.41,1.73,1.73,0,0,1-.17.73,2.63,2.63,0,0,1-.46.68c-.2.23-.43.51-.7.81Z"
          transform="translate(14.57 174.16)"
        />
        <rect className="cls-4" x="471.57" y="345.16" width="24" height="2" />
      </g>
      <g
        id="_13_highlight"
        data-name="13 highlight"
        onMouseEnter={() => {
          div13.current?.classList.remove("none");
          div13.current?.classList.add("xl:block");
          div13.current?.classList.add("hidden");
        }}
        onMouseLeave={() => div13.current?.classList.add("none")}
        onClick={() => fetch("08.01", Number(router.query.id))}
      >
        {/* <Link href="/podlazie/13"> */}
        <path
          className="cls-5"
          d="M517.33,140V87L893,93.48v53Z"
          transform="translate(14.57 174.16)"
        />
        {/* </Link> */}
      </g>
      <g id="_13_nr" data-name="13 nr">
        <path
          className="cls-4"
          d="M416.9,117.29l2.5-.58V124H422V114l-5.11,1Zm10.42,2a9.14,9.14,0,0,0,2.24-.25,3.54,3.54,0,0,0,1.59-.83,1.89,1.89,0,0,0,.61-1.45,2.37,2.37,0,0,0-.44-1.39,2.82,2.82,0,0,0-1.24-1,4.78,4.78,0,0,0-2-.37,4.11,4.11,0,0,0-1.94.44,3.11,3.11,0,0,0-1.28,1.15,2.94,2.94,0,0,0-.45,1.61h2.49a1,1,0,0,1,.32-.77,1.25,1.25,0,0,1,.86-.3,1.37,1.37,0,0,1,.54.1.73.73,0,0,1,.34.28.82.82,0,0,1,.11.42.87.87,0,0,1-.13.46,1.17,1.17,0,0,1-.36.38,2.24,2.24,0,0,1-.56.27,2.6,2.6,0,0,1-.71.09Zm.64,5a5.58,5.58,0,0,0,2.21-.38,3.08,3.08,0,0,0,1.39-1.05,2.52,2.52,0,0,0,.48-1.52,2.23,2.23,0,0,0-.36-1.29,2.49,2.49,0,0,0-1-.88,4.81,4.81,0,0,0-1.5-.51,11,11,0,0,0-1.9-.15v1.32a4.22,4.22,0,0,1,.94.09,1.84,1.84,0,0,1,.63.28,1.16,1.16,0,0,1,.36.41,1.13,1.13,0,0,1,.11.48,1.14,1.14,0,0,1-.17.63.87.87,0,0,1-.46.33,1.87,1.87,0,0,1-.66.1,1.8,1.8,0,0,1-.68-.14,1.08,1.08,0,0,1-.52-.45,1.41,1.41,0,0,1-.2-.78H424a3.26,3.26,0,0,0,.27,1.3,3.3,3.3,0,0,0,.77,1.13,3.63,3.63,0,0,0,1.24.8A4.62,4.62,0,0,0,428,124.25Z"
          transform="translate(14.57 174.16)"
        />
        <rect className="cls-4" x="471.57" y="292.66" width="24" height="2" />
      </g>
      <g
        id="_14_highlight"
        data-name="14 highlight"
        onMouseEnter={() => {
          div14.current?.classList.remove("none");
          div14.current?.classList.add("xl:block");
          div14.current?.classList.add("hidden");

        }}
        onMouseLeave={() => div14.current?.classList.add("none")}
        onClick={() => fetch("08.01", Number(router.query.id))}
      >
        {/* <Link href="/podlazie/14"> */}
        <path
          className="cls-5"
          d="M517.33,85.51v-53L893,39V92Z"
          transform="translate(14.57 174.16)"
        />
        {/* </Link> */}
      </g>
      <g id="_14_nr" data-name="14 nr">
        <path
          className="cls-4"
          d="M416.9,64.29l2.5-.58V71H422V61l-5.11,1Zm6.65,5H433V67h-2l-.23.41H427L429,64.87v3.51l-.33.16V71h2.83V61.2h-2.13Z"
          transform="translate(14.57 174.16)"
        />
        <rect className="cls-4" x="471.57" y="239.66" width="24" height="2" />
      </g>
      <foreignObject
        className="node"
        x="950"
        y="100"
        width="250"
        height="320px"
      >
        <div className="none" ref={div14}>
          <PopUp
            room15={twelthFloor?.oneHalfRooms}
            room45={twelthFloor?.fourHalfRooms}
            room1={twelthFloor?.oneRooms}
            room2={twelthFloor?.twoRooms}
            room3={twelthFloor?.threeRooms}
            title={translate("filter-drop-down-14")}
            top={"600px"}
            left={"950px"}
            display={"hidden xl:block"}
          />
        </div>
      </foreignObject>
      <foreignObject
        className="node"
        x="950"
        y="150"
        width="250"
        height="320px"
      >
        <div className="none" ref={div13}>
          <PopUp
            room15={eleventhFloor?.oneHalfRooms}
            room45={eleventhFloor?.fourHalfRooms}
            room1={eleventhFloor?.oneRooms}
            room2={eleventhFloor?.twoRooms}
            room3={eleventhFloor?.threeRooms}
            title={translate("filter-drop-down-13")}
            top={"600px"}
            left={"950px"}
            display={"hidden xl:block"}
          />
        </div>
      </foreignObject>
      <foreignObject
        className="node"
        x="950"
        y="200"
        width="250"
        height="320px"
      >
        <div className="none" ref={div12}>
          <PopUp
            room15={tenthFloor?.oneHalfRooms}
            room45={tenthFloor?.fourHalfRooms}
            room1={tenthFloor?.oneRooms}
            room2={tenthFloor?.twoRooms}
            room3={tenthFloor?.threeRooms}
            title={translate("filter-drop-down-12")}
            top={"600px"}
            left={"950px"}
            display={"hidden xl:block"}
          />
        </div>
      </foreignObject>
      <foreignObject
        className="node"
        x="950"
        y="250"
        width="250"
        height="320px"
      >
        <div className="none" ref={div11}>
          <PopUp
            room15={ninthFloor?.oneHalfRooms}
            room45={ninthFloor?.fourHalfRooms}
            room1={ninthFloor?.oneRooms}
            room2={ninthFloor?.twoRooms}
            room3={ninthFloor?.threeRooms}
            title={translate("filter-drop-down-11")}
            top={"600px"}
            left={"950px"}
            display={"hidden xl:block"}
          />
        </div>
      </foreignObject>
      {/*5*/}
      <foreignObject
        className="node"
        x="950"
        y="300"
        width="250"
        height="320px"
      >
        <div className="none" ref={div10}>
          <PopUp
            room15={eighthFloor?.oneHalfRooms}
            room45={eighthFloor?.fourHalfRooms}
            room1={eighthFloor?.oneRooms}
            room2={eighthFloor?.twoRooms}
            room3={eighthFloor?.threeRooms}
            title={translate("filter-drop-down-10")}
            top={"600px"}
            left={"950px"}
            display={"hidden xl:block"}
          />
        </div>
      </foreignObject>
      <foreignObject
        className="node"
        x="950"
        y="350"
        width="250"
        height="320px"
      >
        <div className="none" ref={div9}>
          <PopUp
            room15={seventhFloor?.oneHalfRooms}
            room45={seventhFloor?.fourHalfRooms}
            room1={seventhFloor?.oneRooms}
            room2={seventhFloor?.twoRooms}
            room3={seventhFloor?.threeRooms}
            title={translate("filter-drop-down-9")}
            top={"600px"}
            left={"950px"}
            display={"hidden xl:block"}
          />
        </div>
      </foreignObject>
      <foreignObject
        className="node"
        x="950"
        y="430"
        width="250"
        height="320px"
      >
        <div className="none" ref={div8}>
          <PopUp
            room15={sixthFloor?.oneHalfRooms}
            room45={sixthFloor?.fourHalfRooms}
            room1={sixthFloor?.oneRooms}
            room2={sixthFloor?.twoRooms}
            room3={sixthFloor?.threeRooms}
            title={translate("filter-drop-down-8")}
            top={"600px"}
            left={"950px"}
            display={"hidden xl:block"}
          />
        </div>
      </foreignObject>
      <foreignObject
        className="node"
        x="950"
        y="470"
        width="250"
        height="320px"
      >
        <div className="none" ref={div7}>
          <PopUp
            room15={fifthFloor?.oneHalfRooms}
            room45={fifthFloor?.fourHalfRooms}
            room1={fifthFloor?.oneRooms}
            room2={fifthFloor?.twoRooms}
            room3={fifthFloor?.threeRooms}
            title={translate("filter-drop-down-7")}
            top={"600px"}
            left={"950px"}
            display={"hidden xl:block"}
          />
        </div>
      </foreignObject>
      <foreignObject
        className="node"
        x="950"
        y="530"
        width="250"
        height="320px"
      >
        <div className="none" ref={div6}>
          <PopUp
            room15={fourthFloor?.oneHalfRooms}
            room45={fourthFloor?.fourHalfRooms}
            room1={fourthFloor?.oneRooms}
            room2={fourthFloor?.twoRooms}
            room3={fourthFloor?.threeRooms}
            title={translate("filter-drop-down-6")}
            top={"600px"}
            left={"950px"}
            display={"hidden xl:block"}
          />
        </div>
      </foreignObject>
      <foreignObject
        className="node"
        x="950"
        y="570"
        width="250"
        height="320px"
      >
        <div className="none" ref={div5}>
          <PopUp
            room15={thirdFloor?.oneHalfRooms}
            room45={thirdFloor?.fourHalfRooms}
            room1={thirdFloor?.oneRooms}
            room2={thirdFloor?.twoRooms}
            room3={thirdFloor?.threeRooms}
            title={translate("filter-drop-down-5")}
            top={"600px"}
            left={"950px"}
            display={"hidden xl:block"}
          />
        </div>
      </foreignObject>
      <foreignObject
        className="node"
        x="950"
        y="630"
        width="250"
        height="320px"
      >
        <div className="none" ref={div4}>
          <PopUp
            room15={secondFloor?.oneHalfRooms}
            room45={secondFloor?.fourHalfRooms}
            room1={secondFloor?.oneRooms}
            room2={secondFloor?.twoRooms}
            room3={secondFloor?.threeRooms}
            title={translate("filter-drop-down-4")}
            top={"600px"}
            left={"950px"}
            display={"hidden xl:block"}
          />
        </div>
      </foreignObject>
      <foreignObject
        className="node"
        x="950"
        y="700"
        width="250"
        height="320px"
      >
        <div className="none" ref={div3}>
          <PopUp
            room15={firstFloor?.oneHalfRooms}
            room45={firstFloor?.fourHalfRooms}
            room1={firstFloor?.oneRooms}
            room2={firstFloor?.twoRooms}
            room3={firstFloor?.threeRooms}
            title={translate("filter-drop-down-3")}
            top={"600px"}
            left={"950px"}
            display={"hidden xl:block"}
          />
        </div>
      </foreignObject>
    </>
  );
};

export default HouseExtension;
