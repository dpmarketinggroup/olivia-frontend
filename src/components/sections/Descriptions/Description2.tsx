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

const Description2: FunctionComponent<Description2Props>
    = ({
           imgPath,
           bulletPoints2 = [
               {
                   icon: <KeyIcon/>,
                   title: "Apartmán na kľúč",
                   text: "Bývanie v Olivia Residence je úplne bezstarostné. Ponúkame komplexne zariadené apratmány vrátane kompletne vybavenej kuchyne so spotrebičmi a sanitou. Vašou jedinou starosťou bude výber nábytku."
               },
               {
                   icon: <StarIcon/>,
                   title: "Vysoký štandard vybavenia",
                   text: "Olivia nevyniká len množstvom nadštandardného vybavenia, ale aj jeho prevedením. Materiály použité v apartmánoch zodpovedjú vysokým štandardom kvality."
               }
           ],
           buttons = [
               {path: "/ponuka-bytov", text: "Vybavenie apartmánov"}, {path: "/stretnutie", text: "Nezáväzné stretnutie"}
           ],
       }) => {
    return (
        <div className="flex justify-center">
            <div className="h-[1000px] w-full flex items-center justify-center bg-[#F5F5F5]">
                <div>
                    <h3 className="mb-[95px] font-bold text-[40px] leading-[48px] tracking-[-0.5px] text-center text-primary">Vybavenie
                        apartmánov</h3>
                    <div className="flex gap-[110px] mb-[95px] justify-center">
                        <div className="h-[380px] w-[555px] relative">
                            <Image
                                objectFit="cover"
                                layout="fill"
                                alt="hero image"
                                src={imgPath}
                            />
                        </div>
                        <div>
                            <p className="mb-[45px] font-bold text-[24px] leading-[32px] tracking-[-0.1px]">
                                <span className="text-green2 underline underline-offset-[6px]">Vysoký štandard</span>
                                <br/> pre Váš maximálny komfort
                            </p>
                            <div className="flex gap-[65px]">
                                {bulletPoints2.map((b2, k) => (
                                    <BulletPoint2
                                        key={k}
                                        icon={b2.icon}
                                        title={b2.title}
                                        text={b2.text}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[12px] justify-center">
                        {buttons.map((b, k) => (
                            <Link key={k} href={b.path}>
                                <button
                                    className={`font-medium text-[16px] leading-[24px] tracking-[0.1px] border h-[50px] w-[190px]
                                        ${k === 0 && "text-green2 bg-[#F5F5F5] border-[#476761]"} 
                                        ${k === 1 && "text-white bg-[#476761]"}`}>
                                    {b.text}
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description2;
