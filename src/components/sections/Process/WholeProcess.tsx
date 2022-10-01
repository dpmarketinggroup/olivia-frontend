import React from "react";
import ProcessPart from "./ProcessPart";
import Check from "../../svg/Check";
import PaperIcon from "../../svg/Paper";
import RollerIcon from "../../svg/Roller";

const WholeProcess = ({
  parts = [
    {
      icon: <PaperIcon classname="w-[35px] h-[38px] xl:w-[46px] xl:h-[49px]"/>,
      title: "Rezervácie",
      year: 2022,
      quarter: "3. kvartál",
    },
    {
      icon: <RollerIcon classname="w-[31px] h-[38px] xl:w-[42px] xl:h-[49px]" />,
      title: "Výstavba",
      year: 2022,
      quarter: "4. kvartál",
    },
    { icon: <Check classname="w-[37px] h-[38px] xl:w-[48px] xl:h-[49px]"/>, title: "Kolaudácia", year: 2024, quarter: "2. kvartál" },
  ],
}) => {
  return (
    <div className="mx-4 xl:mx-[190px] flex gap-[24px] xl:gap-[110px] items-center justify-center mb-[90px] xl:mb-[185px] relative">
      {parts.map((p, k) =>
        k === 0 ? (
          <ProcessPart
            key={k}
            icon={p.icon}
            title={p.title}
            year={p.year}
            quarter={p.quarter}
            isGreen={true}
          />
        ) : (
          <ProcessPart
            key={k}
            icon={p.icon}
            title={p.title}
            year={p.year}
            quarter={p.quarter}
          />
        )
      )}
      <div className="hidden xl:inline-block absolute top-1/2 left-[31%] w-[50px] h-[2px] bg-black opacity-20"></div>
      <div className="hidden xl:inline-block absolute top-1/2 left-[65%] w-[50px] h-[2px] bg-black opacity-20"></div>
    </div>
  );
};

export default WholeProcess;
