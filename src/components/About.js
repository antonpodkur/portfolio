import React, { useEffect, useState } from 'react';
import sanityClient from '../client';
import BlockContent from '@sanity/block-content-to-react';

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
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-white flex rounded-lg shadow-2xl flex-col md:flex-row text-center p-5 sm:p-20">
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
            </div>
        </main>
    )
}