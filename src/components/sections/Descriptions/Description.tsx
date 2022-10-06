import React, {FunctionComponent} from "react";
import Image from "next/image";
import BulletPoint from "./BulletPoint";
import Link from "next/link";

export interface DescriptionProps {
    imgPath: string;
    title: string;
    description: string;
    bulletPoints: [
        { icon: JSX.Element; text: string },
        { icon: JSX.Element; text: string },
        { icon: JSX.Element; text: string }
    ];
    twoButtons?: boolean
    reverseFlex?: boolean;
}

const Description: FunctionComponent<DescriptionProps> = ({
                                                              imgPath,
                                                              title,
                                                              description,
                                                              bulletPoints,
                                                              twoButtons = true,
                                                              reverseFlex = false,
                                                          }) => {
    return (
        <div className={`flex flex-col xl:flex-row gap-[45px] xl:gap-[110px] ${reverseFlex && "xl:flex-row-reverse"} xl:mx-[165px] items-center justify-center mb-[120px] xl:mb-[165px] `}>
            <div className="h-[300px] xl:h-[400px] w-full xl:w-[555px] relative">
                <Image objectFit="cover" layout="fill" alt="hero image" src={imgPath}/>
            </div>
            <div className="flex flex-col gap-[15px] xl:gap-[23px] xl:items-start w-full px-[1rem] xl:px-0">
                <h3 className="font-bold text-[28px] xl:text-[40px] leading-[28px] xl:leading-[48px] text-primary xl:w-[445px] text-center xl:text-left">
                    {title}
                </h3>
                <p className="font-normal text-[14px] xl:text-[16px] leading-[24px] text-neutral-600 xl:w-[445px] text-center xl:text-left">
                    {description}
                </p>
                <div className={'flex flex-col gap-[15px] mx-auto'}>
                    {bulletPoints.map((b, k) => (
                        <BulletPoint key={k} icon={b.icon} text={b.text}/>
                    ))}
                </div>
                <div className="flex flex-col xl:flex-row gap-[12px] mt-[20px] xl:mt-0">
                    {twoButtons && <Link href="/o-projekte">
                        <button
                            className="hover:text-white hover:bg-[#476761] font-medium text-[16px] leading-[24px] tracking-[0.1px] border h-[36px] text-green2 bg-white border-[#476761] w-full xl:w-[120px]">O
                            projekte
                        </button>
                    </Link>
                    }
                    <Link href="/stretnutie">
                        <button
                            className="hover:bg-primary font-medium text-[16px] leading-[24px] tracking-[0.1px] border h-[36px] text-white bg-[#476761] w-full xl:w-[190px]">Nezáväzné
                            stretnutie
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Description;
