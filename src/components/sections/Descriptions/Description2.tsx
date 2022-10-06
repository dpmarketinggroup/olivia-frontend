import React, {FunctionComponent} from "react";
import Image from "next/image";
import BulletPoint2 from "./BulletPoint2";
import Link from "next/link";
import KeyIcon from "../../svg/Key";
import StarIcon from "../../svg/Star";

interface Description2Props {
    imgPath: string;
    bulletPoints2?: [
        { icon: JSX.Element; title: string; text: string },
        { icon: JSX.Element; title: string; text: string }
    ];
    buttons?: [{ path: string; text: string }, { path: string; text: string }];
}

const Description2
    = ({
           imgPath,
           bulletPoints2 = [
               {
                   icon: <KeyIcon classname="w-[22px] xl:w-[30px] h-[22px] xl:h-[30px] mx-auto"/>,
                   title: "Apartmán na kľúč",
                   text: "Bývanie v Olivia Residence je úplne bezstarostné. Ponúkame komplexne zariadené apratmány vrátane kompletne vybavenej kuchyne so spotrebičmi a sanitou. Vašou jedinou starosťou bude výber nábytku."
               },
               {
                   icon: <StarIcon classname="w-[22px] xl:w-[28px] h-[20px] xl:h-[26px] mx-auto"/>,
                   title: "Vysoký štandard vybavenia",
                   text: "Olivia nevyniká len množstvom nadštandardného vybavenia, ale aj jeho prevedením. Materiály použité v apartmánoch zodpovedjú vysokým štandardom kvality."
               }
           ],
           buttons = [
               {path: "/ponuka-bytov", text: "Vybavenie apartmánov"}, {
                   path: "/stretnutie",
                   text: "Nezáväzné stretnutie"
               }
           ],
       }: Description2Props) => {
    return (
        <div className="flex justify-center w-full">
            <div className={'xl:h-[1000px] w-full flex flex-col items-center justify-center bg-[#F5F5F5] px-[1rem] xl:px-0'}>
                <h3 className="pt-[100px] xl:pt-0 mb-[35px] xl:mb-[95px] font-bold text-[30px] xl:text-[40px] leading-[48px] text-center text-primary">Vybavenie
                    apartmánov</h3>
                <div
                    className="flex flex-col xl:flex-row gap-[30px] xl:gap-[110px] mb-[40px] xl:mb-[95px] items-center justify-center w-full">
                    <div className={'w-full relative h-[385px]'}>
                        <Image
                            objectFit="cover"
                            layout={'fill'}
                            alt="hero image"
                            src={imgPath}
                        />
                    </div>
                    <div className={'w-full'}>
                        <p className="mb-[30px] xl:mb-[45px] font-bold text-[22px] xl:text-[24px] leading-6 xl:leading-[32px] text-center xl:text-left">
                            <span className="text-green2 xl:underline xl:underline-offset-[6px]">Vysoký štandard</span> pre Váš maximálny komfort
                        </p>
                        <div className="flex flex-col xl:flex-row gap-[35px] xl:gap-[65px]">
                            {bulletPoints2.map((props, k) => (
                                <BulletPoint2
                                    key={k}
                                    {...props}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col xl:flex-row gap-[12px] items-center xl:items-start justify-center pb-[100px] xl:pb-0 w-full">
                    {buttons.map((b, k) => (
                        <Link key={k} href={b.path}>
                            <button
                                className={`font-medium text-[16px] leading-[24px] border h-[50px] w-full xl:w-[190px]
                                        ${k === 0 && "hover:text-white hover:bg-[#476761] hover:border-[#476761] text-green2 bg-[#F5F5F5] border-[#476761]"} 
                                        ${k === 1 && "hover:bg-primary text-white bg-[#476761]"}`}>
                                {b.text}
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Description2;
