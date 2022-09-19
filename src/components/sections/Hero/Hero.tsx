import React, {FunctionComponent} from "react";
import Link from "next/link";

interface HeroProps {
    imgName: string,
    icon: JSX.Element,
    title: string,
    description?: string,
}

const Hero: FunctionComponent<HeroProps> = ({
                                                imgName,
                                                icon,
                                                title,
                                                description
                                            }) => {
    return (
        <div className="flex justify-center">
            <div className={`bg-[url('/img/${imgName}.jpg')] h-[460px] w-full max-w-[1440px] mb-[140px]`}>
                <div className="w-[445px] ml-[165px] pt-[90px] mb-[20px]">
                    <div className="mb-[30px]">
                        {icon}
                    </div>
                    <h1 className="font-bold  text-[56px] leading-[60px] tracking-[-1px] text-white mb-[20px]">
                        {title}
                    </h1>
                    <p className="text-[18px] leading-7 text-white mb-[40px]">
                        {description}
                    </p>
                </div>
                <Link href="/">
                    <button
                        className="bg-[#89A6A2] w-[210px] h-[50px] text-white font-medium text-[16px] leading-[24px] tracking-[-0.1px] ml-[165px]">
                        Nezáväzné stretnutie
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Hero;