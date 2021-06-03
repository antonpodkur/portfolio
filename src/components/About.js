import React, { useEffect, useState } from 'react';
import sanityClient from '../client';
import BlockContent from '@sanity/block-content-to-react';
import '../styles/animations.css';

import Loading from './Loading';

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(()=>{
        sanityClient.fetch(`*[_type=="author"]{
            name,
            bio,
            image{
                asset->{
                    _id,
                    url,
                },
                alt
            }
        }`).then((data)=>setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if(!author) return(<Loading/>)

    return (
        <main className="bg-gradient-to-b from-purple-400 via-indigo-300 to-pink-200 min-h-screen sm:p-12">
            <div className="p-10 lg:pt-25 container mx-auto relative">
                <section className="bg-white flex rounded-lg shadow-2xl flex-col md:flex-row text-center p-5 sm:p-20 fade-in-right-025s">
                    <img src={author.image.asset.url} alt={author.image.url} className="rounded w-32 h-32 mx-auto lg:w-64 lg:h-64 md:mr-8" />
                    <div className="text-lg sm:flex flex-col justify-center relative mx-auto">
                        <h1 className=" cursive text-2xl pt-5 sm:pt=0 md:text-4xl lg:text-6xl text-black mb-4">
                            Hello! I am {" "}
                            <span className="text-2xl md:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-700 via-indigo-300 to-pink-200">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl flex text-black casual justify-center">
                            <BlockContent blocks={author.bio} projectId="370xn94r" dataset="production"/>
                        </div>
                    </div>
                </section>

                <section className="bg-white mt-10 flex rounded-lg shadow-2xl flex-col text-center p-5 sm:p-10 fade-in-left-025s">
                    <div className="font-bold cursive text-2xl md:text-4xl text-black mx-auto">
                        Responsibilities
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 pt-5">
                        <div className="mt-5 py-5 mx-auto bg-gray-200 w-5/6 rounded-lg">
                            <div className=" casual-bold text-lg sm:text-xl">Front-end</div>
                            <div className="pt-1 casual">
                                <ul className="">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>VueJs</li>
                                    <li>React</li>
                                    <li>Vuetify</li>
                                    <li>Tailwindcss</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-5 py-5 mx-auto bg-gray-200 w-5/6 rounded-lg">
                            <div className="casual-bold text-lg sm:text-xl">Back-end</div>
                            <div className="pt-1 casual">
                                <ul className="">
                                    <li>NodeJs</li>
                                    <li>Express, Restify</li>
                                    <li>SQL</li>
                                    <li>MySql (MariaDB)</li>
                                    <li>MongoDB</li>
                                    <li>Sanity</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-5 py-5 mx-auto bg-gray-200 w-5/6 rounded-lg">
                            <div className="casual-bold text-lg sm:text-xl">Mobile</div>
                            <div className="pt-1 casual">
                                <ul className="">
                                    <li>Android Native (Kotlin)</li>
                                    <li>Flutter</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-5 py-5 mx-auto bg-gray-200 w-5/6 rounded-lg">
                            <div className="casual-bold text-lg sm:text-xl">Other</div>
                            <div className="pt-1 casual">
                                <ul className="">
                                    <li>Git</li>
                                    <li>Python</li>
                                    <li>C#</li>
                                    <li>Java</li>
                                    <li>Linux/Unix</li>
                                    <li>Problem-solving skills</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}