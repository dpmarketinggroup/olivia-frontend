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
import { Button } from "@components/ui";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import KitchenIcon from "@components/icons/KitchenIcon";
import WashBasin from "@components/icons/WashBasin";
import Tile from "@components/icons/Tile";
import Blinds from "@components/icons/Blinds";
import Eco from "@components/icons/Eco";
import Intercom from "@components/icons/Intercom";
import { marked } from 'marked'
export interface DescriptionProps {
  src?: string;
  children: React.ReactNode;
  className?: string;
  width?: string;
  reverse?: boolean;
  heading?: boolean;
  video?: boolean;
}

const Description: FunctionComponent<DescriptionProps> = ({
  children,
  src,
  className,
  reverse,
  width = "400",
  video
}) => {
  return (
    <div
      className={`relative mt-[30rem] md:mt-[25rem] xl:mt-60  flex flex-row bg-bgLight ${reverse ? "xl:flex-row-reverse" : "xl:flex-row "
        } justify-between items-center justify-center  xl:px-0 w-full xl:max-w-[1200px] lg:mx-auto xl:gap-[110px] ${className} mb-[50px] xl:mb-[125px]`}
    >
      <div className={"relative shrink-0 mb-0 "}>
        <div className="relative top-0 left-0 z-[5] w-[50px] md:w-[100px] h-[90vh] bg-white"></div>
        {video ?
          (<div className="absolute left-0 top-[-200px] md:top-[-100px] z-[10]">
            <div className={"relative shrink-0 mb-[25px] xl:mb-0 w-[300px] h-[300px] sm:w-[425px] sm:h-[425px] lg:w-[550px] lg:h-[550px]"}>
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
                <source type="video/mp4" src="/videos/230405OR2602-Bez-textu-16x9.mp4" />
                {/* <source type="video/mp4" src="/videos/vid1.mp4" /> */}
                {/* <source src="/videos/vid2.mp4" type="video/mp4" /> */}
              </video>
            </div>
          </div>) : (

            <Image
              objectFit="cover"
              width={555}
              height={width}
              alt="description image"
              src={src}
              loading={"eager"}
            />
          )}
      </div>
      <div className="flex flex-col w-[85%] md:w-[45%] pb-6 pt-20 md:pt-2 0 px-6 md:p-6">{children}</div>
    </div>
  );
};

export default Description;

export const CommonDescription = () => {
  const { t: translate } = useTranslation("home");
  return (
    <Description video={true}>
      <h3
        className={
          "font-normal text-[48px] leading-[48px] text-black mb-4"
        }
      >
        {translate("description-heading")} <br />OLIVIA Residence?
      </h3>
      <div className={"my-[25px] flex flex-col gap-6"}>
        <div
          className={"flex gap-[12px] flex-row items-center text-black"}>
          <KitchenIcon />
          <h5 className="text-[18px] w-2/3 leading-none mt-1" dangerouslySetInnerHTML={{
            __html: marked(translate("description-bullet-1"))
          }}></h5>
        </div>
        <div
          className={"flex gap-[12px] flex-row items-center text-black"}>
          <WashBasin />
          <h5 className="text-[18px] w-2/3 leading-none mt-1" dangerouslySetInnerHTML={{
            __html: marked(translate("description-bullet-2"))
          }}></h5>
        </div>
        <div
          className={"flex gap-[12px] flex-row items-center text-black"}>
          <Tile />
          <h5 className="text-[18px] w-2/3 leading-none mt-1" dangerouslySetInnerHTML={{
            __html: marked(translate("description-bullet-3"))
          }}></h5>
        </div>
        <div
          className={"flex gap-[12px] flex-row items-center text-black"}>
          <Blinds />
          <h5 className="text-[18px] w-2/3 leading-none mt-1" dangerouslySetInnerHTML={{
            __html: marked(translate("description-bullet-4"))
          }}></h5>
        </div>
        <div
          className={"flex gap-[12px] flex-row items-center text-black"}>
          <Eco />
          <h5 className="text-[18px] w-2/3 leading-none mt-1" dangerouslySetInnerHTML={{
            __html: marked(translate("description-bullet-5"))
          }}></h5>
        </div>
        <div
          className={"flex gap-[12px] flex-row items-center text-black"}>
          <Intercom />
          <h5 className="text-[18px] w-2/3 leading-none mt-1" dangerouslySetInnerHTML={{
            __html: marked(translate("description-bullet-6"))
          }}></h5>
        </div>

      </div>
      <div className={"flex flex-col xl:flex-row gap-[10px]"}>
        <p className="text-[24px] text-[#676766]" dangerouslySetInnerHTML={{
          __html: marked(translate("description-inform"))
        }}></p>
      </div>

    </Description>
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
