import React, {FunctionComponent} from "react";
import Link from "next/link";
import Image from "next/image";

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
            <div className="h-[460px] w-full max-w-[1440px] mb-[60px] xl:mb-[140px]">
                <div className="h-[430px] w-[1440px] max-w-[1440px] absolute -z-10">
                    <Image
                        objectFit="cover"
                        layout="fill"
                        alt="hero image"
                        src={`/img/${imgName}.jpg`}
                    />
                </div>
                <div className="w-[445px] ml-4 xl:ml-[165px] pt-[90px] mb-[20px]">
                    <div className="mb-[30px]">
                        {icon}
                    </div>
                    <h1 className="font-bold  text-[56px] leading-[60px] tracking-[-1px] text-white mb-[20px]">
                        {title}
                    </h1>
                    <p className="text-[18px] leading-7 text-white mb-[40px] w-[300px]">
                        {description}
                    </p>
                </div>
                <Link href="/stretnutie">
                    <button
                        className="bg-[#89A6A2] w-[210px] h-[50px] text-white font-medium text-[16px] leading-[24px] tracking-[-0.1px] ml-4 xl:ml-[165px]">
                        Nezáväzné stretnutie
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Hero;