import React from 'react';

import image from '../assets/forest.jpg';

export default function Home() {
    return (
        <main className="bg-gradient-to-br from-purple-400 via-indigo-300 to-pink-200">
            {/* <img src={image} alt="forest" className="absolute object-cover w-full h-full"/> */}
            <section className="relative text-center flex-col justify-center min-h-screen pt-12 lg:pt-32 px-8">
                <h1 className="text-7xl sm:text-9xl black font-bold cursive leading-none lg:leading-snug pt-10">Hello.</h1>
                <h2 className="text-6xl sm:text-7xl black font-bold cursive leading-none lg:leading-snug pt-20">I am happy to see you here.</h2>
            </section>
        </main>    
    )
}