import type {NextPage} from "next";
import Link from "next/link";
import Description2 from "../components/Description2";
import CloseIcon from "../components/svg/Close";
import KeyIcon from "../components/svg/Key";
import Description from "../components/Description";
import GlassStarIcon from "../components/svg/GlassStar";
import MapPointIcon from "../components/svg/MapPoint";
import RightArrowIcon from "../components/svg/RightArrow";
import StarIcon from "../components/svg/Star";
import WholeProcess from "../components/WholeProcess";
import Map from "../components/Map";
import Image from "next/image";
import NewsSection from "../components/NewsSection";
import NewsSubscription from "../components/NewsSubscription";

const Home: NextPage = () => {
    return (
        <>
            <div className="flex bg-[#0E3F3B] items-center justify-center h-[40px] relative">
                <div className="flex gap-[20px]">
                    <p className="text-white font-medium text-[14px] leading-5 w-[160px]">
                        Výstavba oficiálne začala.
                    </p>
                    <div className="flex gap-[8px] items-center">
                        <span className="text-white font-medium text-[14px] leading-5">Viac</span>
                        <RightArrowIcon/>
                    </div>
                </div>
                <div className=" mr-[13px] absolute right-[12px] top-[12px]">
                    <CloseIcon/>
                </div>
            </div>
            <section className="flex justify-center">
                <div className="bg-[url('/img/hero.jpg')] h-[650px] w-full max-w-[1440px] mb-[140px]">
                    <div className="w-[600px] ml-[165px] pt-[185px] mb-[40px]">
                        <h1 className="font-bold  text-[56px] leading-[60px] tracking-[-1px] text-white">
                            Moderný štýl bývania v dynamickej lokalite so skvelými možnosťami
                        </h1>
                    </div>
                    <div className="flex gap-[10px] ml-[165px] ">
                        <Link href="/">
                            <button
                                className="bg-[#89A6A2] w-[210px] h-[50px] text-white font-medium text-[16px] leading-[24px] tracking-[-0.1px]">
                                Nezáväzné stretnutie
                            </button>
                        </Link>
                        <Link href="/">
                            <button
                                className="font-medium text-[16px] leading-[24px] tracking-[-0.1px] w-[210px] h-[50px] border border-white text-white">
                                Ponuka apartmánov
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <WholeProcess/>
            <Description
                imgPath="/img/room.jpg"
                title="Moderné mestské bývanie"
                descrip="Olivia je určená pre ľudí, ktorí chcú, aby ich domov presahoval za steny ich bytu. Pre ľudí, ktorí chcú mať ich obľúbené aktivity na dosah ruky. Pre ľudí, ktorí chcú svoj čas využívať efektívne. A pre ľudí, ktorí chcú mať z bývania zážitok. Olivia nie je len bývanie, je to životný štýl."
                bulletPoints={[
                    {icon: <MapPointIcon/>, text: "Skvelá dynamická lokalita"},
                    {icon: <StarIcon/>, text: "Vysoký štandard vybavenia"},
                    {icon: <GlassStarIcon/>, text: "Štýlové a kvalitné prevedenie"},
                ]}
                buttons={[
                    {path: "/", text: "O projekte"},
                    {path: "/", text: "Nezáväzné stretnutie"},
                ]}
            />
            <Map title="Lokalita v centre diania" subtitle="Rožňavská 1A, Bratislava"/>
            <Description2
                imgPath="/img/room2.jpg"
                title="Vybavenie apartmánov"
                bulletPoints2={[
                    {
                        icon: <KeyIcon/>,
                        title: "Apartmán na kľúč",
                        text: "Bývanie v Olivia Residence je úplne bezstarostné. Ponúkame komplexne zariadené apratmány vrátane kompletne vybavenej kuchyne so spotrebičmi a sanitou. Vašou jedinou starosťou bude výber nábytku.",
                    },
                    {
                        icon: <StarIcon/>,
                        title: "Vysoký štandard vybavenia",
                        text: "Olivia nevyniká len množstvom nadštandardného vybavenia, ale aj jeho prevedením. Materiály použité v apartmánoch zodpovedjú vysokým štandardom kvality.",
                    },
                ]}
                buttons={[
                    {path: "/", text: "Vybavenie apartmánov"},
                    {path: "/", text: "Vybavenie apartmánov"},
                ]}
            />
            <NewsSection news={[
                {path: "/img/room.jpg", date: "12.09.2021", title: "Medium length title", description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"},
                {path: "/img/room.jpg", date: "12.09.2021", title: "Medium length title", description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"},
                {path: "/img/room.jpg", date: "12.09.2021", title: "Medium length title", description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"},
                {path: "/img/room.jpg", date: "12.09.2021", title: "Medium length title", description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"},
            ]}
            />
            <NewsSubscription/>
        </>
    );
};

export default Home;
