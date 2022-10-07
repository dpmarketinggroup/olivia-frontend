import Link from "next/link";
import Image from "next/image";

interface HeroProps {
    imgName: string,
    icon: JSX.Element,
    title: string,
    description?: string,
}

const Hero = ({
                  imgName,
                  icon,
                  title,
                  description
              }: HeroProps) => {
    return (
        <div className="flex justify-center mt-[75px]">
            <div className="h-[460px] w-full xl:max-w-[1920px] mb-[60px] xl:mb-[140px] relative">
                <div className="h-full w-full absolute -z-10">
                    <Image
                        objectFit="cover"
                        layout="fill"
                        alt="hero image"
                        src={`/img/${imgName}.jpg`}
                    />
                </div>
                <div className="xl:w-[445px] mx-4 xl:ml-[165px] xl:mr-0 pt-[90px] mb-[20px]">
                    <div className="mb-[30px] flex justify-center xl:block">
                        {icon}
                    </div>
                    <h1 className="font-bold  text-[56px] leading-[60px] tracking-[-1px] text-white mb-[20px] text-center xl:text-start">
                        {title}
                    </h1>
                    <p className="text-[18px] leading-7 text-white mb-[40px] text-center xl:text-start">
                        {description}
                    </p>
                    <Link href="/stretnutie">
                        <button
                            className="hover:bg-primary bg-[#89A6A2] w-full xl:w-[210px] h-[50px] text-white font-medium text-[16px] leading-[24px] tracking-[-0.1px]">
                            Nezáväzné stretnutie
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;
