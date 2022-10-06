import  { useState} from "react";
import Link from "next/link";
import RightArrowIcon from "../../icons/RightArrow";
import CloseIcon from "../../icons/Close";

const OpeningBanner = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            {
                isOpen &&
                <div className="flex bg-[#0E3F3B] items-center w-full justify-center fixed h-[40px] xl:mt-0 z-[99]">
                    <div className="w-full max-w-[1920px] px-[1rem] xl:px-0 relative">
                        <div className="flex gap-[20px]">
                            <p className="text-white font-medium text-[14px] leading-5 w-[160px] xl:ml-[40%]">
                                Výstavba oficiálne začala.
                            </p>
                            <div className="flex gap-[8px] items-center">
                                <Link href="/pages">
                                    <a className="text-white font-medium text-[14px] leading-5 underline underline-offset-[5px]">Viac</a>
                                </Link>
                                <RightArrowIcon/>
                            </div>
                        </div>
                        <div className="xl:mr-[13px] absolute right-[1rem] xl:right-[12px] top-[1px]">
                            <button onClick={() => setIsOpen(false)}>
                                <CloseIcon/>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default OpeningBanner;
