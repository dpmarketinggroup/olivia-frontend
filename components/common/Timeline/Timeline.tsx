import Check from "../../icons/Check";
import PaperIcon from "../../icons/Paper";
import RollerIcon from "../../icons/Roller";
import {useTranslation} from "next-i18next";

const Timeline = ({}) => {
    const {t: translate} = useTranslation('home');
    return (
        <>
            <a className={'relative bottom-[100px] xl:bottom-[200px]'} id={'harmonogram'}></a>
            <div
                className="xl:mx-auto flex flex-col xl:flex-row gap-[50px] xl:gap-[30px] items-center justify-center my-[60px] xl:mt-0 xl:mb-[135px] relative">
                {[
                    {
                        icon: <PaperIcon classname="w-[35px] h-[38px] xl:w-[46px] xl:h-[49px]"/>,
                        title: translate("timeline-1-heading"),
                        year: 2022,
                        quarter: translate("timeline-1-span"),
                    },
                    {
                        icon: <RollerIcon classname="w-[31px] h-[38px] xl:w-[42px] xl:h-[49px]"/>,
                        title: translate("timeline-2-heading"),
                        year: 2022,
                        quarter: translate("timeline-2-span"),
                    },
                    {
                        icon: <Check classname="w-[37px] h-[38px] xl:w-[48px] xl:h-[49px]"/>,
                        title: translate("timeline-3-heading"),
                        year: 2024,
                        quarter: translate("timeline-3-span")
                    },
                ].map(({quarter, title, year, icon}, index) =>
                    <>
                        <div key={index} className={`flex flex-col gap-[13px] xl:gap-[50px] items-center justify-center`}>
                            <div>
                                {icon}
                            </div>
                            <div className={`flex flex-col gap-[4px] xl:gap-[16px] items-center justify-center ${index <= 1 ? 'text-[#476761]' : 'opacity-20'}`}>
                                <p className="font-bold text-[18px] xl:text-[24px] leading-[32px] tracking-[-0.1px] w-[120px] xl:w-[280px] text-center">{title}</p>
                                <span
                                    className="font-bold text-[22px] xl:text-[32px] leading-[38px] tracking-[-0.4px]">{year}</span>
                                <span
                                    className="font-normal text-[14px] xl:text-[16px] leading-[24px] tracking-[-0.1px]">{quarter}</span>
                            </div>
                        </div>
                        {
                            index < 2 &&
                            <div className={`hidden xl:inline-block w-[50px] h-[2px] ${index < 1 ? 'bg-[#476761]' : 'bg-black opacity-20'}`}></div>
                        }
                    </>
                )
                }
            </div>
        </>
    );
};

export default Timeline;
