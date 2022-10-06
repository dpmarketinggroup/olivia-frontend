import Check from "../../icons/Check";
import PaperIcon from "../../icons/Paper";
import RollerIcon from "../../icons/Roller";

const Timeline = ({
}) => {
  return (
    <div id="harmonogram" className="xl:mx-auto flex flex-col xl:flex-row gap-[50px] xl:gap-[110px] items-center justify-center my-[60px] xl:mb-[90px] xl:mb-[185px] relative">
      {[
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
      ].map(({quarter, title, year, icon}, index) =>
          <div key={index} className="flex flex-col gap-[13px] xl:gap-[50px] items-center justify-center">
            <div>
              {icon}
            </div>
            <div className="flex flex-col gap-[4px] xl:gap-[16px] items-center justify-center" >
              <p className="font-bold text-[18px] xl:text-[24px] leading-[32px] tracking-[-0.1px] w-[120px] xl:w-[280px] text-center">{title}</p>
              <span className="font-bold text-[22px] xl:text-[32px] leading-[38px] tracking-[-0.4px]">{year}</span>
              <span className="font-normal text-[14px] xl:text-[16px] leading-[24px] tracking-[-0.1px]">{quarter}</span>
            </div>
          </div>
        )
      }
      <div className="hidden xl:inline-block absolute top-1/2 left-[35%] w-[50px] h-[2px] bg-black opacity-20"></div>
      <div className="hidden xl:inline-block absolute top-1/2 left-[61%] w-[50px] h-[2px] bg-black opacity-20"></div>
    </div>
  );
};

export default Timeline;
