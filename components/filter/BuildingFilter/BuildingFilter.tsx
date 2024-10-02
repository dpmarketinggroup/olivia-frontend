import { useEffect, useState } from "react";
import { Checkbox, RangeSlider } from "@mantine/core";
import House from "./House";
import { Table } from "@components/table";
import { FilterButton } from "@components/ui/";
import { BasketCrossed, TwoArrows, Basket } from "@components/icons";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Both from "@components/icons/Both";

export type Response = {
  id: number;
  attributes: {
    balkon_rozloha?: number;
    terasa_rozloha?: number;
    celkova_rozloha: number;
    cena: string;
    chodba_rozloha?: number;
    chodba_rozloha2?: number;
    cislo_bytu: string;
    dostupnost: "voľný" | "rezervovaný" | "predaný";
    pocet_izieb:
    | "jedno-izbový"
    | "jeden a pol-izbový"
    | "dvoj-izbový"
    | "dva a pol-izbový"
    | "troj-izbový"
    | "štyri a pol-izbový";
    poschodie: number;
    primarna_foto: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
};

const Building = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [oneRooms, setOneRooms] = useState<Response[]>();
  const [twoRooms, setTwoRooms] = useState<Response[]>();
  const [oneAndHalfRooms, setOneAndHalfRooms] = useState<Response[]>();

  const [threeRooms, setThreeRooms] = useState<Response[]>();

  const [fourAndHalfRooms, setFourAndHalfRooms] = useState<Response[]>();

  const [room1Clicked, setRoom1Clicked] = useState(false);
  const [room2Clicked, setRoom2Clicked] = useState(false);
  const [room15Clicked, setRoom15Clicked] = useState(false);

  const [room3Clicked, setRoom3Clicked] = useState(false);

  const [room45Clicked, setRoom45Clicked] = useState(false);
  const [withTerrace, setWithTerrace] = useState(false);
  const [withBalcony, setWithBalcony] = useState(false);
  const [withoutBalcony, setWithoutBalcony] = useState(false);
  const [withBalconyAndTerrace, setWithBalconyAndTerrace] = useState(false);

  const [price, setPrice] = useState<[number, number]>([130, 500]);
  const [floor, setFloor] = useState<[number, number]>([3, 14]);
  const [area, setArea] = useState<[number, number]>([20, 200]);

  const { t: translate } = useTranslation("home");
  const [isSoldChecked, setIsSoldChecked] = useState(true);
  const [isReservatedChecked, setIsReservatedChecked] = useState(true);

  useEffect(() => {
    async function fetch() {
      try {
        const res = await axios.get(
          // `https://floating-scrubland-57360.herokuapp.com/api/byts?pagination[pageSize]=200&populate=*&filters[dostupnost][$ne]=predaný`pôvodné api
          `https://floating-scrubland-57360.herokuapp.com/api/byts?pagination[pageSize]=200&populate=*&filters[$and][0][dostupnost][$ne]=rezervovaný&filters[$and][1][dostupnost][$ne]=predaný`
        );

        if (router.pathname === "/ponuka-apartmanov") {
          setOneRooms(
            res.data.data.filter(
              (val: any) => val.attributes?.pocet_izieb === "jedno-izbový"
            )
          );
          setTwoRooms(
            res.data.data.filter(
              (val: any) => val.attributes?.pocet_izieb === "dvoj-izbový"
            )
          );
          setOneAndHalfRooms(
            res.data.data.filter(
              (val: any) => val.attributes?.pocet_izieb === "jeden a pol-izbový"
            )
          );

          setThreeRooms(
            res.data.data.filter(
              (val: any) => val.attributes?.pocet_izieb === "troj-izbový"
            )
          );

          setFourAndHalfRooms(
            res.data.data.filter(
              (val: any) => val.attributes?.pocet_izieb === "štyri a pol-izbový"
            )
          );
        }
      } catch (e) {
        console.log(e);
      }
    }

    fetch();
  }, []);

  async function handleClick() {
    let query = `?filters[cena][$gte]=${price[0] * 1000}&filters[cena][$lte]=${price[1] * 1000
      }&filters[celkova_rozloha][$gte]=${area[0]
      }&filters[celkova_rozloha][$lte]=${area[1]}&filters[poschodie][$gte]=${floor[0]
      }&filters[poschodie][$lte]=${floor[1]}&pagination[pageSize]=200&populate=*`;
    let query2 = query.replace(
      `?filters[cena][$gte]=${price[0] * 1000}&filters[cena][$lte]=${price[1] * 1000
      }`,
      ""
    );
    if (room1Clicked) {
      query += `&filters[pocet_izieb][$eq]=jedno-izbový`;
      query2 += `&filters[pocet_izieb][$eq]=jedno-izbový`;
    }
    if (room2Clicked) {
      query += `&filters[pocet_izieb][$eq]=dvoj-izbový`;
      query2 += `&filters[pocet_izieb][$eq]=dvoj-izbový`;
    }
    if (room15Clicked) {
      query += `&filters[pocet_izieb][$eq]=jeden a pol-izbový`;
      query2 += `&filters[pocet_izieb][$eq]=jeden a pol-izbový`;
    }

    if (room3Clicked) {
      query += `&filters[pocet_izieb][$eq]=troj-izbový`;
      query2 += `&filters[pocet_izieb][$eq]=troj-izbový`;
    }
    if (room45Clicked) {
      query += `&filters[pocet_izieb][$eq]=štyri a pol-izbový`;
      query2 += `&filters[pocet_izieb][$eq]=štyri a pol-izbový`;
    }
    if (withBalconyAndTerrace) {
      query +=
        "&filters[$and][0][balkon_rozloha][$notNull]=true&filters[$and][1][terasa_rozloha][$notNull]=true";
      query2 +=
        "&filters[$and][0][balkon_rozloha][$notNull]=true&filters[$and][1][terasa_rozloha][$notNull]=true";
    }
    if (withoutBalcony) {
      query += `&filters[balkon_rozloha][$null]=true`;
      query2 += `&filters[balkon_rozloha][$null]=true`;
    }
    if (withTerrace && withBalcony) {
      query +=
        "&filters[$or][0][balkon_rozloha][$notNull]=true&filters[$or][1][terasa_rozloha][$notNull]=true";
      query2 +=
        "&filters[$or][0][balkon_rozloha][$notNull]=true&filters[$or][1][terasa_rozloha][$notNull]=true";
    } else {
      if (withBalcony) {
        query += `&filters[balkon_rozloha][$notNull]=true`;
        query2 += `&filters[balkon_rozloha][$notNull]=true`;
      }
      if (withTerrace) {
        query += `&filters[terasa_rozloha][$notNull]=true`;
        query2 += `&filters[terasa_rozloha][$notNull]=true`;
      }
    }
    if (isSoldChecked && isReservatedChecked) {
      query += `&filters[$and][0][dostupnost][$ne]=rezervovaný&filters[$and][1][dostupnost][$ne]=predaný`;
      query2 += `&filters[$and][0][dostupnost][$ne]=rezervovaný&filters[$and][1][dostupnost][$ne]=predaný`;
    } else {
      query.replace(
        "&filters[$and][0][dostupnost][$ne]=rezervovaný&filters[$and][1][dostupnost][$ne]=predaný",
        ""
      );
      query2.replace(
        "&filters[$and][0][dostupnost][$ne]=rezervovaný&filters[$and][1][dostupnost][$ne]=predaný",
        ""
      );
    }

    if (isSoldChecked) {
      query += `&filters[dostupnost][$ne]=predaný`;
      query2 += `&filters[dostupnost][$ne]=predaný`;
    } else {
      query.replace("&filters[dostupnost][$ne]=predaný", "");
      query2.replace("&filters[dostupnost][$ne]=predaný", "");
    }
    if (isReservatedChecked) {
      query += `&filters[dostupnost][$ne]=rezervovaný`;
      query2 += `&filters[dostupnost][$ne]=rezervovaný`;
    } else {
      query.replace("&filters[dostupnost][$ne]=rezervovaný", "");
      query2.replace("&filters[dostupnost][$ne]=rezervovaný", "");
    }
    let response;
    try {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://floating-scrubland-57360.herokuapp.com/api/byts${query}`
        );
        const res2 = await axios.get(
          `https://floating-scrubland-57360.herokuapp.com/api/byts?filters[cena][$null]=true${query2}`
        );
        response = [...res.data.data, ...res2.data.data];

        setOneRooms(
          response.filter(
            (val: any) => val.attributes.pocet_izieb === "jedno-izbový"
          )
        );
        setTwoRooms(
          response.filter(
            (val: any) => val.attributes.pocet_izieb === "dvoj-izbový"
          )
        );
        setOneAndHalfRooms(
          response.filter(
            (val: any) => val.attributes.pocet_izieb === "jeden a pol-izbový"
          )
        );

        setThreeRooms(
          response.filter(
            (val: any) => val.attributes.pocet_izieb === "troj-izbový"
          )
        );

        setFourAndHalfRooms(
          response.filter(
            (val: any) => val.attributes.pocet_izieb === "štyri a pol-izbový"
          )
        );
      } catch (e) {
        console.log(e);
      }
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }

  function getAdditionalRoom(attributes: any): number {
    if (!attributes.balkon_rozloha && !attributes.terasa_rozloha) return 0;
    if (attributes.balkon_rozloha && attributes.terasa_rozloha)
      return attributes.balkon_rozloha + attributes.terasa_rozloha;
    if (attributes.balkon_rozloha) return attributes.balkon_rozloha;
    if (attributes.terasa_rozloha) return attributes.terasa_rozloha;
    return 2;
  }

  return (
    <>
      <div className="w-full xl:max-w-[1920px] xl3 overflow-hidden">
        <House />
      </div>
      <div className="building bg-primary-pattern w-full mb-[80px] px-[1rem] xl:px-0">
        <div
          className={"w-full xl:max-w-[1200px] mx-auto py-[45px] xl:py-[90px]"}
        >
          <div className={"flex flex-col xl:grid grid-cols-3 gap-[50px]"}>
            <div className={"text-white"}>
              <h5 className={"mb-[20px] text-[14px] leading-[20px]"}>
                {translate("price")}{" "}
                <span className={"font-bold pl-[1rem]"}>
                  {price[0]}k - {price[1] === 500 ? "nad " + price[1] + "k" : price[1] + "k"}
                </span>
              </h5>
              <RangeSlider
                onChange={(value) => setPrice(value)}
                value={price}
                min={130}
                step={10}
                max={500}
                size={2}
                sx={{
                  ".mantine-Slider-thumb": {
                    color: "white",
                    border: "none",
                    width: 20,
                    height: 20,
                  },
                  ".mantine-Slider-bar": {
                    backgroundColor: "white",
                  },
                }}
              />
            </div>
            <div className={"text-white"}>
              <h5 className={"mb-[20px] text-[14px] leading-[20px]"}>
                {translate("floor")}{" "}
                <span className={"font-bold pl-[1rem]"}>
                  {floor[0]}-{floor[1]}
                </span>
              </h5>
              <RangeSlider
                size={2}
                onChange={(value) => setFloor(value)}
                value={floor}
                min={3}
                minRange={2}
                max={14}
                sx={{
                  ".mantine-Slider-thumb": {
                    color: "white",
                    border: "none",
                    width: 20,
                    height: 20,
                  },
                  ".mantine-Slider-bar": {
                    backgroundColor: "white",
                  },
                }}
              />
            </div>
            <div className={"text-white"}>
              <h5 className={"mb-[20px] text-[14px] leading-[20px]"}>
                {translate("size")}{" "}
                <span className={"font-bold pl-[1rem]"}>
                  {area[0]} - {area[1]} m²
                </span>
              </h5>
              <RangeSlider
                onChange={(value) => setArea(value)}
                value={area}
                min={20}
                step={5}
                max={200}
                size={2}
                sx={{
                  ".mantine-Slider-thumb": {
                    color: "white",
                    border: "none",
                    width: 20,
                    height: 20,
                  },
                  ".mantine-Slider-bar": {
                    backgroundColor: "white",
                  },
                }}
              />
            </div>
          </div>
          <div className={"flex flex-col xl:flex-row justify-between"}>
            <div className="flex xl:flex-row flex-col xl:justify-between gap-[30px] mt-[50px] w-full">
              <div className={"flex flex-col xl:gap-[30px]"}>
                <div className="flex justify-between xl:justify-start gap-[5px] xl:gap-[20px]">
                  <FilterButton
                    clicked={room1Clicked}
                    onClick={() => setRoom1Clicked((prev) => !prev)}
                    variant={"square"}
                  >
                    1 {translate("room")}
                  </FilterButton>
                  <FilterButton
                    clicked={room15Clicked}
                    onClick={() => setRoom15Clicked((prev) => !prev)}
                    variant={"square"}
                  >
                    1.5 {translate("room")}
                  </FilterButton>
                  <FilterButton
                    clicked={room2Clicked}
                    onClick={() => setRoom2Clicked((prev) => !prev)}
                    variant={"square"}
                  >
                    2 {translate("room")}
                  </FilterButton>

                  <FilterButton
                    clicked={room3Clicked}
                    onClick={() => setRoom3Clicked((prev) => !prev)}
                    variant={"square"}
                  >
                    3 {translate("room")}
                  </FilterButton>

                  <FilterButton
                    clicked={room45Clicked}
                    onClick={() => setRoom45Clicked((prev) => !prev)}
                    variant={"square"}
                  >
                    4.5 {translate("room")}
                  </FilterButton>
                </div>
                {/* <div className={"flex gap-[30px] mt-[30px] xl:mt-0"}>
                  <Checkbox
                    label={translate("sold-apartments")}
                    size={"md"}
                    checked={isSoldChecked}
                    onChange={(e) => setIsSoldChecked(e.currentTarget.checked)}
                    sx={{
                      ".mantine-Checkbox-label": {
                        color: "white",
                      },
                      ".mantine-Checkbox-input": {
                        backgroundColor: "transparent",
                        border: "1.5px solid #fff",
                        opacity: 0.3,
                        borderRadius: 0,
                        display: "flex",
                        alignItems: "center",
                      },
                      ".mantine-Checkbox-input:checked": {
                        backgroundColor: "white",
                        opacity: 1,
                        border: 0,
                      },
                      ".mantine-Checkbox-icon": {
                        color: "#0E3F3B",
                      },
                    }}
                  />
                  <Checkbox
                    label={translate("reserved-apartments")}
                    checked={isReservatedChecked}
                    onChange={(e) =>
                      setIsReservatedChecked(e.currentTarget.checked)
                    }
                    size={"md"}
                    sx={{
                      ".mantine-Checkbox-label": {
                        color: "white",
                      },
                      ".mantine-Checkbox-input": {
                        backgroundColor: "transparent",
                        border: "1.5px solid #fff",
                        opacity: 0.3,
                        borderRadius: 0,
                        display: "flex",
                        alignItems: "center",
                      },
                      ".mantine-Checkbox-input:checked": {
                        backgroundColor: "white",
                        opacity: 1,
                        border: 0,
                      },
                      ".mantine-Checkbox-icon": {
                        color: "#0E3F3B",
                      },
                    }}
                  />
                </div> */}
              </div>
              <div className={"xl:flex flex-col xl:items-end"}>
                <div className="flex flex-col xl:flex-row gap-[10px] xl:gap-[20px] xl:items-end">
                  <div className="flex flex-col">
                    <span className="text-white">{translate("equipment")}</span>
                    <FilterButton
                      clicked={withBalconyAndTerrace}
                      onClick={() => {
                        if (withBalcony || withTerrace) {
                          setWithBalcony(false);
                          setWithTerrace(false);
                        }
                        setWithBalconyAndTerrace((prev) => !prev);
                      }}
                      variant={"rectangle"}
                      className={"justify-center xl:justify-start"}
                      icon={
                        <Both
                          width="22"
                          height="22"
                          fill={withBalconyAndTerrace ? "#0E3F3B" : "#fff"}
                        />
                      }
                    >
                      {translate("terrace-balcony")}
                    </FilterButton>
                  </div>
                  <FilterButton
                    className={"justify-center xl:justify-start"}
                    clicked={withTerrace}
                    onClick={() => {
                      if (withBalconyAndTerrace)
                        setWithBalconyAndTerrace(false);
                      setWithTerrace((prev) => !prev);
                    }}
                    icon={
                      <TwoArrows
                        width={"22"}
                        height={"22"}
                        fill={withTerrace ? "#0E3F3B" : "white"}
                      />
                    }
                    variant={"rectangle"}
                  >
                    {translate("terrace")}
                  </FilterButton>
                  <FilterButton
                    className={"justify-center xl:justify-start"}
                    clicked={withBalcony}
                    onClick={() => {
                      if (withBalconyAndTerrace)
                        setWithBalconyAndTerrace(false);
                      if (withoutBalcony) setWithoutBalcony(false);
                      setWithBalcony((prev) => !prev);
                    }}
                    icon={
                      <Basket
                        width={"22"}
                        height={"22"}
                        fill={withBalcony ? "#0E3F3B" : "white"}
                      />
                    }
                    variant={"rectangle"}
                  >
                    {translate("with-balcony")}
                  </FilterButton>
                  <FilterButton
                    className={"justify-center xl:justify-start"}
                    clicked={withoutBalcony}
                    onClick={() => {
                      if (withBalcony) setWithBalcony(false);
                      setWithoutBalcony((prev) => !prev);
                    }}
                    icon={
                      <BasketCrossed
                        fill={withoutBalcony ? "#0E3F3B" : "white"}
                      />
                    }
                    variant={"rectangle"}
                  >
                    {translate("without-balcony")}
                  </FilterButton>
                </div>
                <div className=" flex flex-col items-end">
                  <Link href={`${router.pathname}#results`}>
                    <button
                      disabled={loading}
                      onClick={handleClick}
                      className={
                        "bg-[#0E3F3B] h-[50px] px-[30px] text-white font-semibold mt-[30px]"
                      }
                    >
                      {translate("search")}
                    </button>
                  </Link>
                  <Link href="https://my.matterport.com/show/?m=x1f7uttieiY">
                    <button
                      className={
                        "bg-[#476761] hover:bg-[#0E3F3B] h-[50px] px-[30px] text-white font-semibold mt-[30px] "
                      }
                    >
                      Prejdite sa po ukážkovom apartmáne OLIVIA Residence
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id={"results"}
        className={`flex flex-col xl:gap-[120px] px-[1rem] xl:px-0 xl:min-h-[1px] bg-[#F5F5F5] mt-[-80px] ${(oneRooms ||
          oneAndHalfRooms ||
          twoRooms ||
          threeRooms ||
          fourAndHalfRooms) &&
          "xl:py-[100px]"
          }`}
      >
        {oneRooms?.length ? (
          <div id={"one-apt"}>
            <h3
              className={
                "w-full xl:max-w-[1200px] xl:mx-auto font-bold xl:text-[32px] xl:leading-[38px] mb-[30px] xl:mb-[95px]"
              }
            >
              {translate("filter-floor-1")}
            </h3>
            <div
              className={
                "w-full xl:max-w-[1200px] mx-auto flex justify-between text-black/40 font-medium text-[14px] leading-[20px]"
              }
            >
              {[
                translate("filter-apartment-num"),
                translate("filter-floor"),
                translate("filter-num-of-rooms"),
                translate("filter-size"),
                translate("filter-balcony-terrace"),
                translate("filter-price"),
                translate("filter-availability"),
              ].map((value, index) => (
                <h5
                  className={`text-[14px] xl:text-[16px] xl:w-[130px] ${index === 6 && "text-right"
                    } ${(value === "Balkón | Terasa m²" ||
                      value === "Apartmán m²" ||
                      value === "Cena s DPH") &&
                    "hidden xl:flex"
                    }`}
                  key={index}
                >
                  {value}
                </h5>
              ))}
            </div>
            {oneRooms?.map(({ attributes, id }) => (
              <Table
                key={id}
                rows={[
                  {
                    floor: attributes.poschodie,
                    apartmentNumber: attributes.cislo_bytu,
                    id,
                    numberOfRooms: 1,
                    availability: attributes.dostupnost,
                    price: attributes.cena,
                    totalArea: attributes.celkova_rozloha,
                    additionalRoom: Number(
                      getAdditionalRoom(attributes).toFixed(2)
                    ),
                    img: attributes.primarna_foto.data.attributes.url,
                  },
                ]}
              />
            ))}
          </div>
        ) : (
          ""
        )}
        {oneAndHalfRooms?.length ? (
          <div id={"oneHalf-apt"}>
            <h3
              className={
                "w-full xl:max-w-[1200px] xl:mx-auto font-bold xl:text-[32px] xl:leading-[38px] mb-[30px] xl:mb-[95px]"
              }
            >
              {translate("filter-floor-1.5")}
            </h3>
            <div
              className={
                "w-full xl:max-w-[1200px] mx-auto flex justify-between text-black/40 font-medium text-[14px] leading-[20px]"
              }
            >
              {[
                translate("filter-apartment-num"),
                translate("filter-floor"),
                translate("filter-num-of-rooms"),
                translate("filter-size"),
                translate("filter-balcony-terrace"),
                translate("filter-price"),
                translate("filter-availability"),
              ].map((value, index) => (
                <h5
                  className={`text-[14px] xl:text-[16px] xl:w-[130px] ${index === 6 && "text-right"
                    } ${(value === "Balkón | Terasa m²" ||
                      value === "Apartmán m²" ||
                      value === "Cena s DPH") &&
                    "hidden xl:flex"
                    }`}
                  key={index}
                >
                  {value}
                </h5>
              ))}
            </div>
            {oneAndHalfRooms?.map(({ attributes, id }) => (
              <Table
                key={id}
                rows={[
                  {
                    floor: attributes.poschodie,
                    apartmentNumber: attributes.cislo_bytu,
                    id,
                    numberOfRooms: 1.5,
                    availability: attributes.dostupnost,
                    price: attributes.cena,
                    totalArea: attributes.celkova_rozloha,
                    additionalRoom: Number(
                      getAdditionalRoom(attributes).toFixed(2)
                    ),
                    img: attributes.primarna_foto.data.attributes.url,
                  },
                ]}
              />
            ))}
          </div>
        ) : (
          ""
        )}
        {twoRooms?.length ? (
          <div id={"two-apt"}>
            <h3
              className={
                "w-full xl:max-w-[1200px] xl:mx-auto font-bold xl:text-[32px] xl:leading-[38px] mb-[30px] xl:mb-[95px]"
              }
            >
              {translate("filter-floor-2")}
            </h3>
            <div
              className={
                "w-full xl:max-w-[1200px] mx-auto flex justify-between text-black/40 font-medium text-[14px] leading-[20px]"
              }
            >
              {[
                translate("filter-apartment-num"),
                translate("filter-floor"),
                translate("filter-num-of-rooms"),
                translate("filter-size"),
                translate("filter-balcony-terrace"),
                translate("filter-price"),
                translate("filter-availability"),
              ].map((value, index) => (
                <h5
                  className={`text-[14px] xl:text-[16px] xl:w-[130px] ${index === 6 && "text-right"
                    } ${(value === "Balkón | Terasa m²" ||
                      value === "Apartmán m²" ||
                      value === "Cena s DPH") &&
                    "hidden xl:flex"
                    }`}
                  key={index}
                >
                  {value}
                </h5>
              ))}
            </div>
            {twoRooms?.map(({ attributes, id }) => (
              <Table
                key={id}
                rows={[
                  {
                    floor: attributes.poschodie,
                    apartmentNumber: attributes.cislo_bytu,
                    id,
                    numberOfRooms: 2,
                    availability: attributes.dostupnost,
                    price: attributes.cena,
                    totalArea: attributes.celkova_rozloha,
                    additionalRoom: Number(
                      getAdditionalRoom(attributes).toFixed(2)
                    ),
                    img: attributes.primarna_foto.data.attributes.url,
                  },
                ]}
              />
            ))}
          </div>
        ) : (
          ""
        )}

        {threeRooms?.length ? (
          <div id={"three-apt"}>
            <h3
              className={
                "w-full xl:max-w-[1200px] xl:mx-auto font-bold xl:text-[32px] xl:leading-[38px] mb-[30px] xl:mb-[95px]"
              }
            >
              {translate("filter-floor-3")}
            </h3>
            <div
              className={
                "w-full xl:max-w-[1200px] mx-auto flex justify-between text-black/40 font-medium text-[14px] leading-[20px]"
              }
            >
              {[
                translate("filter-apartment-num"),
                translate("filter-floor"),
                translate("filter-num-of-rooms"),
                translate("filter-size"),
                translate("filter-balcony-terrace"),
                translate("filter-price"),
                translate("filter-availability"),
              ].map((value, index) => (
                <h5
                  className={`text-[14px] xl:text-[16px] xl:w-[130px] ${index === 6 && "text-right"
                    } ${(value === "Balkón | Terasa m²" ||
                      value === "Apartmán m²" ||
                      value === "Cena s DPH") &&
                    "hidden xl:flex"
                    }`}
                  key={index}
                >
                  {value}
                </h5>
              ))}
            </div>
            {threeRooms?.map(({ attributes, id }) => (
              <Table
                key={id}
                rows={[
                  {
                    floor: attributes.poschodie,
                    apartmentNumber: attributes.cislo_bytu,
                    id,
                    numberOfRooms: 3,
                    availability: attributes.dostupnost,
                    price: attributes.cena,
                    totalArea: attributes.celkova_rozloha,
                    additionalRoom: Number(
                      getAdditionalRoom(attributes).toFixed(2)
                    ),
                    img: attributes.primarna_foto.data.attributes.url,
                  },
                ]}
              />
            ))}
          </div>
        ) : (
          ""
        )}

        {fourAndHalfRooms?.length ? (
          <div id={"fourHalf-apt"}>
            <h3
              className={
                "w-full xl:max-w-[1200px] xl:mx-auto font-bold xl:text-[32px] xl:leading-[38px] mb-[30px] xl:mb-[95px]"
              }
            >
              {translate("filter-floor-4.5")}
            </h3>
            <div
              className={
                "w-full xl:max-w-[1200px] mx-auto flex justify-between text-black/40 font-medium text-[14px] leading-[20px]"
              }
            >
              {[
                translate("filter-apartment-num"),
                translate("filter-floor"),
                translate("filter-num-of-rooms"),
                translate("filter-size"),
                translate("filter-balcony-terrace"),
                translate("filter-price"),
                translate("filter-availability"),
              ].map((value, index) => (
                <h5
                  className={`text-[14px] xl:text-[16px] xl:w-[130px] ${index === 6 && "text-right"
                    } ${(value === "Balkón | Terasa m²" ||
                      value === "Apartmán m²" ||
                      value === "Cena s DPH") &&
                    "hidden xl:flex"
                    }`}
                  key={index}
                >
                  {value}
                </h5>
              ))}
            </div>
            {fourAndHalfRooms?.map(({ attributes, id }) => (
              <Table
                key={id}
                rows={[
                  {
                    floor: attributes.poschodie,
                    apartmentNumber: attributes.cislo_bytu,
                    id,
                    numberOfRooms: 4.5,
                    availability: attributes.dostupnost,
                    price: attributes.cena,
                    totalArea: attributes.celkova_rozloha,
                    additionalRoom: Number(
                      getAdditionalRoom(attributes).toFixed(2)
                    ),
                    img: attributes.primarna_foto.data.attributes.url,
                  },
                ]}
              />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Building;
