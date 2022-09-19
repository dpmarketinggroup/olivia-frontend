import React from "react";
import UniCreditIcon from "./svg/UniCredit";
import Image from "next/image";
import PhoneIcon from "./svg/Phone";
import EmailSignIcon from "./svg/EmailSign";
import StepsUniCredit from "./StepsUniCredit";

interface Steps{
    step: string
    title: string
    offer: string
}

const FinancingConditions = () => {
    const steps: Steps[] = [
        {step: "1. krok", title: "Rezervačná zmluva", offer: "1 500 €"},
        {step: "2. krok", title: "Zmluva o budúcej zmluve", offer: "20% z ceny bytu"},
        {step: "3. krok", title: "Kúpna zmluva", offer: "80% z ceny bytu"},
    ]
    return (
        <div className="relative mb-[200px]">
            <div className="bg-black w-full">
                <div className="flex flex-col gap-[30px] justify-center items-center pt-[130px] pb-[270px]">
                    <h2 className="font-bold text-[40px] leading-[48px] text-[#F5F5F5] tracking-[-0.5px]">Podmienky
                        financovania</h2>
                    <span className="text-[16px] leading-6 tracking-[0.1px] text-[#89A6A2]">Financujúca banka</span>
                    <UniCreditIcon/>
                </div>
            </div>
            <div className="bg-[#F5F5F5] w-[full]">
                <div className="flex gap-[100px] pt-[270px] pb-[145px] mx-[165px] items-center">
                    <div>
                        <h4 className="font-bold text-[18px] leading-7 mb-[10px]">Finančný poradca UniCredit Bank</h4>
                        <p className="text-[14px] leading-[20px] text-[#999999] w-[350px]">Neváhajte ma kontaktovať. Predstavím Vám detailný model financovania a zodpoviem všetky Vaše otázky.</p>
                    </div>
                    <div className="flex gap-[20px] items-center">
                        <div className="h-[60px] w-[60px] relative">
                            <Image
                                objectFit="cover"
                                layout="fill"
                                alt="Jozef Mrkvicka"
                                src="/img/jozefMrkvicka.png"
                            />
                        </div>
                        <div>
                            <p className="font-bold text-[16px] leading-6 tracking-[0.1px] ">Jozef Mrkvička</p>
                            <span className="text-[14px] leading-5">Fin. poradca | UniCredit Bank</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-[20px]">
                            <PhoneIcon/>
                            <span className="font-bold text-[18px] leading-7">+421 000 000</span>
                        </div>
                        <div  className="flex gap-[20px]">
                            <EmailSignIcon/>
                            <span className="font-bold text-[18px] leading-7">info@oliviaresidence.sk</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-[30px] bg-[background: #F5F5F5] absolute top-[460px] left-[165px]">
                {steps.map((s, k) =>(
                    <StepsUniCredit key={k} step={s.step} title={s.title} offer={s.offer}/>
                ))}
            </div>
        </div>
    );
};

export default FinancingConditions;
