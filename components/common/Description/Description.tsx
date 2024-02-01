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

export interface DescriptionProps {
  src: string;
  children: React.ReactNode;
  className?: string;
  width?: string;
  reverse?: boolean;
  heading?: boolean;
}

const Description: FunctionComponent<DescriptionProps> = ({
  children,
  src,
  className,
  reverse,
  width = "400",
}) => {
  return (
    <div
      className={`relative flex flex-col ${
        reverse ? "xl:flex-row-reverse" : "xl:flex-row"
      } justify-between items-center justify-center px-[1rem] xl:px-0 w-full xl:max-w-[1200px] mx-auto xl:gap-[110px] ${className} mb-[50px] xl:mb-[125px]`}
    >
      <div className={"shrink-0 mb-[25px] xl:mb-0"}>
        <Image
          objectFit="cover"
          width={555}
          height={width}
          alt="description image"
          src={src}
          loading={"eager"}
        />
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );
};

export default Description;

export const CommonDescription = () => {
  const { t: translate } = useTranslation("home");
  return (
    <Description src={"/img/room.jpg"}>
      <h3
        className={
          "font-bold text-[40px] leading-[48px] text-[#0E3F3B] xl:max-w-[310px]"
        }
      >
        {translate("description-heading")}
      </h3>
      <p className={"text-black/60 mt-[20px]"}>
        {translate("description-paragraph")}
      </p>
      <div className={"my-[25px] flex flex-col gap-[10px]"}>
        {[
          {
            icon: <MapPoint size={25} />,
            label: translate("description-bullet-1"),
          },
          { icon: <Star />, label: translate("description-bullet-2") },
          { icon: <GlassStar />, label: translate("description-bullet-3") },
        ].map(({ icon, label }, i) => (
          <div
            className={"flex gap-[12px] items-center font-bold text-black/60"}
            key={i}
          >
            {icon}
            <h5>{label}</h5>
          </div>
        ))}
      </div>
      <div className={"flex flex-col xl:flex-row gap-[10px]"}>
        <Button href={"/o-projekte"} variant={"outlined"}>
          {translate("button-about-project")}
        </Button>
        <Button href={"/stretnutie"} variant={"filled"} className={"w-[220px]"}>
          {translate("button-meeting")}
        </Button>
      </div>
      <div className="hidden xl:block absolute right-[-100px] top-[30px]">
        <RectangleMediumIcon />
      </div>
      <div className="hidden xl:block absolute left-[555px] bottom-[-53px]">
        <RectangleLightIcon />
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
      <div className="hidden xl:block absolute bottom-[-54px] left-[150px]">
        <RectangleLightIcon />
      </div>
      <div className="hidden xl:block absolute bottom-[-220px] left-[-60px]">
        <RectangleDarkIcon />
      </div>
      <div className="hidden xl:block absolute top-[-80px] right-[50px]">
        <RectangleMediumIcon />
      </div>
      <div className="hidden xl:block absolute bottom-[-260px] right-[-120px]">
        <RectangleDarkIcon />
      </div>
      <div className="hidden xl:block absolute bottom-[-202px] right-[-60px]">
        <RectangleMediumIcon />
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
          className={`${
            oProjekte ? "hidden xl:block" : "hidden"
          } absolute bottom-[1475px] left-[-60px]`}
        >
          <RectangleLightIcon />
        </div>
        <div
          className={`${
            oProjekte ? "hidden xl:block" : "hidden"
          }  absolute bottom-[1050px] left-[1100px]`}
        >
          <RectangleDarkIcon />
        </div>
        <div
          className={`${
            oProjekte ? "hidden xl:block" : "hidden"
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
          className={`${
            oProjekte ? "hidden xl:block" : "hidden"
          } absolute bottom-[1475px] left-[-60px]`}
        >
          <RectangleLightIcon />
        </div>
        <div
          className={`${
            oProjekte ? "hidden xl:block" : "hidden"
          }  absolute bottom-[1050px] left-[1100px]`}
        >
          <RectangleDarkIcon />
        </div>
        <div
          className={`${
            oProjekte ? "hidden xl:block" : "hidden"
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
