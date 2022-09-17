import { iconSizes } from "@mantine/core/lib/Stepper/Step/Step.styles";
import type { NextPage } from "next";
import Link from "next/link";
import Description from "../components/Description";
import CloseIcon from "../components/svg/Close";
import GlassStarIcon from "../components/svg/GlassStar";
import MapPointIcon from "../components/svg/MapPoint";
import RightArrowIcon from "../components/svg/RightArrow";
import StarIcon from "../components/svg/Star";
import WholeProcess from "../components/WholeProcess";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex bg-[#0E3F3B] items-center justify-center h-[40px]">
        <div className="flex gap-[20px]">
          <p className="text-white font-medium text-[14px] leading-5 w-[160px]">
            Výstavba oficiálne začala.
          </p>
          <div className="flex gap-[8px] items-center">
            <span className="text-white font-medium text-[14px] leading-5">
              Viac
            </span>
            <RightArrowIcon />
          </div>
        </div>
        <div className=" mr-[13px]">
          <CloseIcon />
        </div>
      </div>
      <section className="mb-[350px] relative flex">
      <div className="h-[650px] w-full max-w-full absolute inset-0 -z-[99] border-black ">
          <Image
            objectFit="cover"
            layout="fill"
            alt="hero image"
            src={"/img/hero.jpg"}
          />
        </div>
        <div className="flex flex-col ">
        <div className="w-[600px] ml-[165px] pt-[185px] mb-[40px]">
          <h1 className="font-bold  text-[56px] leading-[60px] tracking-[-1px] text-white">
            Moderný štýl bývania v dynamickej lokalite so skvelými možnosťami
          </h1>
        </div>
        <div className="flex gap-[10px] ml-[165px] ">
          <Link href="/">
            <button className="bg-[#89A6A2] w-[210px] h-[50px] text-white font-medium text-[16px] leading-[24px] tracking-[-0.1px]">
              Nezáväzné stretnutie
            </button>
          </Link>
          <Link href="/">
            <button className="font-medium text-[16px] leading-[24px] tracking-[-0.1px] w-[210px] h-[50px] border border-white text-white">
              Ponuka apartmánov
            </button>
          </Link>
        </div>
        </div>
        
      </section>
      <WholeProcess />
      <Description
        imgPath="/img/room.jpg"
        title="Moderné mestské bývanie"
        descrip="Olivia je určená pre ľudí, ktorí chcú, aby ich domov presahoval za steny ich bytu. Pre ľudí, ktorí chcú mať ich obľúbené aktivity na dosah ruky. Pre ľudí, ktorí chcú svoj čas využívať efektívne. A pre ľudí, ktorí chcú mať z bývania zážitok. Olivia nie je len bývanie, je to životný štýl."
        bulletPoints={[
          { icon: <MapPointIcon />, text: "Skvelá dynamická lokalita" },
          { icon: <StarIcon />, text: "Vysoký štandard vybavenia" },
          { icon: <GlassStarIcon />, text: "Štýlové a kvalitné prevedenie" },
        ]}
        buttons={[
          { path: "/", text: "O projekte" },
          { path: "/", text: "Nezáväzné stretnutie" },
        ]}
      />
    </>
  );
};

export default Home;
