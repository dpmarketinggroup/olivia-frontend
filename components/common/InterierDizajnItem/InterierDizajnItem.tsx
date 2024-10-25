import ListIcon from "@components/icons/ListIcon";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Image from "next/image";

interface Props {
  text: string;
  imgName: string;
}



const Equipment = ({ text, imgName }: Props) => {
  const { t: translate } = useTranslation('home');

  return (
    <>
      <div className={`relative w-[310px] h-[280px] sm:w-[350px] lg:w-[460px] sm:h-[320px]`}>
        <div className="h-full w-full absolute -z-10 brightness-100">
          <Image
            className="brightness-[0.7]"
            src={"/img/" + imgName}
            layout='fill'
            alt="dvere"
          />
        </div>
        <div className="absolute bottom-[0%] left-[0%]  p-[22px]">
          <h3 className="text-white font-bold xl:w-auto text-[25px]  leading-[28px] tracking-[-0.5px] max-w-[80%]">
            {text}
          </h3>
        </div>
      </div>

    </>
  );
};

export default Equipment;
