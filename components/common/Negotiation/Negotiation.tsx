import Link from "next/link";
import Image from "next/image";
import {Button} from "@components/ui";

interface NegotiationProps {
    title: string;
    subtitle: string;
    buttonText?: string;
    centerText?: boolean
}

const Negotiation = ({
                         title,
                         subtitle,
                         buttonText = "Viac o lokalite",
                         centerText = false
                     }: NegotiationProps) => {
    return (
        <div className='flex justify-center'>
            <div className="w-full">
                {!centerText ?
                    (
                        <div
                            className="flex flex-col xl:flex-row gap-[25px] xl:gap-[435px] mx-4 xl:mx-[165px] justify-center mb-[30px] xl:mb-[60px] xl:items-end">
                            <div className="flex flex-col gap-[10px] xl:gap-[20px]">
                                <h3 className="font-bold xl:w-auto text-[25px] xl:text-[40px] leading-[28px] xl:leading-[48px] tracking-[-0.5px]">{title}</h3>
                                <p className="text-[#676766] font-normal text-[14px] xl:text-[16px] leading-[24px] tracking-[0.1px]">{subtitle}</p>
                            </div>
                            <Button variant={'outlined'} href={'/lokalita'}>
                                {buttonText}
                            </Button>
                        </div>
                    ) : (
                        <div className="text-center">
                            <h3 className="font-bold text-[32px] leading-[38px] tracking-[-0.4px] text-green2 mb-[20px]">{title}</h3>
                            <p className="text-[16px] leading-6 tracking-[0.1px] text-[#676766] mb-[60px]">{subtitle}</p>
                        </div>
                    )
                }

                <div className="h-[325px] xl:h-[650px] w-full xl:max-w-[1920px] relative mx-0 xl:mx-auto">
                    <Image
                        objectFit="cover"
                        layout="fill"
                        alt="hero image"
                        src={"/img/map.jpg"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Negotiation;
