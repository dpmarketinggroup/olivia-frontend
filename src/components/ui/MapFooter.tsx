import React from "react";
import Link from "next/link";
import Image from "next/image";

const MapFooter = () => {
    return (
        <div className="flex justify-center">
            <div>
                <div className="w-[1440px]">
                    <div className='flex gap-[125px]  bg-primary-pattern'>
                        <div className="flex flex-col gap-[28px] mx-[165px] py-[150px]">
                            <h2 className="font-bold text-[40px] leading-[48px] tracking-[-0.5px] text-white w-[445px]">Dohodnite
                                si <br/><span className="underline underline-offset-[6px]">Nezáväzné stretnutie</span> v
                                Predajnom mieste</h2>
                            <p className="w-[400px] text-[16px] leading-[28px] text-white">Zodpovieme všetky Vaše
                                otázky, prevedieme Vás procesom kúpy a poskytneme Vám všetky potrebné informácie o Vašom
                                novom bývaní.</p>
                            <p className="font-bold text-[24px] leading-[32px] tracking-[-0.1px] text-white">Rožňavská
                                1A, Bratislava</p>
                            <Link href='/'>
                                <button
                                    className="text-[16px] font-[500] leading-[24px] tracking-[0.1px] text-white border h-[50px] w-[190px] bg-[#89A6A2] border-none">Nezáväzné
                                    stretnutie
                                </button>
                            </Link>
                        </div>
                        <div className="h-[385px] w-[540px] relative top-[155px] right-[165px]">
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
        </div>
    )
}

export default MapFooter;