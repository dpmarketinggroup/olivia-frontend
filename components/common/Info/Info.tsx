import React from "react";
import { InfoIcon } from "@components/icons/";
const Info = () => {
  return (
    <div className="flex justify-center items-center border-2 border-black 2xl:gap-6 gap-2 bg-[#476761] rounded-full h-full 2xl:w-[40%] w-[95%] lg:w-[60%] md:w-[75%] sm:w-[75%] mx-auto text-white md:text-[10pt] sm:text-[8pt] px-3">
      <div className="w-[30px] md:w-[15px] sm:w-[13px] items-center">
        <InfoIcon />
      </div>
      <div className="">
        Vo všetkých apartmánoch OLIVIA Residence je možné zriadiť trvalý pobyt.
      </div>
    </div>
  );
};

export default Info;
