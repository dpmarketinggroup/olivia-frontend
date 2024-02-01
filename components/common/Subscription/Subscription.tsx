import {Loader, TextInput} from "@mantine/core";
import {PaperPlane} from "@components/icons";
import Image from "next/image";
import Link from "next/link";
import {SyntheticEvent, useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import {useTranslation} from "next-i18next";

const Subscription = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const {t: translate} = useTranslation('home');

    async function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        if (!email) return;
        try {
            setLoading(true);
            await axios.post("/api/newsletter", {
                body: JSON.stringify({email})
            })
        } catch (err) {
            console.error(err);
        }
        setEmail('');
        setLoading(false)

        await router.push('/dakujeme-za-email')
    }

    return (
        <div className='flex justify-center xl:mb-[80px] bg-black xl:bg-transparent xl:h-[340px] green'>
            <div className="xl:mx-[165px] xl:bg-black w-full xl:max-w-[1200px] relative px-[1rem] xl:px-0">
                <div className="flex flex-col gap-[22px] xl:ml-[72px] xl:w-[350px]">
                    <h3 className="font-bold text-[32px] leading-[38px] text-[#89A6A2] pt-[52px]">{translate("subscription-heading")}</h3>
                    <p className="text-[14px] leading-5 text-white xl:w-[320px]">{translate("subscription-subheading")}</p>
                    <form onSubmit={handleSubmit}>
                        <TextInput
                            type={'email'}
                            required={true}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="text-[16px] leading-6"
                            placeholder="Email"
                            rightSection={<button disabled={loading} type={'submit'}>{loading ? <Loader size={15}/> :
                                <PaperPlane/>}</button>}/>
                    </form>
                    <p className="text-[12px] leading-5 opacity-40 text-white xl:pb-[52px]">
                        {translate("subscription-click-text-first-part")}
                        <Link href='/gdpr'>
                            <a className=" underline underline-offset-[6px]">{translate("subscription-click-text-second-part")}</a>
                        </Link>
                    </p>
                </div>
                <div
                    className="h-[300px] xl:h-[455px] relative xl:w-[640px] bottom-0 max-w-[1440px] mx-auto xl:left-[250px] xl:top-[-390px] mt-[50px] xl:mt-0">
                    <Image
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
