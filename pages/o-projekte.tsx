import Link from "next/link";
import {
  MapFooter,
  Subscription,
  Timeline,
  Hero,
  Equipment,
} from "@components/common";
import { House, UniCredit, EmailSign } from "@components/icons";
import Head from "next/head";
import Image from "next/image";
import {
  CarDescription,
  CustomDescription,
} from "@components/common/Description/Description";
import KitchenIcon from "@components/icons/Kitchen";
import SinkIcon from "@components/icons/Sink";
import GlassStarIcon from "@components/icons/GlassStar";
import BasketIcon from "@components/icons/Basket";
import ElectricPanelIcon from "@components/icons/ElectricPanel";
import TwoArrowsIcon from "@components/icons/TwoArrows";
import React from "react";

interface CustomDescriptionProps {
  src: string;
  title: string;
  description: string;
  bulletPoints: [
    { icon: JSX.Element; label: string },
    { icon: JSX.Element; label: string },
    { icon: JSX.Element; label: string }
  ];
  reverse?: boolean;
}

const OProjekte = () => {
  const customDescriptionList: CustomDescriptionProps[] = [
    {
      src: "room3.jpg",
      title: "Vysoký štandard vrátane kompletnej kuchyne a sanity",
      description:
        "Veľko-metrážne balkóny a terasy s exteriérovým slnečným tienením sprevádzané výhľadmi na panorámu Bratislavy.",
      bulletPoints: [
        {
          icon: <KitchenIcon />,
          label: "Kuchynská linka so spotrebičmi ako štandard",
        },
        { icon: <SinkIcon />, label: "Sanita vo vysokej kvalite" },
        {
          icon: <GlassStarIcon />,
          label: "Kvalitné materiály, podlahy a obklady",
        },
      ],
    },
    {
      src: "balcony.jpg",
      title: "Priestranné balkóny a terasy s exteriérovým slnečným tienením",
      description:
        "Veľko-metrážne balkóny a terasy s exteriérovým slnečným tienením sprevádzané výhľadmi na panorámu Bratislavy.",
      bulletPoints: [
        { icon: <BasketIcon />, label: "Priestranné balkóny" },
        {
          icon: <ElectricPanelIcon />,
          label: "Elektrické exteriérové slnečné tienenie ako štandard",
        },
        { icon: <TwoArrowsIcon />, label: "Veľko-metrážne terasy" },
      ],
      reverse: true,
    },
  ];

  return (
    <div className={"flex flex-col"}>
      <Head>
        <title>O projekte | Olivia Residence</title>
      </Head>
      <Hero
        imgName={"oProjekteHero"}
        icon={<House />}
        title={"O projekte"}
        description="Všetky podstatné informácie o Vašom novom bývaní na jednom mieste."
        withRectangles={true}
      />
      <Timeline />
      <div className={"px-[1rem] xl:px-0 xl:mx-auto"}>
        <Link href="/stretnutie">
          <button className="hover:bg-primary bg-[#476761] w-full xl:w-[210px] h-[50px] text-white font-medium text-[16px] leading-[24px] mb-[90px] xl:mb-[185px]">
            Nezáväzné stretnutie
          </button>
        </Link>
      </div>
      <a
        href=""
        className={"opacity-0 mb-[50px] border-2"}
        id={"vybavenie"}
      ></a>
      {customDescriptionList.map((props, index) => (
        <CustomDescription key={index} {...props} />
      ))}
      <div id={"garazove-parkovanie"}>
        <CarDescription oProjekte={true} />
      </div>
      <Equipment
        title="Štandardné vybavenie"
        href="/OLIVIA štandardne vybavenie[68].pdf"
      />
      <div className="flex justify-center" id="financovanie">
        <div className="w-full">
          <div className="relative xl:mb-[100px] xl:mb-0 flex flex-col">
            <div className="bg-black w-full px-[1rem] xl:px-0 h-[750px] xl:h-[600px]">
              <div className="flex flex-col gap-[30px] justify-center items-center pt-[130px] pb-[350px] xl:pb-[270px]">
                <h2 className="font-bold text-[32px] xl:text-[40px] leading-[48px] text-[#F5F5F5] text-center xl:text-left">
                  Podmienky financovania
                </h2>
                <span className="text-[16px] leading-6 tracking-[0.1px] text-[#89A6A2]">
                  Financujúca banka
                </span>
                <UniCredit classname="w-full h-[44px] xl:-h-[65] xl:-w-[492px]" />
              </div>
            </div>
            <div className="mx-auto">
              <div className="flex flex-col xl:flex-row gap-[30px] xl:justify-center bg-[background: #F5F5F5] -translate-y-[110%] xl:-translate-y-1/2 h-[290px]">
                {[
                  {
                    offer: "01.",
                    description:
                      "Podpis Zmluvy o budúcej kúpnej zmluve a zaplatenie 20% kúpnej ceny.",
                  },
                  {
                    offer: "02.",
                    description:
                      "Podpis kúpnej zmluvy po vydaní kolaudačného rozhodnutia a zaplatenie zvyšnej časti kúpnej ceny.",
                  },
                ].map(({ offer, description }, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-[20px] py-[25px] px-[30px] text-center items-center justify-center drop-shadow-[0_0_60px_rgba(0,0,0,0.1)] bg-white ml-3 mr-4 xl:mx-0 w-[350px] xl:mb-[30px]"
                  >
                    <span className="font-bold text-[24px] leading-8 tracking-[-0.1px] text-[#476761]">
                      {offer}
                    </span>
                    <p className="w-[290px] text-[16px] leading-6 tracking-[0.1px] text-[#676766]">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col xl:justify-center xl:flex-row gap-[30px]  bg-[background: #F5F5F5] -translate-y-[60%] xl:-translate-y-1/2 h-[260px]">
                {[
                  {
                    offer: "03.",
                    description:
                      "Odovzdanie Vášho nového rezidenčného apartmánu.",
                  },
                ].map(({ offer, description: description }, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-[20px] py-[25px] px-[30px] text-center items-center justify-center drop-shadow-[0_0_60px_rgba(0,0,0,0.1)] bg-white ml-3 mr-4 xl:mx-0 w-[350px]"
                  >
                    <span className="font-bold text-[24px] leading-8 tracking-[-0.1px] text-[#476761]">
                      {offer}
                    </span>
                    <p className="w-[290px] text-[16px] leading-6 tracking-[0.1px] text-[#676766]">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className=" w-[full] mt-[-750px] xl:mt-[-565px] bg-[#F5F5F5] h-[970px] xl:h-[750px] border-primary">
              <div className="flex flex-col xl:flex-row gap-[50px] xl:gap-[100px] xl:pt-[550px] pb-[50px] xl:mx-[165px] items-center justify-center">
                <div className="hidden xl:inline-block">
                  <h4 className="font-bold text-[18px] leading-7 mb-[10px]">
                    Finančný poradca UniCredit Bank
                  </h4>
                  <p className="text-[14px] leading-[20px] text-[#999999] w-[350px]">
                    Neváhajte ma kontaktovať. Predstavím Vám detailný model
                    financovania a zodpoviem všetky Vaše otázky.
                  </p>
                </div>
                <div className="flex gap-[20px] items-center mt-[740px] xl:mt-0">
                  <div className="h-[60px] w-[60px] relative">
                    <Image
                      objectFit="cover"
                      layout="fill"
                      alt="Jozef Mrkvička"
                      src="/img/jozefOndercok.png"
                      loading={"eager"}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[16px] leading-6 tracking-[0.1px] ">
                      Jozef Onderčo
                    </p>
                    <span className="text-[14px] leading-5">
                      Kontaktná osoba pre hypotekárne financovanie.
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-[20px]">
                  <EmailSign />
                  <Link href={"mailto:jozef.onderco@unicreditgroup.sk"}>
                    <a className="font-bold text-[18px] leading-7">
                      jozef.onderco@unicreditgroup.sk
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Equipment
        title="Ponuka financovania"
        href="UCB_A4 letak_Hypo Olivia Residence_10 2022 _FINAL.pdf"
      />
      <div className={"xl:mt-[100px] xl:mb-[100px]"}>
        <Subscription />
      </div>
      <MapFooter />
    </div>
  );
};

export default OProjekte;
