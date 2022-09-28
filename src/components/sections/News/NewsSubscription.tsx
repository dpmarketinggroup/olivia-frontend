import React from "react";
import {TextInput} from "@mantine/core";
import PaperPlaneIcon from "../../svg/PaperPlane";
import Image from "next/image";

const NewsSubscription = () => {
    return (
        <div className='flex justify-center mb-[300px] xl:mb-[150px]'>
            <div>
                <div className="mx-[165px] bg-black w-[384px] xl:w-[1110px] relative">
                    <div className="flex flex-col gap-[22px] ml-[15px] xl:ml-[72px]">
                        <h3 className="font-bold text-[32px] leading-[38px] tracking-[-0.4px] text-[#89A6A2] pt-[52px]">Odber noviniek</h3>
                        <p className="text-[14px] leading-5 text-white w-[300px]">Najnovšie informácie o projekte Olivia Residence priamo do Vašej schránky.</p>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <TextInput
                                className="w-[350px] text-[16px] leading-6 tracking-[0.1px]"
                                placeholder="Email" rightSection= {<button><PaperPlaneIcon/></button>}/>
                        </form>
                        <p className="text-[12px] leading-5 opacity-40 text-white w-[350px] pb-[280px] xl:pb-[52px]">
                            Kliknutím na tlačidlo potvrdzujete, že súhlasíte s našimi podmienkami spracovania
                            <span className=" underline underline-offset-[6px]"> osobných údajov.</span>
                        </p>
                    </div>
                    <div className="h-[340px] xl:h-[430px] w-[470px] xl:w-[630px] max-w-[1440px] absolute left-[-50px] xl:left-[500px] top-[300px] xl:top-[-60px]">
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