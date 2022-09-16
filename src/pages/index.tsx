import type { NextPage } from "next";
import Link from "next/link";
import CloseIcon from "../components/svg/Close";
import RightArrowIcon from "../components/svg/RightArrow";
import WholeProcess from "../components/WholeProcess";
import Map from "../components/Map";

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
        <div className=" mr-[13px] ">
        <CloseIcon />
        </div>
      </div>
      <section className="bg-[url('/img/hero.jpg')] h-[650px] w-full max-w-[1440px] mb-[140px]">
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
      </section>
      <WholeProcess />
      <Map title="Lokalita v centre diania" subtitle="Rožňavská 1A, Bratislava"/>
    </>
  );
};

export default Home;
