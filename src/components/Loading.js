import React from 'react';

export default function Loading(){
    return (
        <main className="bg-gradient-to-br from-purple-400 via-indigo-300 to-pink-200">
            <section className="relative text-center flex-col justify-center min-h-screen pt-12 lg:pt-32 px-8">
                <h1 className="text-4xl sm:text-6xl black font-bold cursive leading-none lg:leading-snug pt-10">Loading...</h1>
            </section>
        </main>    
    )
}