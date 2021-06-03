import React from 'react';

export default function Home() {
    return (
        <main className="bg-gradient-to-br from-purple-400 via-indigo-300 to-pink-200">
            <section className="relative flex text-center flex-col content-center min-h-screen pt-12 lg:pt-32 px-8">
                <h1 className="text-6xl sm:text-9xl black font-bold cursive leading-none lg:leading-snug pt-10 text-reveal-left">Hello.</h1>
                <h2 className="text-4xl sm:text-7xl black font-bold cursive leading-none lg:leading-snug pt-20 text-reveal">I am happy to see you here.</h2>
            </section>
        </main>    
    )
}