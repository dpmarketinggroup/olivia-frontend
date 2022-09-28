import React from "react";
import Link from "next/link";
import Image from "next/image";

const MapFooter = () => {
    return (
        <div className="flex justify-center">
                <div className="bg-primary-pattern w-full ">
                    <div className="flex xl:gap-[125px] flex-col xl:flex-row justify-center">
                        <div className="flex flex-col gap-[28px] mx-4 xl:mx-[165px] pt-[150px] pb-[70px] xl:py-[150px]">
                            <h2 className="font-bold text-[32px] xl:text-[40px] leading-[40px] xl:leading-[48px] tracking-[-0.5px] text-white w-[445px]">Dohodnite
                                si <br/><span className="underline underline-offset-[6px]">Nezáväzné stretnutie</span> v
                                Predajnom mieste</h2>
                            <p className="w-[400px] text-[16px] leading-[28px] text-white">Zodpovieme všetky Vaše
                                otázky, prevedieme Vás procesom kúpy a poskytneme Vám všetky potrebné informácie o Vašom
                                novom bývaní.</p>
                            <p className="font-bold text-[24px] leading-[32px] tracking-[-0.1px] text-white">Rožňavská
                                1A, Bratislava</p>
                            <Link href='/stretnutie'>
                                <button
                                    className="text-[16px] font-[500] leading-[24px] tracking-[0.1px] text-white border h-[50px] w-[190px] bg-[#89A6A2] border-none">Nezáväzné
                                    stretnutie
                                </button>
                            </Link>
                        </div>
                        <div className="h-[300px] xl:h-[385px] xl:w-[540px] relative xl:top-[155px] right-0 xl:right-[165px]">
                            <Image
                                objectFit="cover"
                                layout="fill"
                                alt="hero image"
                                src={"/img/smallMap.jpg"}
                            />
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default MapFooter;