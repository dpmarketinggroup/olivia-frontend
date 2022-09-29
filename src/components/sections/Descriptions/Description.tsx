import React, {FunctionComponent} from "react";
import Image from "next/image";
import BulletPoint from "./BulletPoint";
import Link from "next/link";

interface DescriptionProps {
    imgPath: string;
    title: string;
    descrip: string;
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
                                                              descrip,
                                                              bulletPoints,
                                                              twoButtons = true,
                                                              reverseFlex = false,
                                                          }) => {
    return (
        <div
            className={`flex flex-col xl:flex-row gap-[45px] xl:gap-[110px] ${reverseFlex && "flex-row-reverse"} mx-4 xl:mx-[165px] items-center justify-center mb-[120px] xl:mb-[165px]`}>
            <div className="h-[245px] xl:h-[400px] w-[400px] xl:w-[555px] relative">
                <Image objectFit="cover" layout="fill" alt="hero image" src={imgPath}/>
            </div>
            <div className="flex flex-col gap-[15px] xl:gap-[23px] mx-4 xl:mx-0 items-center xl:items-start">
                <h3 className="font-bold text-[28px] xl:text-[40px] leading-[28px] xl:leading-[48px] tracking-[-0.5px] text-primary w-[384px] xl:w-[445px]">
                    {title}
                </h3>
                <p className="font-normal text-[14px] xl:text-[16px] leading-[24px] tracking-[0.1px] text-neutral-600 w-[384px] xl:w-[445px]">
                    {descrip}
                </p>
                {bulletPoints.map((b, k) => (
                    <BulletPoint key={k} icon={b.icon} text={b.text}/>
                ))}
                <div className="flex gap-[12px] mt-[20px] xl:mt-0">
                    {twoButtons && <Link href="/o-projekte">
                        <button
                            className="font-medium text-[16px] leading-[24px] tracking-[0.1px] border h-[36px] text-green2 bg-white border-[#476761] w-[120px]">O
                            projekte
                        </button>
                    </Link>
                    }
                    <Link href="/stretnutie">
                        <button
                            className="font-medium text-[16px] leading-[24px] tracking-[0.1px] border h-[36px] text-white bg-[#476761] w-[190px]">Nezáväzné
                            stretnutie
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Description;
