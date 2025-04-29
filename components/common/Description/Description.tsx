import React, { FunctionComponent } from "react";
import Image from "next/image";
import {
  Camera,
  GlassStar,
  Key,
  Man,
  MapPoint,
  Parking,
  RectangleDarkIcon,
  RectangleLightIcon,
  RectangleMediumIcon,
  Star,
} from "@components/icons";
import ReactMarkdown from 'react-markdown';
import { Button } from "@components/ui";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import KitchenIcon from "@components/icons/KitchenIcon";
import WashBasin from "@components/icons/WashBasin";
import Tile from "@components/icons/Tile";
import Blinds from "@components/icons/Blinds";
import Eco from "@components/icons/Eco";
import Intercom from "@components/icons/Intercom";
import ArrowLink from "@components/icons/ArrowLink";
import OverButtonIcon from "@components/icons/OverButton";
import Dumbbell from "@components/icons/Dumbbell";
import Tennis2 from "@components/icons/Tennis2";
import Lake from "@components/icons/Lake";
import Pitch from "@components/icons/Pitch";
import ElectricScooter from "@components/icons/ElectricScooter";
import Bus from "@components/icons/Bus";
import Motorway from "@components/icons/Motorway";
import Train2 from "@components/icons/Train2";
import { useState } from "react";
import { useEffect } from "react";
export interface DescriptionProps {
  src: string;
  children: React.ReactNode;
  className?: string;
  width?: string;
  reverse?: boolean;
  heading?: boolean;
  video?: boolean;
  button?: boolean;
}

const Description: FunctionComponent<DescriptionProps> = ({
  children,
  src,
  className,
  reverse,
  width = "400",
  video,
  button,
}) => {

  return (
    <div
      className={`relative mt-[30rem] md:mt-[25rem] xl:mt-80  flex  ${reverse ? "flex-row-reverse" : "flex-row "
        } justify-between items-end justify-center  xl:px-0 w-full xl:max-w-[1200px] lg:mx-auto xl:gap-[110px] ${className} mb-[50px] xl:mb-[125px]`}
    >
      <div className={"relative shrink-0 mb-0 "}>
        {!video && (<div className="bg-white w-[100px] h-[400px]"></div>)}

        <div className={`relative  z-[5] w-[50px] md:w-[100px] ${video ? "h-[90vh]" : ""} bg-white`}></div>
        {video ?
          (<div className="absolute left-[40px] top-[-200px] md:top-[-100px] z-[10]">
            <div className={"relative shrink-0 mb-[25px] xl:mb-0 w-[300px] h-[300px] sm:w-[425px] sm:h-[425px] lg:w-[580px] lg:h-[580px]"}>
              <div className="absolute top-0 left-0 z-[10]">
                <div className="flex flex-row">
                  <div className="w-[35px] sm:w-[60px] lg:w-[95px] h-[35px] sm:h-[60px] lg:h-[95px] bg-white"></div>
                  <div className="w-[35px] sm:w-[60px] lg:w-[95px] h-[35px] sm:h-[60px] lg:h-[95px] bg-white"></div>
                </div>
                <div className="flex flex-row">
                  <div className="w-[35px] sm:w-[60px] lg:w-[95px] h-[35px] sm:h-[60px] lg:h-[95px] bg-white"></div>
                  <div className="w-[35px] sm:w-[60px] lg:w-[95px] h-[35px] sm:h-[60px] lg:h-[95px] bg-transparent"></div>
                </div>
              </div>

              <video
                className={"w-full aspect-square object-cover"}
                autoPlay={true}
                playsInline={true}
                muted={true}
                loop={true}
              >
                <source type="video/webm" src="/videos/230405OR2602-Bez-textu-16x9.webm" />
                {/* <source type="video/mp4" src="/videos/vid1.mp4" /> */}
                {/* <source src="/videos/vid2.mp4" type="video/mp4" /> */}
              </video>
            </div>
          </div>) : (
            <div className={`absolute z-[20] ${reverse ? "right-0" : "left-0"} ${button ? "top-[400px] md:top-[-280px] lg:top-[-250px]" : "top-[300px] md:top-[-180px] lg:top-[-150px]"} `}>
              <div className="relative h-[400px] w-[400px] lg:h-[500px] lg:w-[500px]">
                <div className={`absolute bottom-0 md:top-0 ${reverse ? "right-0" : "left-0"} z-[10]`}>
                  <div className="flex flex-row">
                    <div className={`w-[35px] sm:w-[60px] lg:w-[95px] h-[35px] sm:h-[60px] lg:h-[95px] ${reverse ? "bg-transparent md:bg-white " : "bg-white"}`}></div>
                    <div className={`w-[35px] sm:w-[60px] lg:w-[95px] h-[35px] sm:h-[60px] lg:h-[95px] ${reverse ? "bg-white" : "bg-transparent md:bg-white"}`}></div>
                  </div>
                  <div className="flex flex-row">
                    <div className={`w-[35px] sm:w-[60px] lg:w-[95px] h-[35px] sm:h-[60px] lg:h-[95px] ${reverse ? "bg-white md:bg-transparent" : "bg-white"}`}></div>
                    <div className={`w-[35px] sm:w-[60px] lg:w-[95px] h-[35px] sm:h-[60px] lg:h-[95px] ${reverse ? "bg-white" : "bg-white md:bg-transparent"}`}></div>
                  </div>
                </div >
                <Image
                  layout="fill"
                  src={src}
                  alt="description image"
                  loading="eager"
                  className="aspect-square object-cover w-[500px] h-auto"
                />
              </div >
            </div >
          )}
      </div >

      <div className="flex flex-col w-[85%] md:w-[45%] pb-6 pt-20 md:pt-2 0 px-6 md:p-10 space-y-4">{children}</div>
    </div >
  );
};

