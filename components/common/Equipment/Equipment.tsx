import ListIcon from "@components/icons/ListIcon";
import Link from "next/link";
import {useTranslation} from "next-i18next";

interface IEquipment {
  title: string;
  href: string;
}

const Equipment = ({ href, title }: IEquipment) => {
    const {t: translate} = useTranslation('home');
  return (
    <section className="relative w-full desktop:max-w-[1920px] mx-auto">
      <div className="w-[60px] hidden xl:block h-[60px] bg-black/5 absolute top-0 left-0"></div>
      <div className="w-[120px] hidden xl:flex flex-col absolute left-[60px] top-[60px]">
        <div className="w-[60px] h-[60px] bg-black/10 ml-auto"></div>
        <div className="w-[60px] h-[60px] bg-black/5"></div>
      </div>
      <div className="w-[120px] xl:flex flex-col absolute right-0 top-0 hidden">
        <div className="w-[60px] h-[60px] bg-black/10 ml-auto"></div>
        <div className="w-[60px] h-[60px] bg-black/5"></div>
      </div>
      <div className="w-full max-w-[1200px] my-[50px] xl:my-0 mx-auto xl:h-[375px] flex relative">
        <div className="hidden xl:block w-[60px] h-[60px] bg-black/5 absolute top-0 right-1/3"></div>
        <div className="hidden xl:block w-[60px] h-[60px] bg-black/5 absolute bottom-0 left-1/4"></div>
        <div className="flex gap-[65px] items-center my-auto">
          <ListIcon />
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-xl desktop:text-3xl">{title}</h4>
            <Link href={href}>
              <a
                target={"_blank"}
                className="cursor-pointer text-green2 text-lg font-medium"
              >
                  {translate("equipment-link")}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
