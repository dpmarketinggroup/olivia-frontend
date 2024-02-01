import React, { FunctionComponent } from "react";
import { useTranslation } from "next-i18next";

interface PopUpProps {
  top: string;
  left: string;
  display?: string;
  title: string;
  room1?: number;
  room15?: number;
  room2?: number;

  room3?: number;

  room45?: number;
}

const PopUp: FunctionComponent<PopUpProps> = ({
  top,
  left,
  display,
  title,
  room1,
  room2,
  room3,

  room15,

  room45,
}) => {
  const { t: translate } = useTranslation("home");
  return (
    <>
      <div
        style={{ top, left }}
        className={`border bg-white shadow-[0_0_60px_rgba(0,0,0,0.1)] z-99 h-300px`}
      >
        <div className="flex flex-col gap-[15px] pl-[45px] my-[15px]">
          <p className="mb-[15px] ml-[35px] font-bold text-[18px] leading-7 text-[#476761]">
            {title}
          </p>
          <div className="flex">
            <p className="w-[140px] text-[12px] leading-5 text-[#999999]">
              {translate("filter-floor-1")}
            </p>
            <span className="text-[14px] font-medium leading-5 text-[#476761]">
              {room1}
            </span>
          </div>
          <div className="flex">
            <p className="w-[140px] text-[12px] leading-5 text-[#999999]">
              {translate("filter-floor-1.5")}
            </p>
            <span className="text-[14px] font-medium leading-5 text-[#476761]">
              {room15}
            </span>
          </div>
          <div className="flex">
            <p className="w-[140px] text-[12px] leading-5 text-[#999999]">
              {translate("filter-floor-2")}
            </p>
            <span className="text-[14px] font-medium leading-5 text-[#476761]">
              {room2}
            </span>
          </div>
          <div className="flex">
            <p className="w-[140px] text-[12px] leading-5 text-[#999999]">
              {translate("filter-floor-3")}
            </p>
            <span className="text-[14px] font-medium leading-5 text-[#476761]">
              {room3}
            </span>
          </div>

          <div className="flex">
            <p className="w-[140px] text-[12px] leading-5 text-[#999999]">
              {translate("filter-floor-4.5")}
            </p>
            <span className="text-[14px] font-medium leading-5 text-[#476761]">
              {room45}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
