import {NextPage} from "next";
import NewsSection from "../components/sections/News/NewsSection";
import React from "react";
import NewsSubscription from "../components/sections/News/NewsSubscription";

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
            <div className="mt-[125px]">
                {messages.map((m, k) =>(
                    <NewsSection key={k} news={m.news} mb={m.mb} withHeading={m.withHeading}/>
                ))}
                <NewsSubscription/>
            </div>
        </>
    )
}

export default Novinky;