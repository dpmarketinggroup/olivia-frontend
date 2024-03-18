import { Hero, MapFooter, Negotiation } from "@components/common";
import { MapPoint } from "@components/icons";
import Head from "next/head";
import {
  Basket,
  Bag,
  SmilingHouse,
  Scooter,
  Flag,
  RingRoadArrow,
  Man,
  PlaygroundIcon,
  TrainIcon,
  WeightIcon,
  TennisIcon,
  FootballIcon,
} from "@components/icons";
import {
  ApartmentEquipmentDescription,
  CustomDescription,
} from "@components/common/Description/Description";
import { Button } from "@components/ui";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

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

const Lokalita = () => {
  const { t: translate } = useTranslation("home");
  const customDescriptionList: CustomDescriptionProps[] = [
    {
      src: "twoGirls.png",
      title: translate("description-lokalita-1-heading"),
      description: translate("description-lokalita-1-description"),
      bulletPoints: [
        {
          icon: <Basket />,
          label: translate("description-lokalita-1-bullet-1"),
        },
        { icon: <Bag />, label: translate("description-lokalita-1-bullet-2") },
        {
          icon: <SmilingHouse />,
          label: translate("description-lokalita-1-bullet-3"),
        },
        {
          icon: <PlaygroundIcon />,
          label: translate("description-lokalita-1-bullet-4"),
        },
      ],
      reverse: true,
    },
    {
      src: "bus.png",
      title: translate("description-lokalita-2-heading"),
      description: translate("description-lokalita-2-description"),
      bulletPoints: [
        {
          icon: <Scooter />,
          label: translate("description-lokalita-2-bullet-1"),
        },
        { icon: <Flag />, label: translate("description-lokalita-2-bullet-2") },
        {
          icon: <RingRoadArrow />,
          label: translate("description-lokalita-2-bullet-3"),
        },
        {
          icon: <TrainIcon />,
          label: translate("description-lokalita-2-bullet-4"),
        },
      ],
    },
    {
      src: "sportPeople.png",
      title: translate("description-lokalita-3-heading"),
      description: translate("description-lokalita-3-description"),
      bulletPoints: [
        {
          icon: <WeightIcon />,
          label: translate("description-lokalita-3-bullet-1"),
        },
        { icon: <Man />, label: translate("description-lokalita-3-bullet-2") },
        {
          icon: <TennisIcon />,
          label: translate("description-lokalita-3-bullet-3"),
        },
        {
          icon: <FootballIcon />,
          label: translate("description-lokalita-3-bullet-4"),
        },
      ],
      reverse: true,
    },
  ];
  return (
    <>
      <Head>
        <title>Lokalita | Olivia Residence</title>
      </Head>
      <Hero
        imgName="lokalitaHero"
        icon={<MapPoint fill="#89A6A2" size={45} />}
        title={translate("hero-lokalita-title")}
        description={translate("hero-lokalita-subtitle") || ""}
      />
      <div className="flex justify-center md:h-[400px] sm:h-[350px] h-[250px] xl:mt-2 mt-20 mb-10">


        {/* <ReactPlayer
width="500px"
height="400px"
url="/videos/231213OR4301-Benefit-VYHLAD-5x4 (1).mp4"
controls={true}
// light is usefull incase of dark mode
light={false}
// picture in picture
pip={true}
autoplay={true}
muted={true}
/>
<source src="/videos/231213OR4301-Benefit-VYHLAD-5x4 (1).mp4" type="video/mp4" />  */}

        <video
          className={"h-full xl:h-auto object-cover"}
          autoPlay={true}
          playsInline={true}
          muted={true}
          loop={true}
        >
          <source type="video/mp4" src="/videos/231213OR4301-V2-16x9-WEB.mp4" />

        </video>
      </div>
      {customDescriptionList.map((props, k) => (
        <CustomDescription key={k} {...props} />
      ))}
      <Negotiation
        title="Rožňavská 1A, Bratislava"
        subtitle={translate("negotiation-subheading")}
        centerText={true}
        lokalita={true}
      />
      <h2
        className={
          "mt-[175px] font-bold text-[40px] leading-[48px] tracking-[-0.5] text-[#0E3F3B] mx-4 xl:mx-0 xl:text-center"
        }
      >
        {translate("description-main-heading")}
      </h2>
      <ApartmentEquipmentDescription />
      <div
        className={
          "flex flex-col xl:flex-row gap-[10px] justify-center mt-[-50px] mb-[70px] xl:mb-[175px] mx-4 "
        }
      >
        <Button href={"/o-projekte#vybavenie"} variant={"outlined"}>
          {translate("button-home-amenities")}
        </Button>
        <Button href={"/stretnutie"} variant={"filled"}>
          {translate("button-meeting")}
        </Button>
      </div>
      <MapFooter />
    </>
  );
};

interface StaticProps {
  locale: string;
}

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
      //Will be passed to the page component as props
    },
  };
}

export default Lokalita;
