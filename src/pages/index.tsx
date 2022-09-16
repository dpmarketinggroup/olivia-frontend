import type { NextPage } from "next";
import Link from "next/link";
import Description2 from "../components/Description2";
import CloseIcon from "../components/svg/Close";
import KeyIcon from "../components/svg/Key";
import RightArrowIcon from "../components/svg/RightArrow";
import StarIcon from "../components/svg/Star";
import WholeProcess from "../components/WholeProcess";

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
      <section className="flex justify-center">
        <div className="bg-[url('/img/hero.jpg')] h-[650px] w-full max-w-[1440px] mb-[140px]">
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
      <Description2
        imgPath="/img/room2.jpg"
        title="Vybavenie apartmánov"
        descrip="Vysoký štandard
      pre Váš maximálny komfort"
        bulletPoints2={[
          {
            icon: <KeyIcon />,
            title: "Apartmán na kľúč",
            text: "Bývanie v Olivia Residence je úplne bezstarostné. Ponúkame komplexne zariadené apratmány vrátane kompletne vybavenej kuchyne so spotrebičmi a sanitou. Vašou jedinou starosťou bude výber nábytku.",
          },
          {
            icon: <StarIcon />,
            title: "Vysoký štandard vybavenia",
            text: "Olivia nevyniká len množstvom nadštandardného vybavenia, ale aj jeho prevedením. Materiály použité v apartmánoch zodpovedjú vysokým štandardom kvality.",
          },
        ]}
        buttons={[
          { path: "/", text: "Vybavenie apartmánov" },
          { path: "/", text: "Nezáväzné stretnutie" },
        ]}
      />
    </>
  );
};

export default Home;
