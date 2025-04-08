import { Loader, TextInput } from "@mantine/core";
import PaperPlaneIcon from "../../icons/PaperPlane";
import Image from "next/image";
import Link from "next/link";
import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useTranslation } from "next-i18next";
import OverButtonIcon from "@components/icons/OverButton";
import BgSquare from "@components/icons/BgSquare";
const Subscription = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const { t: translate } = useTranslation('home');

    async function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        if (!email) return;
        try {
            setLoading(true);
            await axios.post("/api/newsletter", {
                body: JSON.stringify({ email })
            })
        } catch (err) {
            console.error(err);
        }
        setEmail('');
        setLoading(false)

        await router.push('/dakujeme-za-email')
    }

    return (
        <div className='relative flex justify-center xl:mb-[80px] bg-primary xl:bg-transparent xl:h-[340px] green'>

            <div className="relative xl:mx-[165px] xl:bg-primary w-full xl:max-w-[1200px] relative px-[1rem] py-8  xl:px-0 max-h-[350px]">
                <div className="absolute top-0 right-0 z-[5]">
                    <BgSquare />
                </div>
                <div className="flex flex-col gap-[22px] xl:ml-[72px] relative z-[20]">
                    <h3 className="text-[48px] leading-[38px] text-white pt-0 sm:pt-[35px] sm:w-full w-[60%]">{translate("subscription-heading")}</h3>
                    <p className="text-[14px] leading-5 text-white ">{translate("subscription-subheading")}</p>
                    <form onSubmit={handleSubmit} className="flex flex-row w-[90%] md:w-1/2 lg:w-[40%]">
                        <TextInput
                            type={'email'}
                            required={true}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="text-[16px] leading-6"
                            placeholder="Email"
                            sx={{
                                width: "100%"
                            }}
                        />
                        <button disabled={loading} type={"submit"} className="hover:scale-105 transform transition-transform duration-300 ease-in-out relative hover:bg-white bg-yellow text-white hidden sm:flex flex-row justify-center items-center gap-2 px-[32px] py-[22px] text-[18px] group drop-shadow-md">
                            {/* {loading ? <Loader size={15} /> : <PaperPlaneIcon />} */}
                            <p className="text-[18px] text-primary leading-[18px]"> {translate("form-button")}</p> <PaperPlaneIcon fill="#087168" />
                            <div className="absolute z-[10] top-0 right-0"><div className="group-hover:hidden block transform transition-transform duration-300 ease-in-out ">

                                <OverButtonIcon />
                            </div>
                                <div className="group-hover:block hidden transform transition-transform duration-300 ease-in-out">
                                    <OverButtonIcon fill="#087168" />
                                </div></div>
                        </button>
                        <button disabled={loading} type={"submit"} className="sm:hidden relative bg-[#FFA100] text-white flex flex-row justify-center items-center gap-2 px-[24px] py-[24px] text-[18px]">
                            {/* {loading ? <Loader size={15} /> : <PaperPlaneIcon />} */}
                            <PaperPlaneIcon fill="#000000" />
                            <div className="absolute z-[10] top-0 right-0"><OverButtonIcon /></div>
                        </button>
                    </form>
                    <p className="text-[12px] leading-5 opacity-60 text-white xl:pb-[52px]">
                        {translate("subscription-click-text-first-part")}{" "}
                        <Link href='/gdpr'>
                            <a className=" underline underline-offset-[6px]">{translate("subscription-click-text-second-part")}</a>
                        </Link>
                    </p>
                </div>
                <div
                    className="relative xl:h-[455px]  lg:h-[364px] sm:h-[228px] h-[114px] xl:w-[640px] lg:w-[512px] sm:w-[320px] w-[160px] max-w-[1440px] mx-auto xl:left-[250px] lg:left-[250px] md:left-[200px] sm:left-[150px]  left-[80px] top-[-300px] sm:top-[-300px] md:top-[-200px] lg:top-[-200px]   xl:top-[-290px]  z-[10]">
                    <Image
                        quality={100}
                        objectFit="cover"
                        layout="fill"
                        alt="hero image"
                        src={"/img/envelopes.png"}
                        loading={'eager'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Subscription;
