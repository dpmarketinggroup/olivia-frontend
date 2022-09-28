import type {NextPage} from "next";
import Link from "next/link";
import Description2 from "../components/sections/Descriptions/Description2";
import KeyIcon from "../components/svg/Key";
import Description from "../components/sections/Descriptions/Description";
import GlassStarIcon from "../components/svg/GlassStar";
import MapPointIcon from "../components/svg/MapPoint";
import StarIcon from "../components/svg/Star";
import WholeProcess from "../components/sections/Process/WholeProcess";
import Map from "../components/Map";
import NewsSection from "../components/sections/News/NewsSection";
import NewsSubscription from "../components/sections/News/NewsSubscription";
import SwiperGallery from "../components/sections/Swipers/SwiperGallery";
import SwiperPastProjects from "../components/sections/Swipers/SwiperPastProjects";
import SwiperApartments from "../components/sections/Swipers/SwiperApartments";
import MapFooter from "../components/ui/MapFooter";

const Home: NextPage = () => {
    return (
        <>
            <section className="flex justify-center">
                <div className="bg-[url('/img/hero.jpg')] h-[650px] w-full max-w-[1440px] mb-[90px] xl:mb-[140px]">
                    <div className="w-[350px] xl:w-[600px] ml-4 xl:ml-[165px]  pt-[185px] mb-[40px]">
                        <h1 className="font-bold text-[34px] xl:text-[56px] leading-[40px] xl:leading-[60px] tracking-[-1px] text-white">
                            Moderný štýl bývania v dynamickej lokalite so skvelými možnosťami
                        </h1>
                    </div>
                    <div className="flex gap-[10px] ml-4 xl:ml-[165px] mr-4 xl:mr-0">
                        <Link href="/stretnutie">
                            <button
                                className="bg-[#89A6A2] w-[210px] h-[50px] text-white font-medium text-[16px] leading-[24px] tracking-[-0.1px]">
                                Nezáväzné stretnutie
                            </button>
                        </Link>
                        <Link href="/ponuka-bytov">
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
            />
            <SwiperApartments/>
            <Map title="Lokalita v centre diania" subtitle="Rožňavská 1A, Bratislava"/>
            <Description2 imgPath="/img/room2.jpg"/>
            <div className="flex justify-center">
            <SwiperGallery/>
            </div>
            <NewsSection news={[
                {path: "/img/room.jpg", date: "12.09.2021", title: "Medium length title", description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"},
                {path: "/img/room.jpg", date: "12.09.2021", title: "Medium length title", description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"},
                {path: "/img/room.jpg", date: "12.09.2021", title: "Medium length title", description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"},
                {path: "/img/room.jpg", date: "12.09.2021", title: "Medium length title", description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"},
            ]}
            />
            <NewsSubscription/>
            <SwiperPastProjects/>
    <MapFooter/>
    </>
    );
};

export default Home;
