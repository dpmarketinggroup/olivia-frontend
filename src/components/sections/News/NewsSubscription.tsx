import React from "react";
import {TextInput} from "@mantine/core";
import PaperPlaneIcon from "../../svg/PaperPlane";
import Image from "next/image";

const NewsSubscription = () => {
    return (
        <div className='flex justify-center mb-[260px]'>
            <div>
                <div className="mx-[165px] bg-black w-[1110px] relative">
                    <div className="flex flex-col gap-[22px] ml-[72px]">
                        <h3 className="font-bold text-[32px] leading-[38px] tracking-[-0.4px] text-[#89A6A2] pt-[52px]">Odber noviniek</h3>
                        <p className="text-[14px] leading-5 text-white w-[300px]">Najnovšie informácie o projekte Olivia Residence priamo do Vašej schránky.</p>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <TextInput
                                className="bg-red-600 w-[350px] text-[16px] leading-6 tracking-[0.1px] opacity-50"
                                placeholder="Email" rightSection= {<button><PaperPlaneIcon/></button>}/>
                        </form>
                        <p className="text-[12px] leading-5 opacity-40 text-white w-[350px] pb-[52px]">
                            Kliknutím na tlačidlo potvrdzujete, že súhlasíte s našimi podmienkami spracovania
                            <span className=" underline underline-offset-[6px]"> osobných údajov.</span>
                        </p>
                    </div>
                    <div className="h-[430px] w-[630px] max-w-[1440px] absolute left-[500px] top-[-60px]">
                        <Image
                            objectFit="cover"
                            layout="fill"
                            alt="hero image"
                            src={"/img/envelopes.png"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsSubscription;