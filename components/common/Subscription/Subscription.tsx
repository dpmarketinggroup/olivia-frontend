import {TextInput} from "@mantine/core";
import {PaperPlane} from "@components/icons";
import Image from "next/image";

const Subscription = () => {
    return (
        <div className='flex justify-center xl:mb-[150px] bg-black xl:bg-transparent xl:h-[340px]'>
            <div className="xl:mx-[165px] xl:bg-black w-full xl:max-w-[1200px] relative px-[1rem] xl:px-0">
                <div className="flex flex-col gap-[22px] xl:ml-[72px] xl:w-[350px]">
                    <h3 className="font-bold text-[32px] leading-[38px] text-[#89A6A2] pt-[52px]">Odber noviniek</h3>
                    <p className="text-[14px] leading-5 text-white xl:w-[320px]">Najnovšie informácie o projekte Olivia Residence priamo do Vašej schránky.</p>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <TextInput
                            className="text-[16px] leading-6"
                            placeholder="Email" rightSection= {<button><PaperPlane/></button>}/>
                    </form>
                    <p className="text-[12px] leading-5 opacity-40 text-white xl:pb-[52px]">
                        Kliknutím na tlačidlo potvrdzujete, že súhlasíte s našimi podmienkami spracovania
                        <span className=" underline underline-offset-[6px]"> osobných údajov.</span>
                    </p>
                </div>
                <div className="h-[300px] xl:h-[455px] relative xl:w-[640px] bottom-0 max-w-[1440px] mx-auto xl:left-[250px] xl:top-[-390px]">
                    <Image
                        objectFit="cover"
                        layout="fill"
                        alt="hero image"
                        src={"/img/envelopes.png"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Subscription;
