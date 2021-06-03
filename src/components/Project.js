import React, {useEffect, useState} from 'react';
import sanityClient from '../client';

import '../styles/animations.css'


export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(()=>{
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data)=> setProjectData(data))
        .catch(console.error);
    },[]);

    return (
        <main className="bg-gradient-to-bl from-purple-400 via-indigo-300 to-pink-200 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Projects</h1>
                <h2 className="text-lg text-gray-800 flex justify-center mb-12 casual">Welcome to my projects</h2>
                <section className="grid lg:grid-cols-2 gap-8">
                    { projectData && projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-white p-8 sm:p-16 fade-in-right-025s">
                        <h3 className="text-gray-800 text-2xl sm:text-3xl font-bold mb-2 hover:text-purple-700 cursive">
                            <a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer">
                                {project.title}
                            </a>
                        </h3>
                        <div className="text-gray-800 text-xs space-x-4 casual">
                            <span>
                                <strong className="font-bold">Finished on</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Company</strong>:{" "}
                                {project.place}
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-base sm:text-lg text-gray-800 leading-relaxed">{project.description}</p>
                            <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-purple-500 font-bold hover:underline hover:text-red-400 text-lg sm:text-xl">
                                Check the project{" "}
                                <span role="img" aria-label="right pointer">👉</span>
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}