export default Description;


export interface CommonDescriptionProps {
  className?: string;
  button?: boolean;
  fill?: string;
}

export const CommonDescription: FunctionComponent<CommonDescriptionProps> = ({
  fill = 'black',
  className,
  button,
}) => {
  const { t: translate } = useTranslation('home');

  const bullets = [
    { icon: KitchenIcon, text: translate('description-bullet-1') },
    { icon: WashBasin, text: translate('description-bullet-2') },
    { icon: Tile, text: translate('description-bullet-3') },
    { icon: Blinds, text: translate('description-bullet-4') },
    { icon: Eco, text: translate('description-bullet-5') },
    { icon: Intercom, text: translate('description-bullet-6') },
  ];
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <div id="vybavenie"
      className={`relative mt-[10rem] md:mt-[19rem] xl:mt-0  flex flex-row justify-between items-end justify-center xl:px-0 w-full xl:max-w-[1200px] lg:mx-auto xl:gap-[110px] ${className} mb-[50px] xl:mb-[125px]`}
    >
      <div className={"relative shrink-0 mb-0 "}>
        <div className={`bg-white w-[35px] sm:w-[50px] lg:w-[80px] ${button ? "h-[880px]" : "h-[800px]"} ${button ? "md:h-[600px]" : "md:h-[560px]"}`}></div>

        {/* <div className={`relative z-[5] w-[50px] md:w-[100px] h-[250px] bg-white`}></div> */}

        <div className="absolute left-0 top-[-80px] md:top-[-80px] z-[10]">
          <div className={"relative shrink-0 mb-[25px] xl:mb-0 w-[280px] h-[280px] md:w-[425px] md:h-[425px] lg:w-[550px] lg:h-[550px]"}>
            <div className="absolute top-0 left-0 z-[10]">
              <div className="flex flex-row">
                <div className="w-[35px] sm:w-[50px] lg:w-[80px] h-[35px] sm:h-[60px] lg:h-[80px] bg-white"></div>
                <div className="w-[35px] sm:w-[50px] lg:w-[80px] h-[35px] sm:h-[60px] lg:h-[80px] bg-white"></div>
              </div>
              <div className="flex flex-row">
                <div className="w-[35px] sm:w-[50px] lg:w-[80px] h-[35px] sm:h-[60px] lg:h-[80px] bg-white"></div>
                <div className="w-[35px] sm:w-[50px] lg:w-[80px] h-[35px] sm:h-[60px] lg:h-[80px] bg-transparent"></div>
              </div>
            </div>
            {isClient && (

              <video
                className={"w-full aspect-square object-cover"}
                autoPlay={true}
                playsInline={true}
                muted={true}
                loop={true}
              >
                <source type="video/webm" src="/videos/230405OR2602-Bez-textu-16x9.webm" />
                {/* <source type="video/mp4" src="/videos/vid1.mp4" /> */}
                {/* <source src="/videos/vid2.mp4" type="video/mp4" /> */}
              </video>
            )}
          </div>
        </div>
      </div >

      <div className="flex flex-col w-[85%] md:w-[50%] pb-6 pt-10   px-4 md:p-6 ">
        <h3 className={`font-normal text-[42px] leading-[42px] text-${fill}  my-4`}>
          {translate('description-heading')} <br />

        </h3>
        <div className="my-[25px] flex flex-col gap-2 md:gap-4">
          {bullets.map((bullet, index) => {
            const Icon = bullet.icon;
            return (
              <div key={index} className={`flex gap-[12px] flex-row items-center text-${fill}`}>
                <Icon fill={fill} />
                <p className="text-[17px] w-full sm:w-2/3 leading-none mt-1">
                  <ReactMarkdown >
                    {bullet.text}
                  </ReactMarkdown>
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col xl:flex-row gap-[10px] leading-none my-4">
          <p className={`flex flex-row flex-wrap gap-2 text-[24px] text-${fill} `}>
            <span className="opacity-70">
              <ReactMarkdown  >

                {translate('description-inform-1')}
              </ReactMarkdown>
            </span>
            <ReactMarkdown  >

              {translate('description-inform-2')}
            </ReactMarkdown>
            <span className="opacity-70">
              <ReactMarkdown  >

                {translate('description-inform-3')}
              </ReactMarkdown></span>
          </p>
        </div>
        {button && (
          <Link href="/stretnutie">
            <button className="drop-shadow-md relative bg-yellow hover:bg-white hover:text-yellow hover:scale-105 transform transition-transform duration-300 ease-in-out text-black flex flex-row justify-center items-center gap-2 px-[32px] py-[22px] text-[18px] max-h-[63px] w-fit group">
              <p className="text-[18px] leading-[18px] ">{translate('button-meeting')}</p>
              <div className="group-hover:hidden block">
                <ArrowLink fill="#000000" />
              </div>
              <div className="group-hover:block hidden">
                <ArrowLink fill="#FFA100" />
              </div>
              <div className="absolute z-[10] top-0 right-0">
                <div className="group-hover:hidden block transform transition-transform duration-300 ease-in-out drop-shadow-md">
                  <OverButtonIcon />
                </div>
                <div className="group-hover:block hidden transform transition-transform duration-300 ease-in-out">
                  <OverButtonIcon fill="#FFA100" />
                </div>
              </div>
            </button>
          </Link>
        )}
      </div>
    </div >
  );
};

export interface TransportDescriptionProps {
  className?: string;
  src: string;
  button?: boolean;
  fill?: string;
}

export const TransportDescription: FunctionComponent<TransportDescriptionProps> = ({
  fill,
  className,
  button,
  src,

}) => {
  const { t: translate } = useTranslation("home");
  return (
    <div
      className={`relative   md:mb-[500px] md:mt-[300px]  flex  flex-row-reverse justify-between items-start md:items-end justify-center  xl:px-0 w-full xl:max-w-[1200px] lg:mx-auto xl:gap-[110px] ${className} mb-[150px] xl:mb-[125px]`}
    >   <div className="bg-white w-[35px] sm:w-[60px] lg:w-[80px] md:h-[400px] h-[800px]"></div>






      <div className={`absolute z-[20] right-0 top-[600px] md:top-[-120px] lg:top-[-80px] `}>
        <div className="relative h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
          <div className={`absolute bottom-0 md:top-0 right-0 z-[10]`}>
            <div className="flex flex-row">
              <div className={`w-[35px] sm:w-[60px] lg:w-[80px] h-[35px] sm:h-[60px] lg:h-[80px] bg-transparent md:bg-white `}></div>
              <div className={`w-[35px] sm:w-[60px] lg:w-[80px] h-[35px] sm:h-[60px] lg:h-[80px] bg-white`}></div>
            </div>
            <div className="flex flex-row">
              <div className={`w-[35px] sm:w-[60px] lg:w-[80px] h-[35px] sm:h-[60px] lg:h-[80px] bg-white md:bg-transparent`}></div>
              <div className={`w-[35px] sm:w-[60px] lg:w-[80px] h-[35px] sm:h-[60px] lg:h-[80px] bg-white`}></div>
            </div>
          </div >
          <Image
            layout="fill"
            src={src}
            alt="description image"
            loading="eager"
            className="aspect-square object-cover w-[500px] h-auto"
          />
        </div >
      </div >


      <div className="flex flex-col w-[100%] md:w-[45%] pb-[24 0px]  pt-6 sm:pt-20 px-6 md:p-6 space-y-4">
        <h3
          className={
            `font-normal text-[36px] leading-[36px]  md:text-[48px] md:leading-[48px] text-${fill} mt-6 mb-4`
          }
        >
          {translate("description-lokalita-2-heading")}
        </h3>
        <p className="text-white leading-[20px]  text-[18px]"> {translate("description-lokalita-2-description")}</p>
        <div className={"my-[25px] flex flex-col gap-6"}>
          <div
            className={`flex gap-[12px] flex-row items-center text-${fill}`}>
            <ElectricScooter fill={fill} />
            <h5 className="text-[18px]  leading-none mt-1"
            > {translate("description-lokalita-2-bullet-1")}</h5>
          </div>
          <div
            className={`flex gap-[12px] flex-row items-center text-${fill}`}>
            <Bus fill={fill} />
            <h5 className="text-[18px]  leading-none mt-1" >{translate("description-lokalita-2-bullet-2")}</h5>
          </div>
          <div
            className={`flex gap-[12px] flex-row items-center text-${fill}`}>
            <Motorway fill={fill} />
            <h5 className="text-[18px] leading-none mt-1" >{translate("description-lokalita-2-bullet-3")}</h5>
          </div>
          <div
            className={`flex gap-[12px] flex-row items-center text-${fill}`}>
            <Train2 fill={fill} />
            <h5 className="text-[18px]  leading-none mt-1" >{translate("description-lokalita-2-bullet-4")}</h5>
          </div>


        </div>

        <Link href={`/stretnutie`}>
          <button

            className="drop-shadow-md relative bg-yellow hover:bg-white hover:text-yellow hover:scale-105 transform transition-transform duration-300 ease-in-out text-black flex flex-row justify-center items-center gap-2 px-[32px] py-[22px] text-[18px] max-h-[63px] w-fit group"
          >
            <p className="text-[18px] leading-[18px]">{translate("button-meeting")}</p>
            <div className="group-hover:hidden block">

              <ArrowLink fill="#000000" />
            </div>
            <div className="group-hover:block hidden ">
              <ArrowLink fill="#FFA100" />
            </div>
            <div className="absolute z-[10] top-0 right-0">
              <div className="group-hover:hidden block transform transition-transform duration-300 ease-in-out drop-shadow-md">

                <OverButtonIcon />
              </div>
              <div className="group-hover:block hidden transform transition-transform duration-300 ease-in-out">
                <OverButtonIcon fill="#FFA100" />
              </div></div>

          </button>
        </Link>

      </div>
    </div >
  );
};

export interface SportDescriptionProps {
  className?: string;
  src: string;
  button?: boolean;
  fill?: string;
}

export const SportDescription: FunctionComponent<SportDescriptionProps> = ({
  fill,
  className,
  button,
  src,

}) => {
  const { t: translate } = useTranslation("home");
  return (
    <div
      className={`px-2 relative mb-[120px] md:mb-0  mt-[100px] flex flex-row justify-between items-start md:items-end justify-center  xl:px-0 w-full xl:max-w-[1200px] lg:mx-auto xl:gap-[110px] ${className} `}
    >
      <div className="bg-white w-[35px] sm:w-[60px] lg:w-[80px] h-[750px] sm:h-[400px]"></div>


      <div className={`absolute z-[20] left-0 top-[570px] md:top-[-80px] lg:top-[-80px] `}>
        <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px]">
          <div className={`absolute bottom-0 md:top-0 left-0 z-[10]`}>
            <div className="flex flex-row">
              <div className={`w-[35px] sm:w-[60px] lg:w-[80px] h-[35px] sm:h-[60px] lg:h-[80px]  bg-white`}></div>
              <div className={`w-[35px] sm:w-[60px] lg:w-[80px] h-[35px] sm:h-[60px] lg:h-[80px] bg-transparent md:bg-white `}></div>
            </div>
            <div className="flex flex-row">
              <div className={`w-[35px] sm:w-[60px] lg:w-[80px] h-[35px] sm:h-[60px] lg:h-[80px] bg-white `}></div>
              <div className={`w-[35px] sm:w-[60px] lg:w-[80px] h-[35px] sm:h-[60px] lg:h-[80px] bg-white md:bg-transparent`}></div>
            </div>
          </div >
          <Image
            layout="fill"
            src={src}
            alt="description image"
            loading="eager"
            className="aspect-square object-cover w-[500px] h-auto"
          />
        </div >

      </div >
      <div className="flex flex-col w-[100%] md:w-[45%] pt-8 md:pt-2  px-6 md:p-6 space-y-4 pb-[300px]  md:pb-6">
        <h3
          className={
            `font-normal text-[48px] leading-[48px] text-${fill} my-4`
          }
        >
          {translate("description-lokalita-3-heading")}
        </h3>
        <p className="text-[#676766] leading-[22px] text-[18px]"> {translate("description-lokalita-3-description")}</p>
        <div className={"my-[25px] flex flex-col gap-6"}>
          <div
            className={`flex gap-[12px] flex-row items-center text-${fill}`}>
            <Dumbbell fill={fill} />
            <h5 className="text-[18px] w-2/3 leading-none mt-1"
            >{translate("description-lokalita-3-bullet-1")}</h5>
          </div>
          <div
            className={`flex gap-[12px] flex-row items-center text-${fill}`}>
            <Lake fill={fill} />
            <h5 className="text-[18px] w-2/3 leading-none mt-1" >{translate("description-lokalita-3-bullet-2")}</h5>
          </div>
          <div
            className={`flex gap-[12px] flex-row items-center text-${fill}`}>
            <Tennis2 fill={fill} />
            <h5 className="text-[18px] w-2/3 leading-none mt-1" >{translate("description-lokalita-3-bullet-3")}</h5>
          </div>
          <div
            className={`flex gap-[12px] flex-row items-center text-${fill}`}>
            <Pitch fill={fill} />
            <h5 className="text-[18px] w-2/3 leading-none mt-1" >{translate("description-lokalita-3-bullet-4")}</h5>
          </div>
        </div>

      </div>
    </div>
  );
};


export const ApartmentEquipmentDescription = () => {
  const { t: translate } = useTranslation("home");
  return (
    <Description className={"my-[50px] xl:my-[95px]"} src={"/img/room2.jpg"}>
      <h3
        className={
          "font-bold text-[24px] leading-[32px] text-black xl:max-w-[300px] mb-[40px] mt-[30px] xl:mt-0"
        }
      >
        <span className={"text-green2 underline"}>
          {translate("description-heading-2-first-part")}{" "}
        </span>
        {translate("description-heading-2-second-part")}
      </h3>
      <div
        className={
          "flex flex-col gap-[25px] xl:grid xl:grid-cols-2 xl:gap-[65px]"
        }
      >
        {[
          {
            icon: <Key />,
            title: translate("description-bullet-heading-1"),
            description: (
              <p className={"text-[#676766]"}>
                {translate("description-bullet-description-1-first-part")}{" "}
                <span className={"font-bold"}>
                  {translate("description-bullet-description-1-second-part")}
                </span>{" "}
                {translate("description-bullet-description-1-third-part")}
              </p>
            ),
          },
          {
            icon: <Star />,
            title: translate("description-bullet-heading-2"),
            description: (
              <p className={"text-[#676766]"}>
                {translate("description-bullet-description-2")}
              </p>
            ),
          },
        ].map(({ description, title, icon }, i) => (
          <div className={"flex flex-col"} key={i}>
            {icon}
            <h4 className={"my-[15px] font-bold"}>{title}</h4>
            {description}
          </div>
        ))}
      </div>

    </Description>
  );
};

interface CarDescriptionProps {
  oProjekte?: boolean;
}

export const CarDescription = ({ oProjekte = false }: CarDescriptionProps) => {
  const { t: translate } = useTranslation("home");
  return (
    <>
      <a
        className={"xl:relative bottom-[100px]"}
        id={"garazove-parkovanie"}
      ></a>
      <Description src={"/img/car.png"}>
        <h3 className={"text-[40px] leading-[48px] text-green2 font-bold"}>
          {translate("description-car-heading")}
        </h3>
        <p className={"text-black/60 my-[20px]"}>
          {translate("description-car-description")}
        </p>
        <div className={"flex flex-col gap-[15px] mb-[30px]"}>
          <div className={"flex flex-col gap-[10px] "}>
            <div className={"flex gap-[12px] items-center"}>
              <Image
                src={"/img/naPredaj.png"}
                alt={"na predaj"}
                width={35}
                height={35}
              />
              <h5>{translate("description-car-bullet-4")}</h5>
            </div>
            <div className={"flex gap-[14px] items-center"}>
              <Parking />
              <h5>{translate("description-car-bullet-2")}</h5>
            </div>
            <div className={"flex gap-[14px] items-center"}>
              <Image
                src={"/img/kratkodobyNajom.png"}
                alt={"najom"}
                width={35}
                height={35}
              />
              <h5>{translate("description-car-bullet-5")}</h5>
            </div>
          </div>
          {[
            { icon: <Man />, label: translate("description-car-bullet-1") },
            { icon: <Camera />, label: translate("description-car-bullet-3") },
          ].map(({ label, icon }, i) => (
            <div
              className={`flex ${i === 0 ? "gap-[29px]" : "gap-[21px]"}`}
              key={i}
            >
              {icon}
              <h5>{label}</h5>
            </div>
          ))}
        </div>
        <Link href={"/stretnutie"}>
          <Button className={"w-[220px]"} variant={"filled"}>
            {translate("button-meeting")}
          </Button>
        </Link>
        <div
          className={`hidden xl:block absolute bottom-[80px] left-[480px] -z-30`}
        >
          <RectangleDarkIcon />
        </div>
        <div className={`hidden xl:block absolute bottom-0 left-[-80px]`}>
          <RectangleDarkIcon />
        </div>
        <div className={`hidden xl:block absolute bottom-[350px] left-[50px]`}>
          <RectangleDarkIcon />
        </div>
        <div className={`hidden xl:block absolute bottom-[350px] left-[110px]`}>
          <RectangleMediumIcon />
        </div>
        <div className={`hidden xl:block absolute bottom-[290px] left-[50px]`}>
          <RectangleLightIcon />
        </div>
        <div className={`hidden xl:block absolute bottom-[410px] left-[-10px]`}>
          <RectangleLightIcon />
        </div>
        <div
          className={`hidden xl:block absolute bottom-[290px] left-[170px] -z-30`}
        >
          <RectangleMediumIcon />
        </div>
        <div className={`hidden xl:block absolute bottom-[340px] left-[460px]`}>
          <RectangleLightIcon />
        </div>
        <div
          className={`${oProjekte ? "hidden xl:block" : "hidden"
            } absolute bottom-[1475px] left-[-60px]`}
        >
          <RectangleLightIcon />
        </div>
        <div
          className={`${oProjekte ? "hidden xl:block" : "hidden"
            }  absolute bottom-[1050px] left-[1100px]`}
        >
          <RectangleDarkIcon />
        </div>
        <div
          className={`${oProjekte ? "hidden xl:block" : "hidden"
            } absolute bottom-[990px] left-[1040px]`}
        >
          <RectangleLightIcon />
        </div>
      </Description>
    </>
  );
};

interface EcologicDescriptionProps {
  oProjekte?: boolean;
}

export const EcologicDescription = ({
  oProjekte = false,
}: EcologicDescriptionProps) => {
  const { t: translate } = useTranslation("home");
  return (
    <>
      <a className={"xl:relative bottom-[100px]"} id={"ekonomicka-uspora"}></a>
      <Description src={"/img/building.png"}>
        <h3
          className={
            "text-[40px] mb-[20px] leading-[48px] text-green2 font-bold"
          }
        >
          {translate("description-ecologic-heading")}
        </h3>

        <div className={"flex flex-col gap-[15px] mb-[30px]"}>
          <div className={"flex flex-col gap-[10px] "}>
            <div className={"flex gap-[12px] items-center"}>
              <Image
                src={"/img/136.png"}
                alt={"na predaj"}
                width={35}
                height={35}
              />
              <h5>{translate("description-ecologic-bullet-1")}</h5>
            </div>
            <div className={"flex gap-[12px] items-center"}>
              <Image
                src={"/img/133.png"}
                alt={"na predaj"}
                width={35}
                height={35}
              />
              <h5>{translate("description-ecologic-bullet-2")}</h5>
            </div>
            <div className={"flex gap-[12px] items-center"}>
              <Image
                src={"/img/134.png"}
                alt={"na predaj"}
                width={35}
                height={35}
              />
              <h5>{translate("description-ecologic-bullet-3")}</h5>
            </div>
          </div>
        </div>
        <Link href={"/stretnutie"}>
          <Button className={"w-[220px]"} variant={"filled"}>
            {translate("button-meeting")}
          </Button>
        </Link>
        <div
          className={`hidden xl:block absolute bottom-[80px] left-[480px] -z-30`}
        >
          <RectangleDarkIcon />
        </div>
        <div className={`hidden xl:block absolute bottom-0 left-[-80px]`}>
          <RectangleDarkIcon />
        </div>
        <div className={`hidden xl:block absolute bottom-[350px] left-[-15px]`}>
          <RectangleDarkIcon />
        </div>
        <div className={`hidden xl:block absolute bottom-[350px] left-[110px]`}>
          <RectangleMediumIcon />
        </div>
        <div className={`hidden xl:block absolute bottom-[290px] left-[50px]`}>
          <RectangleLightIcon />
        </div>
        <div className={`hidden xl:block absolute bottom-[430px] left-[-10px]`}>
          <RectangleLightIcon />
        </div>
        <div
          className={`hidden xl:block absolute bottom-[290px] left-[170px] -z-30`}
        >
          <RectangleMediumIcon />
        </div>
        <div className={`hidden xl:block absolute bottom-[340px] left-[460px]`}>
          <RectangleLightIcon />
        </div>
        <div
          className={`${oProjekte ? "hidden xl:block" : "hidden"
            } absolute bottom-[1475px] left-[-60px]`}
        >
          <RectangleLightIcon />
        </div>
        <div
          className={`${oProjekte ? "hidden xl:block" : "hidden"
            }  absolute bottom-[1050px] left-[1100px]`}
        >
          <RectangleDarkIcon />
        </div>
        <div
          className={`${oProjekte ? "hidden xl:block" : "hidden"
            } absolute bottom-[990px] left-[1040px]`}
        >
          <RectangleLightIcon />
        </div>
      </Description>
    </>
  );
};

type Bulletpoint = {
  icon: JSX.Element;
  label: string;
};

interface CustomDescriptionProps {
  src: string;
  title: string;
  description: string;
  bulletPoints: Bulletpoint[];
  reverse?: boolean;
}

export const CustomDescription = ({
  src,
  title,
  description,
  bulletPoints,
  reverse = false,
}: CustomDescriptionProps) => {
  const { t: translate } = useTranslation("home");
  return (
    <Description src={`/img/${src}`} reverse={reverse}>
      <h3 className={"text-[40px] leading-[48px] text-green2 font-bold"}>
        {title}
      </h3>
      <p className={"text-black/60 my-[20px]"}>{description}</p>
      <div className={"flex flex-col gap-[15px] mb-[30px]"}>
        {bulletPoints.map(({ label, icon }, i) => (
          <div className={"flex items-center gap-[10px] text-[14px]"} key={i}>
            {icon}
            <h5>{label}</h5>
          </div>
        ))}
      </div>
      <Button href={"/stretnutie"} className={"w-[220px]"} variant={"filled"}>
        {translate("button-meeting")}
      </Button>
    </Description>
  );
};
