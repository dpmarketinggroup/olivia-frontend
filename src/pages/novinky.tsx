import {NextPage} from "next";
import NewsSection from "../components/sections/News/NewsSection";
import React from "react";
import NewsSubscription from "../components/sections/News/NewsSubscription";
import MapFooter from "../components/ui/MapFooter";
import Head from "next/head";

interface Messages {
    news: [
        { path: string, date: string, title: string, description: string },
        { path: string, date: string, title: string, description: string },
        { path: string, date: string, title: string, description: string },
        { path: string, date: string, title: string, description: string },
    ],
    withHeading?: boolean
    mb?: number
}

const Novinky: NextPage = () => {
    const messages: Messages[] = [
        {
            news: [
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
            ],
            mb:95,
            withHeading: true
        },
        {
            news: [
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
            ],
            mb:95,
            withHeading: false
        },
        {
            news: [
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
            ],
            mb:95,
            withHeading: false
        },
        {
            news: [
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
            ],
            mb:150,
            withHeading: false
        },
    ]
    return (
        <>
            <Head>
                <title>Novinky | Olivia Residence</title>
            </Head>
            <div className="mt-[125px]">
                {messages.map((m, k) =>(
                    <div key={k} className={`${k === 0 && "mt-[-80px] xl:mt-0"} mb-[-60px] xl:mb-0`}>
                    <NewsSection  news={m.news} mb={m.mb} withHeading={m.withHeading}/>
                    </div>
                ))}

            </div>
            <div className="mt-[150px]">
            <NewsSubscription/>
            </div>
            <MapFooter/>
        </>
    )
}

export default Novinky;