import ListIcon from "@components/icons/ListIcon";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { InterierDizajnItem } from "..";

const InterierDizajnProps = () => {
  const { t: translate } = useTranslation('home');
  return (
    <section className="relative  w-full desktop:max-w-[1920px] mx-auto px-2 flex flex-col justify-center items-center pb-[2rem]">
      <h2 className="font-bold xl:w-auto text-[25px] xl:text-[40px] leading-[28px] xl:leading-[48px] tracking-[-0.5px] my-[4rem]">
        {translate("top-apartments-interior-h2")}
      </h2>
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
          <InterierDizajnItem
            text={translate("top-apartments-interior-item1")}
            imgName="dvere.png"
          />
          <InterierDizajnItem
            text={translate("top-apartments-interior-item2")}
            imgName="zaluzie.png"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
          <InterierDizajnItem
            text={translate("top-apartments-interior-item3")}
            imgName="podlaha.png"
          />
          <InterierDizajnItem
            text={translate("top-apartments-interior-item4")}
            imgName="obklad.png"
          />
        </div>
      </div>
    </section>
  );
};

export default InterierDizajnProps;

