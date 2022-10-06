import Link from "next/link";
import {RightArrow} from "@components/icons";
import {Modal} from "@mantine/core";
import Image from "next/image";
import {useState} from "react";
interface NewsSectionProps {
    withHeading?: boolean
}

const Articles = ({withHeading = true}: NewsSectionProps) => {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <div className={`px-[1rem] xl:px-0 xl:mx-[165px] mb-[90px]`}>
                {withHeading &&
                    <div className="text-center mb-[55px] xl:mb-[110px]">
                        <h2 className="font-bold text-[27px] xl:text-[40px] leading-[48px] mb-[10px] xl:mb-[20px]">Novinky</h2>
                        <p className="text-[16px] leading-6 text-[#676766] mb-[10px] xl:mb-[20px]">Najnovšie informácie
                            o projekte Olivia Residence.</p>
                        <div className="flex gap-[10px] justify-center items-center">
                            <Link href="/pages/novinky">
                                <a className="text-[18px] font-medium leading-[28px] text-green2">Všetky novinky</a>
                            </Link>
                            <RightArrow stroke="#476761"/>
                        </div>
                    </div>
                }
                <div className="flex flex-col xl:flex-row gap-[30px] items-center xl:items-start xl:justify-center">
                    {[
                        {
                            path: "/img/room.jpg",
                            date: "12.09.2021",
                            title: "Medium length title",
                            description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"
                        },
                        {
                            path: "/img/room.jpg",
                            date: "12.09.2021",
                            title: "Medium length title",
                            description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"
                        },
                        {
                            path: "/img/room.jpg",
                            date: "12.09.2021",
                            title: "Medium length title",
                            description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"
                        },
                        {
                            path: "/img/room.jpg",
                            date: "12.09.2021",
                            title: "Medium length title",
                            description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"
                        },
                    ].map(({title, description, date, path}, i) => (
                        <div key={i}>
                            <Modal opened={opened} onClose={() => setOpened(false)} centered closeOnClickOutside={true}>
                                <h2 className="font-bold text-[40px] leading-[48px] text-green2 mb-[25px]">{title}</h2>
                                <div className="relative h-[340px] mb-[25px]">
                                    <Image
                                        src={path}
                                        alt={`${title} image`}
                                        layout={"fill"}
                                        objectFit={"cover"}
                                    />
                                </div>
                                <p className="text-[14px] leading-5 text-green2 mb-[25px]">{date}</p>
                                <p className="text-[16px] leading-6 tracking-[0.1px] mb-[25px]">
                                    {description}
                                </p>
                                <Link href="/pages/stretnutie">
                                    <button
                                        className="hover:bg-primary px-[20px] py-[6px] bg-[#476761] text-white font-medium text-[16px] leading-6">
                                        Nezáväzné stretnutie
                                    </button>
                                </Link>
                            </Modal>
                            <div className="flex flex-col gap-[10px] w-full">
                                <div className="h-[135px] xl:h-[155px] xl:w-[255px] relative">
                                    <Image objectFit="cover" layout="fill" alt="hero image" src={path}/>
                                </div>
                                <span className="text-[14px] leading-5 text-green2">{date}</span>
                                <h4 className="text-[16px] font-medium leading-6 ">{title}</h4>
                                <p className="text-[14px] leading-5 text-[#676766] xl:w-[190px]">{description}</p>
                                <div className="flex gap-[8px] items-center">
                                    <Link href=''>
                                        <a className="hover:border-b-2 hover:border-[#476761] border-b-2 border-white font-medium text-[14px] leading-5 text-green2"
                                           onClick={() => setOpened(true)}>Viac</a>
                                    </Link>
                                    <RightArrow stroke="#476761"/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Articles;
