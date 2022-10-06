import Link from "next/link";
import Image from "next/image";

const MapFooter = () => {
    return (
        <div className="flex justify-center">
                <div className="bg-primary-pattern w-full">
                    <div className="flex xl:gap-[125px] flex-col xl:flex-row justify-center">
                        <div className="flex flex-col items-center xl:items-start gap-[28px] xl:mx-[165px] pt-[150px] pb-[70px] xl:py-[150px] px-[1rem] xl:px-0">
                            <h2 className="font-bold text-[32px] xl:text-[40px] leading-[40px] xl:leading-[48px] text-white">Dohodnite
                                si <span className="underline underline-offset-[6px]">Nezáväzné stretnutie</span> v
                                Predajnom mieste</h2>
                            <p className="leading-[28px] text-white">Zodpovieme všetky Vaše
                                otázky, prevedieme Vás procesom kúpy a poskytneme Vám všetky potrebné informácie o Vašom
                                novom bývaní.</p>
                            <p className="font-bold text-[24px] leading-[32px] text-white xl:w-auto">Rožňavská
                                1A, Bratislava</p>
                            <Link href='/stretnutie'>
                                <button
                                    className="hover:bg-primary text-[16px] font-medium leading-[24px] tracking-[0.1px] text-white border h-[50px] w-full xl:w-[190px] bg-[#89A6A2] border-none">Nezáväzné
                                    stretnutie
                                </button>
                            </Link>
                        </div>
                            <Image
                                quality={100}
                                objectFit="cover"
                                width={'100%'}
                                height={385}
                                alt="Mapa"
                                src={"/map.jpg"}
                            />
                    </div>
                </div>
        </div>
    )
}

export default MapFooter;
